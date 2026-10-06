/**
 * Shows sections that are still waiting on real content from AKC (Meet the team,
 * Testimonials) as clearly marked [Placeholder] previews. Off unless
 * SHOW_PLACEHOLDER_SECTIONS=true, so production never renders them.
 */
export const showPlaceholderSections =
  process.env.SHOW_PLACEHOLDER_SECTIONS === "true";
