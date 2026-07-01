# Claude CLI Setup Guide for Maroon Ponytail

## Prerequisites

- Claude CLI (long-cat) installed: `brew install claude-cli` or equivalent
- Node.js 18+
- Git

## Step 1: Clone or Fork the Repository

```bash
git clone https://github.com/Studentdevpack/maroonponytail.git
cd maroonponytail
git checkout long-cat-cli
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Link the Plugin

### Option A: Global Installation (Recommended for Development)

```bash
claude-cli plugin link ./
```

### Option B: Copy to Claude CLI Config

```bash
mkdir -p ~/.config/claude-cli/plugins
ln -s $(pwd) ~/.config/claude-cli/plugins/ponytail-maroon
```

## Step 4: Verify Installation

Start a new Claude CLI session:

```bash
claude-cli
```

You should see:

```
=== PONYTAIL ACTIVATED ===
Mode: full
[GOVERNANCE] Audit context initialized: session_1719820000000
```

## Step 5: Test the Integration

```
> /ponytail-maroon-review
> /ponytail full
> /ponytail-maroon-audit
```

## Configuring Maroon Governance Backend

To connect to your Maroon governance system:

```bash
# Create .env file in your project
echo 'MAROON_API_ENDPOINT=https://your-maroon-instance.com' >> .env
echo 'MAROON_AUTH_TOKEN=your-governance-token' >> .env

# Source before running Claude CLI
source .env
claude-cli
```

## Troubleshooting

### Plugin Not Loading

```bash
claude-cli plugin list
claude-cli plugin verify ponytail-maroon
```

### Audit Logs Not Flushing

Check the audit context file:

```bash
cat ~/.ponytail-audit-context.json
```

### Hooks Not Executing

Verify hook permissions:

```bash
chmod +x hooks/ponytail-cli-*.js
```

## Next Steps

- Read [MAROON_INTEGRATION.md](./../.claude-cli/MAROON_INTEGRATION.md) for governance setup
- Explore [skills/](../skills/) for available agent commands
- Check [tests/](../tests/) for test suite
