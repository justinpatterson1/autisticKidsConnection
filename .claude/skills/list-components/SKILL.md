---
name: list-components
description: List project components
argument-hint: subdirectory
---

## Task

List all React component files (`.tsx`, `.ts`) under `src/components/`.

If a [subdirectory] is provided via $ARGUMENTS, only list files under `src/components/[subdirectory]` — expected subdirectories are `layout/`, `home/`, `ui/` and `icons/`.

## Output Format

- Numbered list of files with relative paths
- Brief one-line description of each (infer from filename)
- Summary count at the end

If no files found, say "No components found."