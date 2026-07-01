# Ponytail Maroon + Claude CLI Integration

## Overview

This is a fork of Ponytail optimized for:
- **Claude CLI (long-cat)** as the primary agent platform
- **Maroon Technologies governance system** as the audit/decision layer
- **Autonomous zero-over-engineering** enforced at every turn

## Installation

```bash
claudecli plugin install https://github.com/Studentdevpack/maroonponytail
```

Or for development:

```bash
cd /path/to/your/project
ln -s /path/to/maroonponytail .claude-cli/plugins/ponytail-maroon
```

## Activation

On session start, Claude CLI will:

1. Load the **ponytail ruleset** (YAGNI, stdlib-first, minimal design)
2. Initialize **governance audit logging**
3. Ready the **sovereignty chain** for autonomous decisions
4. Display the active **mode** (lite/full/ultra)

## Commands

```
/ponytail [lite|full|ultra|off]      # Set intensity level
/ponytail-maroon-review              # Review for governance compliance
/ponytail-maroon-audit               # Full-repo audit
/ponytail-maroon-governance          # Show governance status
```

## Governance Audit Trail

Every session produces an immutable audit record:

```json
{
  "sessionId": "session_1719820000000",
  "mode": "full",
  "commandCount": 42,
  "autonomousDecisions": 14,
  "auditLogsFlushed": 14,
  "sovereigntyChainUpdates": 14,
  "timestamp": "2026-06-01T16:00:00.000Z"
}
```

## Integration with Maroon Backend

To connect to the Maroon governance engine:

1. Set `MAROON_API_ENDPOINT` env var
2. Set `MAROON_AUTH_TOKEN` for secure posting
3. Audit records will POST to `/governance/audit-log` on session end

```bash
export MAROON_API_ENDPOINT="https://maroon-core.example.com"
export MAROON_AUTH_TOKEN="$(your-governance-token)"
```

## Development

### Running Tests

```bash
npm test
```

### Adding New Skills

Create a new directory under `skills/`:

```
skills/your-skill/
  SKILL.md          # Markdown definition
  index.js          # Optional Node handler
```

### Building for Production

```bash
npm run build
```

## License

MIT — See LICENSE
