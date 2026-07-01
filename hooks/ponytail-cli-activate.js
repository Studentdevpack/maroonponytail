#!/usr/bin/env node
// Claude CLI (long-cat) activation hook
// Initializes ponytail mode and governance audit logging

const fs = require('fs');
const path = require('path');
const { getPonytailInstructions } = require('./ponytail-instructions');
const { getDefaultMode } = require('./ponytail-config');

const mode = getDefaultMode();

if (mode === 'off') {
  console.log('PONYTAIL: off');
  process.exit(0);
}

// 1. Emit ponytail ruleset
const instructions = getPonytailInstructions(mode);
console.log('\n=== PONYTAIL ACTIVATED ===');
console.log(`Mode: ${mode}`);
console.log('\n' + instructions + '\n');

// 2. Initialize governance audit context
const auditContext = {
  sessionId: `session_${Date.now()}`,
  mode: mode,
  startTime: new Date().toISOString(),
  commandCount: 0,
  auditTrail: [],
  maroonGovernance: {
    autonomousDecisions: 0,
    auditLogsFlushed: 0,
    sovereigntyChainUpdates: 0
  }
};

// Store audit context in temp file for this session
const auditPath = path.join(process.env.HOME || '/tmp', '.ponytail-audit-context.json');
fs.writeFileSync(auditPath, JSON.stringify(auditContext, null, 2));

console.log(`[GOVERNANCE] Audit context initialized: ${auditContext.sessionId}`);
console.log(`[GOVERNANCE] Sovereignty chain ready for autonomous decisions`);
