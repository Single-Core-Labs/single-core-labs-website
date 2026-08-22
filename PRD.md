# Crucible — Product Requirements Document (PRD)

**Product**: Crucible — automated model-training loop platform (Python SDK + REST API + website demo)
**Owner**: Single Core Labs
**Status**: Draft v1
**Last updated**: 2026-08-19

---

## 1. Overview

Crucible is a small but REAL automated training loop: it iterates over data-adaptation and training-recipe configurations until a target metric is hit or a budget is exhausted. It is exposed in two shapes — a Python SDK (`client.datasets` / `client.runs`, mirroring the Adaption SDK surface) and a FastAPI REST API — and is presented to the public as a platform page + live demo on the Single Core Labs website.

The product is deliberately scoped to CPU-friendly workloads (tabular + text classification) so a full run completes in minutes. It is a proof-of-value for the "co-optimize data + training recipes" concept, not a production ML platform.

## 2. Goals & Non-Goals

### 2.1 Goals

| # | Goal | Priority |
|---|---|---|
| G1 | Real training, real search (Optuna TPE), real eval — no mocked results | P0 |
| G2 | Two task types: tabular classification (sklearn) and text classification (TF-IDF baseline + opt-in DistilBERT) | P0 |
| G3 | Recipe search loop that stops on `target_metric` or `budget_iterations`/`budget_seconds` | P0 |
| G4 | One code path, two interfaces: Python SDK and REST API | P0 |
| G5 | Run history persisted in SQLite (runs, iterations, scores, artifacts) | P0 |
| G6 | Public-facing website page + live demo (upload a CSV, watch a real run) | P1 |
| G7 | CLI (`typer`) for local runs, consistent with internal tooling style | P1 |
| G8 | Optional dashboard HTML for run progress | P2 |

### 2.2 Non-Goals (explicit — do not fake, do not scope-creep)

- No distributed training, no GPU cluster orchestration, no LLM-scale fine-tuning.
- No real "data adaptation"/rewriting step — v1 does cleaning + class-balance + light augmentation, explicitly labeled as a stub for the real adapt step.
- No multi-tenant auth — single local API key stub only.
- DistilBERT fine-tuning is opt-in and budget-capped (1–2 epochs, small subset). It will NOT out-search TF-IDF + LinearSVC on tiny demo datasets; the run report may show this honestly.
- No production deployment of the training backend (local/self-hosted only for v1).

## 3. Users / Personas

| Persona | Needs |
|---|---|
| **Data scientist / ML engineer** | Upload a dataset, define target metric + budget, get a converged model or an honest "budget exhausted" report; inspect every tried config |
| **Prospective customer** | Visit the website, understand the concept, try the live demo with their own CSV, see real iteration history |
| **Internal engineers** | Reproduce runs locally via CLI/SDK; read run history from SQLite |

## 4. Functional Requirements

### 4.1 Dataset Management (P0)

- FR-01: Upload a CSV; server stores file + metadata (name, path, task type, column mapping JSON, status, created_at).
- FR-02: List / fetch datasets.
- FR-03: Trigger a run on a dataset with a column mapping (e.g. `{"text": "review", "label": "sentiment"}`).
- FR-04: Wait for completion of dataset runs.

### 4.2 Run Management (P0)

- FR-05: Create a run: `dataset_id`, `task_type` (`tabular` \| `text` \| `auto`), `target_metric`, `budget_iterations`, `budget_seconds`.
- FR-06: Poll run status; terminal states: `pending`, `running`, `converged`, `budget_exhausted`, `failed`.
- FR-07: Fetch best score + best config at the end of a run.
- FR-08: Download the best model artifact (`model.joblib`).

### 4.3 Search Loop (P0)

- FR-09: Iterate `trial_num < budget_iterations` AND `elapsed < budget_seconds`; on each trial, suggest a config from the task-type search space (Optuna TPE), train + evaluate, log iteration.
- FR-10: Persist every iteration: config JSON, score, metric name, duration, artifact path.
- FR-11: Stop early (mark `converged`) when `score >= target_metric`; otherwise mark `budget_exhausted`.
- FR-12: Keep the best artifact on disk regardless of terminal state.

### 4.4 Adapt Step (P0 — labeled v1 stub)

- FR-13: Before search: dedup rows, drop nulls in target column, class-balance via simple oversampling, lowercase/strip for text.
- FR-14: All adapt-step code and docs must carry an explicit "v1 adapt step" label — never confused with real data adaptation.

### 4.5 Model Support (P0/P1)

