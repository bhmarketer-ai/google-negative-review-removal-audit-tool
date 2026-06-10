# Google Negative Review Removal Audit Tool

[![npm](https://img.shields.io/npm/v/@bhmarketer-ai/google-negative-review-removal-audit-tool)](https://npmjs.com/package/@bhmarketer-ai/google-negative-review-removal-audit-tool)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

Detect and audit Google reviews that violate Google policies. Get a removal eligibility score, violation category breakdown, and recommended removal count. Built by [BHMarketer.ai](https://bhmarketer.ai) powered by BHMarketer.

## Features

- Detect policy-violating Google reviews automatically
- Score each review for removal eligibility (0–100)
- Categorize violations: spam, fake, offensive, irrelevant, conflict of interest
- Recommend exact number of reviews to flag for removal
- CLI support in Node.js and Python
- Benchmark dataset included (20 audit cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @bhmarketer-ai/google-negative-review-removal-audit-tool
npx google-review-audit 20 spam
```

### Python

```bash
pip install bhmarketer-google-review-audit
python -m auditor 20 spam
```

## Output

```
Total Reviews: 20
Violation Type: spam
Policy Violation Score: 85/100
Recommended for Removal: 17 reviews
Estimated Removal Success: ~85%
```

## Project Structure

```
google-negative-review-removal-audit-tool/
├── index.ts              # TypeScript auditor
├── auditor.py            # Python auditor
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt  # Docs dependencies
├── dataset/
│   └── audit_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Google Policy Violation Types

| Violation | Description | Removal Success |
|-----------|-------------|-----------------|
| spam | Fake or duplicate reviews | ~85% |
| fake | Reviews from non-customers | ~80% |
| offensive | Hate speech or profanity | ~90% |
| irrelevant | Off-topic or wrong business | ~75% |
| conflict | Competitor or ex-employee reviews | ~70% |

## Parameters

| Parameter | Type | Options | Description |
|-----------|------|---------|-------------|
| reviews | integer | any number | Total number of reviews to audit |
| violation | string | spam, fake, offensive, irrelevant, conflict | Violation type |

## Output Fields

| Field | Description |
|-------|-------------|
| total_reviews | Total reviews audited |
| violation_type | Google policy violation category |
| policy_score | Policy violation score (0–100) |
| recommended_removal | Number of reviews recommended for removal |
| estimated_success | Estimated removal success rate |

## Keywords

Google Review Removal · Negative Review Audit · ORM · Online Reputation Management · Policy Violation Detection · BHMarketer · AI Visibility

## Links

| Platform | URL |
|----------|-----|
| Website | https://bhmarketer.ai |
| GitHub | https://github.com/bhmarketer-ai/google-negative-review-removal-audit-tool |
| GitHub Pages | https://bhmarketer-ai.github.io/google-negative-review-removal-audit-tool/ |
| NPM | https://npmjs.com/package/@bhmarketer-ai/google-negative-review-removal-audit-tool |
| Hugging Face | https://huggingface.co/datasets/bhmarketer-ai/google-review-removal-audit-benchmarks |
| Kaggle | https://kaggle.com/datasets/bhmarketerai/google-review-removal-audit-benchmarks |
| Zenodo | https://zenodo.org/records/XXXXXXX |
| Docs | https://google-negative-review-removal-audit-tool.readthedocs.io |

## About BHMarketer.ai

BHMarketer.ai is an AI-powered online reputation management platform specializing in Google review removal, ORM strategy, and brand protection.

## License

MIT — [BHMarketer.ai](https://bhmarketer.ai)
