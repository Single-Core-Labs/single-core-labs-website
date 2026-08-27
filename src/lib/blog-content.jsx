export const BLOG_POSTS = [
  {
    slug: 'solving-the-ml-handoff-with-kitops',
    title: 'Solving the ML Handoff: How We Use KitOps to Package and Version AI Workloads',
    excerpt: 'AI deployments fail at the handoff between data science, engineering, and DevOps. Here is how we integrated KitOps to package models, datasets, and configs into OCI ModelKits.',
    category: 'MLOps',
    readTime: '6 min read',
    date: '2026-08-27',
    author: 'Single Core Labs',
    tags: ['MLOps', 'KitOps', 'ModelKit', 'Docker', 'OCI Registry', 'Enterprise AI'],
    relatedGuides: ['sovereign-ai-infrastructure', 'llm-security-patterns'],
    content: [
      {
        type: 'paragraph',
        text: 'At Single Core Labs, our ML pipelines used to break at the exact same point every time: the handoff. The data scientist finishes training, but the application team cannot reproduce the outputs. DevOps deploys the model, but uses the wrong weights. Compliance asks which version of the dataset was used to train the production model, and nobody knows. The packaging problem in enterprise AI is severely underrated, and it often breaks deployments before they even go live.',
      },
      {
        type: 'paragraph',
        text: 'We integrated KitOps to fix this disjointed process. KitOps packages your model weights, training dataset references, code, configuration, and agent skills into a single, versioned OCI-compliant artifact called a ModelKit. These ModelKits are stored directly in the container registries you already run, such as AWS ECR, JFrog Artifactory, Harbor, or GitHub Packages. By doing this, we turned our existing container registry into an AI registry without adding new, complex tools to our stack.',
      },
      {
        type: 'diagram',
        slug: 'kitops-workflow',
      },
      {
        type: 'callout',
        title: 'The AI Packaging Problem',
        text: 'Before adopting KitOps, our workflow was fragmented. Model weights were pulled from custom S3 buckets, configurations were stored in Notion docs or Git repositories, and dataset references were lost in Slack logs. KitOps provides a clean, standardized format ("Docker for models") that keeps everything together.',
      },
      {
        type: 'paragraph',
        text: 'What actually changed for us after integrating KitOps:',
      },
      {
        type: 'paragraph',
        text: '1. No more scattered checkpoints: All files, from model weights to model cards and configs, are tied together in a single versioned ModelKit. We no longer search across S3 buckets and text documents to figure out which model file goes with which code version.',
      },
      {
        type: 'paragraph',
        text: '2. SHA-256 tamper detection: KitOps generates unique SHA-256 hashes for every layer of the ModelKit. This provides cryptographically secure tamper detection, giving our security team complete confidence in what is running in production.',
      },
      {
        type: 'paragraph',
        text: '3. Selective pull: A ModelKit is composed of layers. DevOps and CI/CD pipelines can pull only the model weights or configs they need, leaving 80GB of raw training data or source code in the registry. This reduces deployment times and saves significant network bandwidth.',
      },
      {
        type: 'paragraph',
        text: '4. Auto-generated SBOM: KitOps automatically generates a Software Bill of Materials (SBOM) for the ModelKit. This SBOM maps directly to compliance frameworks like the EU AI Act and NIST Risk Management Framework (RMF), streamlining audit processes.',
      },
      {
        type: 'paragraph',
        text: '5. Zero new tooling: Because ModelKits are standard OCI artifacts, our existing CI/CD pipelines, access control policies, security scanners, and container registries just work. We did not need to buy or maintain any new registry platforms.',
      },
      {
        type: 'callout',
        title: 'Case Study: The Standard in Action',
        text: 'Standardizing model packaging is becoming a standard in the industry. For example, topological deep learning research lab Arlequin AI adopted KitOps to bundle their model cards, MLflow experiment links, and LakeFS data references into ModelKits. By doing so, they promoted models across dev, staging, and production as simple registry operations rather than manual copy-paste handoffs.',
      },
      {
        type: 'paragraph',
        text: 'Integrating KitOps has changed how we think about AI software delivery. We no longer ship raw weights; we ship fully verified, compliant, and auditable ModelKits. For any enterprise deploying AI in regulated environments, solving this packaging problem before it breaks a deployment is essential.',
      },
      {
        type: 'guide-link',
        slug: 'sovereign-ai-infrastructure',
        text: 'Read our full guide on deploying sovereign AI infrastructure in regulated markets',
      },
    ],
  },
  {
    slug: 'why-indian-enterprises-need-sovereign-ai',
    title: 'Why Indian Enterprises Need Sovereign AI Infrastructure',
    excerpt: 'Indian enterprises in BFSI, healthcare, and government face a painful choice: use US-based AI APIs and violate data residency, or build in-house and lose access to top models. Sovereign AI bridges this gap.',
    category: 'Infrastructure',
    readTime: '6 min read',
    date: '2026-07-25',
    author: 'Single Core Labs',
    tags: ['sovereign AI', 'data residency', 'Indian enterprises', 'DPDPA'],
    relatedGuides: ['sovereign-ai-infrastructure'],
    content: [
      {
        type: 'paragraph',
        text: "Every week, we talk to Indian enterprises that are stuck. They know they need LLMs to stay competitive. Their competitors are deploying AI assistants, automating workflows, and cutting costs. But when they look at the options, both paths seem blocked.",
      },
      {
        type: 'paragraph',
        text: 'Path one is using US-based API providers like OpenAI or Anthropic. The models are excellent, the latency is tolerable, and the pricing is straightforward. But the Digital Personal Data Protection Act 2023 makes it illegal to send personal data outside India without explicit consent. For a bank processing loan applications or a hospital handling patient records, consent-based data transfer at scale is operationally impossible.',
      },
      {
        type: 'paragraph',
        text: 'Path two is building in-house. You buy GPUs, set up inference servers, and deploy open-weight models. You are fully compliant. But the models are 6-12 months behind GPT-4o, you need a team of ML engineers to maintain the stack, and the upfront hardware cost runs into crores.',
      },
      {
        type: 'callout',
        title: 'The Market Reality',
        text: 'According to our estimates, less than 5 percent of Indian enterprises have deployed LLMs in production for customer-facing or regulated workloads. The remaining 95 percent are stuck in the pilot phase, cycling through PoCs that never go live because the infrastructure question remains unresolved.',
      },
      {
        type: 'paragraph',
        text: 'Sovereign AI infrastructure resolves this tension. The idea is straightforward: you deploy open-weight models on infrastructure that you control, within Indias geographic boundaries, with no data egress. The models run on GPUs located in Indian data centers. The inference endpoint is a domestic IP address. The audit logs never leave the country.',
      },
      {
        type: 'paragraph',
        text: 'The technology to do this exists today. NVIDIA GPUs are available through Indian cloud providers like Yotta and CtrlS. Open-weight models from Meta, Alibaba, and Mistral match or exceed proprietary models on most enterprise benchmarks. Tools like vLLM and TensorRT-LLM make self-hosted inference production-ready.',
      },
      {
        type: 'paragraph',
        text: 'What has been missing is the integration layer: someone to wire the GPUs, the models, the guardrails, and the compliance framework into a single deployable stack. That is the gap that sovereign AI infrastructure fills.',
      },
      {
        type: 'guide-link',
        slug: 'sovereign-ai-infrastructure',
        text: 'Read our full guide on deploying sovereign AI infrastructure in regulated markets',
      },
      {
        type: 'paragraph',
        text: 'For Indian enterprises, the question is no longer whether sovereign AI is possible. It is whether they can afford to wait while competitors deploy it.',
      },
    ],
  },
  {
    slug: 'fine-tuning-vs-rag-decision-guide',
    title: 'Fine-Tuning vs. RAG: When to Use Which',
    excerpt: 'Most teams reach for fine-tuning when they should use RAG, or vice versa. Here is a decision framework based on dozens of enterprise deployments.',
    category: 'Engineering',
    readTime: '8 min read',
    date: '2026-07-18',
    author: 'Single Core Labs',
    tags: ['fine-tuning', 'RAG', 'LLM optimization', 'enterprise AI'],
    relatedGuides: ['llm-fine-tuning', 'agentic-workflows'],
    content: [
      {
        type: 'paragraph',
        text: 'The most common mistake we see in enterprise AI projects is choosing between fine-tuning and RAG based on hype rather than requirements. Fine-tuning is popular because it sounds impressive. RAG is popular because it is easier to implement. Both are wrong when applied to the wrong problem.',
      },
      {
        type: 'paragraph',
        text: 'Here is the simplest decision rule we have found. If the model knows how to do the task but does not have the information, use RAG. If the model has the information but does not know how to do the task, use fine-tuning.',
      },
      {
        type: 'paragraph',
        text: 'A concrete example. A medical summarization system needs to extract diagnosis codes and treatment plans from clinical notes. A general-purpose LLM like GPT-4o understands what a diagnosis code is and how to extract it. It just does not know the specific ICD-10 codes used by Indian hospitals. That is a RAG problem: feed the model a lookup table of codes.',
      },
      {
        type: 'paragraph',
        text: 'Now consider a system that generates legal disclaimers in the specific format required by Indian courts. The format is unusual: specific headings, numbered paragraphs, particular phrasing. A general-purpose LLM produces something vaguely correct but not legally usable. That is a fine-tuning problem: teach the model the format.',
      },
      {
        type: 'callout',
        title: 'The Hybrid Approach',
        text: 'Most production systems use both. The model is fine-tuned on the output format, then given RAG access to reference documents. The fine-tuning handles the structure. The RAG handles the content. We see this pattern in about 70 percent of our enterprise deployments.',
      },
      {
        type: 'guide-link',
        slug: 'llm-fine-tuning',
        text: 'Read our full guide on LLM fine-tuning strategy for domain-specific applications',
      },
    ],
  },
  {
    slug: 'healthcare-ai-india-2026',
    title: 'Healthcare AI in India: The 2026 Landscape',
    excerpt: 'From Ayushman Bharat to DPDPA compliance, here is what Indian healthcare organizations need to know about deploying AI in clinical settings.',
    category: 'Healthcare',
    readTime: '9 min read',
    date: '2026-07-15',
    author: 'Single Core Labs',
    tags: ['healthcare AI', 'India', 'DPDPA', 'clinical AI', 'EHR'],
    relatedGuides: ['healthcare-data-pipelines'],
    content: [
      {
        type: 'paragraph',
        text: 'Indian healthcare is at an inflection point. The Ayushman Bharat Digital Mission has created a framework for digital health records. The DPDPA 2023 has set clear rules for personal data processing. And AI models have reached a level of reliability where they can assist in clinical decision-making.',
      },
      {
        type: 'paragraph',
        text: 'But three barriers remain. First, data quality. Indian hospitals use dozens of different EHR systems, many of which were not designed for interoperability. Second, compliance. The combination of DPDPA and HIPAA creates a complex regulatory environment that most AI vendors do not understand. Third, trust. Doctors will not use an AI system unless they understand how it works and can verify its outputs.',
      },
      {
        type: 'paragraph',
        text: 'We are seeing the most traction in three areas. Medical imaging triage: AI models that flag urgent cases in radiology workflows. Clinical documentation: AI that generates discharge summaries and consultation notes from doctor-patient conversations. Prior authorization: AI that automates the insurance approval process for hospitals.',
      },
      {
        type: 'paragraph',
        text: 'Each of these applications requires the same foundation: clean, de-identified, structured data flowing through a compliant pipeline. The models are the easy part. The data pipeline is where the actual work happens.',
      },
      {
        type: 'guide-link',
        slug: 'healthcare-data-pipelines',
        text: 'Read our full guide on designing AI-ready data pipelines for healthcare',
      },
    ],
  },
  {
    slug: 'llm-security-checklist',
    title: 'LLM Security: A Practical Checklist for Production Deployments',
    excerpt: 'Nine security controls every production LLM system needs, from prompt injection defenses to immutable audit logging.',
    category: 'Security',
    readTime: '5 min read',
    date: '2026-07-12',
    author: 'Single Core Labs',
    tags: ['LLM security', 'prompt injection', 'AI security', 'enterprise'],
    relatedGuides: ['llm-security-patterns'],
    content: [
      {
        type: 'paragraph',
        text: 'Security teams are right to be nervous about LLMs. The attack surface is new, the tooling is immature, and the consequences of a breach are severe. But the fundamentals are the same as any other production system: authenticate, authorize, audit, isolate.',
      },
      {
        type: 'paragraph',
        text: 'Here is our production checklist. Input guard: every prompt passes through a regex filter and a classifier model before reaching the LLM. Authentication: every request carries a short-lived OAuth 2.0 token. Rate limiting: per-user and per-endpoint limits prevent abuse. Model sandboxing: the model process has no network egress. Output guard: every response is scanned for PII and policy violations. Audit log: every request and response is written to an immutable store. Version pinning: all model versions are pinned and signed. Access control: fine-grained permissions per endpoint. Incident response: a documented process for prompt injection events.',
      },
      {
        type: 'callout',
        title: 'Start With These Three',
        text: 'If you can only implement three controls today, make them input guard, output guard, and audit log. These three catch the most common attack patterns and provide the evidence you need for compliance audits.',
      },
      {
        type: 'guide-link',
        slug: 'llm-security-patterns',
        text: 'Read our full guide on enterprise security patterns for LLM deployments',
      },
    ],
  },
]