- FR-15 (P0): Tabular — LogisticRegression, RandomForest, GradientBoosting with per-model hyperparameters (`C`, `n_estimators`, `max_depth`, ...).
- FR-16 (P0): Text baseline — TF-IDF + LinearSVC (`ngram_range`, `max_features`, `C`).
- FR-17 (P1): Text optional — DistilBERT fine-tune, gated behind a flag, budget-capped.

### 4.6 Interfaces (P0)

- FR-18: REST: `POST /datasets`, `POST /datasets/{id}/run`, `GET /datasets/{id}`, `POST /runs`, `GET /runs/{id}`, `GET /runs/{id}/artifact`.
- FR-19: SDK mirrors REST 1:1 with `wait()` semantics.
- FR-20 (P1): CLI: `crucible run ...` with typer.

### 4.7 Website Integration (P1)

- FR-21: Marketing page `/platform` (Cohere-style, matching existing TechPage/HealthcareIntelligencePage patterns): hero → capabilities ("data + training co-optimization") → SDK code snippet → live demo CTA.
- FR-22: Demo page `/platform/demo`: upload CSV → create run → poll progress → show best score/config and artifact download.
- FR-23: Register routes in `src/App.jsx`, nav in `src/lib/constants.js` + `Navbar.jsx`, add routes to `scripts/sitemap-config.mjs` + `scripts/prerender.mjs`.

## 5. Data Model (SQLite)

```
datasets(id, name, path, task_type, column_mapping_json, status, created_at)
runs(id, dataset_id, target_metric, budget_iterations, budget_seconds,
     status, best_score, best_config_json, started_at, finished_at)
iterations(id, run_id, iteration_num, config_json, score, metric_name,
           duration_seconds, artifact_path, created_at)
```

## 6. Tech Stack

| Layer | Choice |
|---|---|
| Language | Python 3.11+ |
| Env | `uv` |
| API | FastAPI + Pydantic v2 |
| Background execution | `concurrent.futures.ProcessPoolExecutor` |
| Search | Optuna (TPE sampler) |
| Models | scikit-learn; HF `transformers`+`datasets` only for DistilBERT (opt-in) |
| Storage | SQLite via `sqlmodel`; local filesystem for artifacts |
| CLI | `typer` |
| SDK client | thin `httpx` wrapper |

## 7. Acceptance Criteria (per phase)

- **Phase 1**: DB schema + FastAPI skeleton + dataset upload/list. *AC*: manual curl round trip (`POST /datasets` with a CSV → `GET /datasets` returns it).
- **Phase 2**: Tabular-only search loop, synchronous, CLI-triggerable. *AC*: converges on `sklearn.datasets.load_breast_cancer` when `target_metric` is reachable; iterations persisted.
- **Phase 3**: Text path (TF-IDF first; DistilBERT flag-gated). *AC*: text and tabular share the same run/iteration schema.
- **Phase 4**: ProcessPoolExecutor background execution + polling + SDK `wait()` + minimal dashboard. *AC*: run returns `202`-style async shape; SDK waits to terminal state; dashboard shows live progress.
- **Phase 5**: README + honest "what this is vs. the real AutoScientist" + adapt-step disclaimer. *AC*: a fresh engineer can run the whole thing from the README.

## 8. Success Metrics (POC stage)

- A full default run (15 iterations, tabular) completes in < 5 minutes on CPU.
- Breast cancer demo converges to the target metric with a real, loadable `.joblib` artifact.
- Both interfaces (curl + SDK) produce identical run history in SQLite.
- Demo page shows a real, verifiable run (no mocked progress).

## 9. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| DistilBERT download/install breaks "few hours" timeline | Flag-gated; TF-IDF path is the default; label as reasoned decision, not measured result |
| Optuna + sklearn version drift | Pin dependencies in `pyproject.toml`, lock with `uv.lock` |
| Website demo exposed without running backend | Demo page shows clear "backend offline" state; CTA to run locally |
| Search loop hangs (single bad config) | Per-trial timeout + `budget_seconds` hard cap checked every iteration |
| Confusion with real data adaptation | Mandatory "v1 adapt step" labels in code, README, and website copy |

## 10. Open Questions

1. Should `/platform/demo` require the FastAPI server to be deployed anywhere, or is a "run it locally" workflow enough for v1?
2. Is `supabase/` in scope for run persistence later, or does SQLite remain the source of truth?
3. Do we want the dashboard HTML served by FastAPI (single origin) or as a separate static asset?