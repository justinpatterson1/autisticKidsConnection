# **Revert Action**

1. Check $ARGUMENTS (after "revert"):
   - If empty:
     - Identify the most recently successfully completed feature implementation.
     - Use `current-feature.md`, feature history, and Git history to determine the last completed feature.
     - Prepare to revert the codebase to the state immediately before that feature was implemented.
   - If provided:
     - Treat $ARGUMENTS as the feature name to revert.
     - Look for `context/features/{name}.md` OR `context/fixes/{name}.md`.
     - Identify the commits and code changes associated with that feature.
     - Prepare to revert only the changes introduced by that feature.

2. Identify the feature implementation:
   - Confirm the feature exists in the implementation history.
   - Identify the Git commit(s) associated with the feature.
   - Determine the last known-good state before the feature was implemented.
   - Inspect the actual Git diff for the feature.
   - Do NOT assume the latest commit represents the latest feature.

3. Identify affected files:
   - Analyze the Git commit(s) and determine every file that was:
     - Created
     - Modified
     - Deleted
     - Renamed
   - Show the affected files before performing the revert.
   - For each file, briefly explain what the feature changed in that file.

4. Analyze feature dependencies:
   - Before reverting, inspect the codebase for features that depend on the feature being reverted.
   - Search for:
     - Imports
     - Function calls
     - Components
     - API routes
     - Database models
     - Database migrations
     - Types and interfaces
     - Configuration
     - Environment variables
     - Shared utilities
     - Hooks
     - Services
     - Middleware
     - Authentication or authorization logic
     - State management
     - Dependencies between feature specifications
   - Identify other features that rely directly or indirectly on the feature being reverted.
   - Do NOT assume a feature is independent simply because it was implemented in a different commit.

5. Analyze ramifications:
   - Explain what will happen if the feature is reverted.
   - Identify:
     - Functionality that will be removed
     - Functionality that may stop working
     - Features that depend on the reverted feature
     - API endpoints that may disappear or change
     - UI components that may break
     - Database schema or migration implications
     - Data that could become inaccessible
     - Configuration or environment variables that may become unused
     - Tests that may fail
     - Build or type errors that may occur
     - Potential runtime errors
   - Clearly distinguish between:
     - Direct consequences
     - Possible indirect consequences
     - Features confirmed to depend on the reverted feature

6. Check the working tree:
   - Check for uncommitted changes.
   - NEVER discard unrelated uncommitted changes.
   - Determine whether any uncommitted work overlaps with files involved in the revert.
   - If reverting would overwrite unrelated work, stop and explain the conflict.

7. Show a pre-revert impact report:
   - BEFORE modifying the codebase, display:

     **Feature to Revert**
     - Feature name
     - Feature specification
     - Associated commit(s)

     **Affected Files**
     - List every file that will be affected.
     - State whether each file will be modified, restored, deleted, or recreated.

     **Dependent Features**
     - List features that rely on this feature.
     - Explain how each dependency works.
     - Mark dependencies as direct or indirect.

     **Ramifications**
     - Explain what functionality will be lost.
     - Explain what functionality may break.
     - Explain database, API, UI, configuration, and infrastructure consequences where applicable.

     **Risk Level**
     - LOW: Feature appears isolated.
     - MEDIUM: Other code references the feature but can likely continue functioning.
     - HIGH: Other implemented features directly depend on this feature.

   - If the revert has HIGH risk or would break another implemented feature, STOP before modifying the codebase and request confirmation.
   - If the revert is LOW or MEDIUM risk, continue unless there are unresolved conflicts.

8. Perform the revert:
   - Prefer Git history to restore the code rather than manually rewriting files.
   - Preserve all features implemented before the target feature.
   - Preserve unrelated features implemented after the target feature whenever possible.
   - If reverting a specific feature:
     - Revert only the commit(s) associated with that feature.
     - Do NOT reset the entire repository unless explicitly instructed and it is safe.
   - If no argument was provided:
     - Revert the most recently successfully implemented feature.
   - Do NOT delete or modify unrelated files.

9. Handle dependencies:
   - After reverting, inspect dependent features again.
   - Do NOT automatically remove dependent features unless their removal is necessary for the codebase to remain functional.
   - If a dependent feature must also be changed:
     - Explain why.
     - Show the additional files that would be affected.
     - Make only the minimum changes necessary.
   - Never silently remove additional features.

10. Validate the reverted codebase:
    - Run the project's available validation commands where applicable:
      - Type checking
      - Linting
      - Tests
      - Build
    - Confirm that the reverted feature is no longer present.
    - Confirm that previously working functionality remains intact.
    - Specifically validate features identified as depending on the reverted feature.
    - If validation fails, determine whether the failure was caused by the revert before making additional changes.

11. Compare affected files:
    - After the revert, show the final list of files that were actually affected.
    - Categorize them as:
      - Modified
      - Restored
      - Deleted
      - Recreated
    - Highlight any files that were changed beyond those originally predicted in the impact analysis.

12. Update feature tracking:
    - Update `current-feature.md` to reflect the reverted state.
    - If reverting the current feature:
      - Set Status to "Reverted".
    - Add a note describing:
      - Feature reverted
      - Commit(s) reverted
      - Files affected
      - Dependent features discovered
      - Ramifications identified
      - Validation results

13. Show the final revert report:
    - Display:

      **Reverted Feature**
      - Feature name

      **Commits**
      - Commit(s) reverted

      **Files Affected**
      - Every file actually changed by the revert

      **Dependent Features**
      - Features that relied on the reverted functionality

      **Ramifications**
      - Functionality removed
      - Functionality affected
      - Remaining risks

      **Validation**
      - Type check result
      - Lint result
      - Test result
      - Build result

      **Repository Status**
      - Current branch
      - Working tree status
      - New revert commit, if one was created

## Safety Rules

- NEVER use `git reset --hard` when uncommitted changes exist.
- NEVER discard unrelated user changes.
- NEVER revert commits without first inspecting what they changed.
- NEVER assume the latest commit represents the latest feature.
- NEVER silently revert dependent features.
- NEVER modify additional features without explaining why.
- ALWAYS identify affected files before reverting.
- ALWAYS analyze feature dependencies before reverting.
- ALWAYS explain the ramifications of the revert before changing code.
- ALWAYS stop for confirmation when the revert is HIGH risk or is confirmed to break another implemented feature.
- Prefer `git revert` for committed feature changes because it preserves repository history.
- Use file restoration only when the feature changes have not been committed.
- If the requested feature cannot be safely isolated from other features, stop and explain why instead of performing a destructive rollback.