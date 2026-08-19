/**
 * Where the CTAs actually send people.
 *
 * The page renders the enquiry form twice — once in the hero, once in the
 * final CTA — and every CTA between them points at the lower one, which is
 * ahead of the reader wherever they have got to.
 *
 * This used to branch: while the hero ran a live site check, a visitor looking
 * at their own findings and an email gate had to be sent to that gate rather
 * than scrolled past it to an empty field. That flow is gone and the branch
 * went with it, leaving the fallback that was always the ordinary case.
 */
export function scrollToNextStep(fallbackId: string): void {
  const target = document.getElementById(fallbackId);

  target?.scrollIntoView({ behavior: "smooth", block: "start" });

  // Move focus as well as the viewport. A smooth scroll that leaves the
  // keyboard where it was is a scroll that never happened for anybody
  // navigating by tab.
  const field = target?.querySelector<HTMLElement>("input:not([tabindex='-1'])");
  if (field) {
    field.focus({ preventScroll: true });
  }
}
