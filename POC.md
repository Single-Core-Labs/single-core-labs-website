# Crucible — Proof of Concept (POC)

**Goal**: Prove that a real, CPU-only automated training loop — data-adapt + recipe-search until `target_metric` or budget — can be built in hours, exposed as SDK + REST, and demoed on the Single Core Labs website.
**Status**: Draft v1
**Last updated**: 2026-08-19

---

## 1. What the POC proves

| Claim | Evidence required |
|---|---|
| Real training/search/eval (no mocks) | Run converges on breast cancer; every iteration logged with a real score; artifact loads with `joblib.load` |
| Recipe search stops correctly | `converged` when target hit; `budget_exhausted` when iterations/seconds run out |
| Two interfaces, one code path | Identical run history via curl and via SDK |
| Two task types | Tabular (sklearn) and text (TF-IDF + LinearSVC) share the same run/iteration schema |
| Website demo is real | `/platform/demo` shows a live run against the actual API |

## 2. Scope

### In scope
- Python 3.11+ service under `crucible/` at the repo root (this checkout has no `scl-aggregator/` folder — the backend is a new top-level directory).
- SQLite persistence: `datasets`, `runs`, `iterations` via `sqlmodel`.
- FastAPI + Pydantic v2 API; Optuna TPE search; sklearn models; TF-IDF text baseline.
- Thin httpx SDK client mirroring `client.datasets` / `client.runs`.
- typer CLI for local runs.
- Website: marketing page `/platform` + live demo page `/platform/demo` (P1).
- DistilBERT path: opt-in, flag-gated, budget-capped (stretch).

### Out of scope (do not fake)
- Distributed training, GPU orchestration, LLM-scale fine-tuning.
- Real data adaptation — v1 adapt step is dedup + class-balance + light text cleaning, labeled as a stub everywhere.
- Multi-tenant auth — single local API key stub.
- Production deployment of the training backend.

## 3. Architecture

```
Python SDK ──▶ FastAPI (/datasets, /runs, /training_models)
                    │
                    ▼
             Run Controller (ProcessPoolExecutor, Phase 4)
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
   Adapt step (v1 stub)    Recipe search (Optuna TPE)
                                  │
                                  ▼
                          Train + eval one config
                          (sklearn / HF Trainer)
                                  │
                                  ▼
                      SQLite (runs, iterations, scores) + artifacts dir
```

## 4. Build plan (phase-gated — halt & review at each boundary)

### Phase 1 — Skeleton (≈1–2 h)
- `uv init crucible`; pyproject with pinned deps (fastapi, pydantic v2, optuna, scikit-learn, sqlmodel, typer, httpx).
- `db.py` (tables above), `schemas.py`, FastAPI app + `POST /datasets` (multipart upload) + `GET /datasets`.
- **Verify**: `uv run uvicorn crucible.api.main:app --reload`; curl upload a sample CSV; fetch it back.
- **Gate**: dataset round trip works before moving on.

### Phase 2 — Tabular search loop, synchronous (≈2–3 h)
- `adapt.py` (v1 stub), `train_tabular.py`, `search.py` (Optuna loop per Section 5 algorithm), CLI `crucible run`.
- Iterations + best artifact persisted to SQLite/disk.
- **Verify**: `crucible run --dataset breast_cancer --target 0.95 --budget-iterations 15` converges; check `GET /runs/{id}` shows `converged` and a real best score.
- **Gate**: convergence actually terminates the loop.

### Phase 3 — Text path (≈1–2 h)
- TF-IDF + LinearSVC baseline; DistilBERT behind `--with-transformers` flag (budget-capped, small subset).
- **Verify**: same demo on a tiny text dataset (e.g. 20 newsgroups sample or a 200-row CSV); same iteration schema as tabular.
- **Gate**: text and tabular share the schema; DistilBERT is honest about not beating TF-IDF on tiny data.

### Phase 4 — Background execution + polling + SDK (≈2–3 h)
- Run controller on `ProcessPoolExecutor`; runs return immediately, pollable.
- SDK `wait()`/`wait_for_completion()`; minimal dashboard HTML served by FastAPI.
- **Verify**: submit run, poll, download artifact via SDK; dashboard shows live progress.
- **Gate**: SDK and curl produce identical run history.

### Phase 5 — README + website integration (≈1–2 h)
- README with honest "what this does vs. the real AutoScientist" section + adapt-step disclaimer.
- `CruciblePage.jsx` (`/platform`), `CrucibleDemoPage.jsx` (`/platform/demo`), route/nav/sitemap/prerender wiring per the repo Editing Checklist.
- **Verify**: `npm run dev` → demo page uploads a CSV and shows a real converged run.
- **Gate**: no fake progress anywhere.

**Total**: ~7–12 h of focused work; Phase 4 is where "a few hours" starts slipping — ready to cut the dashboard if time runs short.

## 5. Search loop algorithm (as-built contract)

```
def run_search(run):
    trial_num = 0
    best_score = -inf
    while trial_num < run.budget_iterations and elapsed < run.budget_seconds:
        config = optuna_suggest(search_space[run.task_type])
        model, score = train_and_eval(config, dataset)
        log_iteration(run, trial_num, config, score)
        if score > best_score:
            best_score, best_config = score, config
            save_artifact(model, run.id)
        if score >= run.target_metric:
            mark_converged(run, best_score, best_config)
            return
        trial_num += 1
    mark_budget_exhausted(run, best_score, best_config)
```

Search spaces:
- Tabular: `model ∈ {logreg, random_forest, gboost}` + per-model hyperparams.
- Text TF-IDF: `ngram_range`, `max_features`, `C` (LinearSVC).
- Text DistilBERT (opt-in): `learning_rate`, `epochs ∈ {1,2}`, `max_length`.

## 6. Verification commands (self-serve)

```bash
# Phase 1
curl -X POST http://localhost:8000/datasets -F "file=@data.csv"
curl http://localhost:8000/datasets

# Phase 2
uv run crucible run --task-type tabular --target 0.95 --budget-iterations 15 --dataset data.csv --columns '{"features": ["a","b"], "label": "y"}'
curl http://localhost:8000/runs/<id>

# Phase 3
uv run crucible run --task-type text --target 0.85 --budget-iterations 15 --dataset reviews.csv --columns '{"text": "review", "label": "sentiment"}'

# Phase 4
python -c "from crucible import Client; c = Client(); r = c.runs.wait(c.runs.create(...))"
```

## 7. Honest limitations (must be visible in README + UI)

- The adapt step is a v1 stub (clean/balance/oversample) — NOT the "co-optimize data + training recipes" loop the concept promises.
- DistilBERT is opt-in and will typically lose to TF-IDF on tiny demo datasets — shown, not hidden, in run reports.
- Single local API key; SQLite = single-node only.
- If a step is skipped (e.g. no GPU), it is a reasoned, documented decision — never presented as a measured result.

## 8. Decision log

| # | Decision | Rationale |
|---|---|---|
| D1 | Backend lives at repo root `crucible/`, not inside a backend monorepo | No `scl-aggregator/` exists in this checkout; website + backend side by side is simplest |
| D2 | Website integration is Phase 5 (last) | Avoid a pretty demo page with nothing real behind it |
| D3 | DistilBERT flag-gated, off by default | Download + install risk to the "few hours" timeline; TF-IDF is the honest default for tiny data |
| D4 | ProcessPoolExecutor over Celery/Redis | Real parallelism with zero infra for POC scale |