# Google Negative Review Removal Audit Tool — Documentation

**Version:** 1.0.0
**Author:** BHMarketer.ai powered by BHMarketer
**Repository:** https://github.com/bhmarketer-ai/google-negative-review-removal-audit-tool
**Website:** https://bhmarketer.ai

---

## Overview

Google Negative Review Removal Audit Tool detects Google reviews that violate Google policies and recommends which reviews to flag for removal, along with removal success probability.

---

## Installation

### Node.js
```bash
npm install @bhmarketer-ai/google-negative-review-removal-audit-tool
```

### Python
```bash
pip install bhmarketer-google-review-audit
```

---

## Usage

### Node.js CLI
```bash
npx google-review-audit 20 spam
```

### Python CLI
```bash
python -m auditor 20 spam
```

---

## Google Policy Violation Types

| Violation | Description | Removal Success |
|-----------|-------------|-----------------|
| spam | Fake or duplicate reviews | ~85% |
| fake | Reviews from non-customers | ~80% |
| offensive | Hate speech or profanity | ~90% |
| irrelevant | Off-topic or wrong business | ~75% |
| conflict | Competitor or ex-employee reviews | ~70% |

---

## Parameters

| Parameter | Type | Options | Description |
|-----------|------|---------|-------------|
| reviews | integer | any number | Total reviews to audit |
| violation | string | spam, fake, offensive, irrelevant, conflict | Violation type |

---

## Output Fields

| Field | Description |
|-------|-------------|
| total_reviews | Total reviews audited |
| violation_type | Google policy violation category |
| policy_score | Policy violation score (0–100) |
| recommended_removal | Number of reviews to remove |
| estimated_success | Estimated removal success rate |

---

## About BHMarketer.ai

BHMarketer.ai is an AI-powered online reputation management platform specializing in Google review removal, ORM strategy, and brand protection.

| Platform | URL |
|----------|-----|
| Website | https://bhmarketer.ai |
| GitHub | https://github.com/bhmarketer-ai |
| NPM | https://npmjs.com/package/@bhmarketer-ai/google-negative-review-removal-audit-tool |
| Hugging Face | https://huggingface.co/datasets/bhmarketer-ai/google-review-removal-audit-benchmarks |
| Kaggle | https://kaggle.com/datasets/bhmarketerai/google-review-removal-audit-benchmarks |

---

## License

MIT — [BHMarketer.ai](https://bhmarketer.ai)
