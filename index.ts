#!/usr/bin/env node

interface AuditInput {
  reviews: number;
  violation: "spam" | "fake" | "offensive" | "irrelevant" | "conflict";
}

interface AuditOutput {
  totalReviews: number;
  violationType: string;
  policyScore: number;
  recommendedRemoval: number;
  estimatedSuccess: string;
}

const VIOLATION_SCORES: Record<string, number> = {
  spam: 85,
  fake: 80,
  offensive: 90,
  irrelevant: 75,
  conflict: 70,
};

const REMOVAL_RATES: Record<string, number> = {
  spam: 0.85,
  fake: 0.80,
  offensive: 0.90,
  irrelevant: 0.75,
  conflict: 0.70,
};

export function auditReviews(input: AuditInput): AuditOutput {
  const policyScore = VIOLATION_SCORES[input.violation] ?? 75;
  const rate = REMOVAL_RATES[input.violation] ?? 0.75;
  const recommendedRemoval = Math.round(input.reviews * rate);
  const estimatedSuccess = `~${Math.round(rate * 100)}%`;

  return {
    totalReviews: input.reviews,
    violationType: input.violation,
    policyScore,
    recommendedRemoval,
    estimatedSuccess,
  };
}

const args = process.argv.slice(2);
const reviews = parseInt(args[0]) || 10;
const violation = (args[1] as AuditInput["violation"]) || "spam";

const result = auditReviews({ reviews, violation });

console.log(`Total Reviews: ${result.totalReviews}`);
console.log(`Violation Type: ${result.violationType}`);
console.log(`Policy Violation Score: ${result.policyScore}/100`);
console.log(`Recommended for Removal: ${result.recommendedRemoval} reviews`);
console.log(`Estimated Removal Success: ${result.estimatedSuccess}`);
