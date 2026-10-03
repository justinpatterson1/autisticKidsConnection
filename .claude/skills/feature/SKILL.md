---
name: feature
description: Manage current feature workflow - start, review, explain,revert or complete
argument-hint: load|start|review|explain|complete|revert
---

# Feature Workflow

Manages the full lifecycle of a feature from spec to merge.

## Working File

All implementation lands in this repo's `src/` directory — App Router files in `src/app/`, components in `src/components/`, content constants in `src/lib/content/`. Project docs and PRDs stay in `context/`.

@context/current-feature.md

### File Structure

current-feature.md has these sections:

- `# Current Feature` - H1 heading with feature name when active
- `## Status` - Not Started | In Progress | Complete
- `## Goals` - Bullet points of what success looks like
- `## Notes` - Additional context, constraints, or details from spec
- `## History` - Completed features (append only)

## Task

Execute the requested action: $ARGUMENTS

| Action | Description |
|--------|-------------|
| `load` | Load a feature spec or inline description |
| `start` | Begin implementation, create branch |
| `review` | Check goals met, code quality |
| `explain` | Document what changed and why |
| `revert` | roll back the code to the previous feature|
| `complete` | Commit, push, merge, reset |

See [actions/](actions/) for detailed instructions.

If no action provided, explain the available options.