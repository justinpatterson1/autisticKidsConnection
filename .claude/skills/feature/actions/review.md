# Review Action

1. Read current-feature.md to understand the goals
2. Review all code changes made for this feature
3. Check for:
   - ✅ Goals met
   - ❌ Goals missing or incomplete
   - ⚠️ Code quality issues or bugs
   - 🚫 Scope creep (code beyond goals)
   - 🎨 Design-system conformance against `context/design-system.md`: no hardcoded colors outside the exceptions in §2.4, and values matching the type scale (§3), spacing (§4), radii and shadows (§5), icon sizes and stroke widths (§6), component anatomy (§7) and the motion table (§8)
4. If the change altered a shared value, confirm `context/design-system.md` was updated on the same branch. If it contradicts the component's PRD, flag it — the PRD wins and the design system gets corrected
5. Final verdict: Ready to complete or needs changes