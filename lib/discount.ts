/**
 * The exit offer — 10% off the build, claimed on the way out.
 *
 * This is the page's second capture, aimed at somebody who has already decided
 * to leave.
 *
 * THE DISCOUNT IS THE MECHANISM; THE NUMBER IS THE HOOK. A percentage off,
 * offered on its own, is exactly the marketing move this audience distrusts —
 * it reads as a margin that was there all along. So the copy leads with the
 * missed-call count he came here to find out about and mentions the discount
 * second, as a reason to do it now rather than as the offer itself.
 *
 * WHAT THE 10% APPLIES TO. Builds are quoted individually from a floor and
 * paid in stages, so the discount comes off the QUOTED BUILD PRICE — the
 * figure agreed on the call — and DISCOUNT_TERMS says so in those words.
 * app/actions.ts quotes these terms verbatim into the claimant's email, so
 * anything ambiguous here is a promise we have already sent in writing.
 *
 * Copy lives here rather than in lib/content.ts because content.ts is the
 * page's argument — the narrative, the proof, the objections — and it is
 * placeholder-checked as such. The offer is a mechanism, not an argument.
 */

/** Shown to the claimer on screen and in their email. Honoured by hand. */
export const DISCOUNT_CODE = "QES10";

export const DISCOUNT_PERCENT = 10;

/**
 * The terms. Not optional and not decorative.
 *
 * "10% off" with nothing after it is an unqualified claim, and an unqualified
 * claim is the thing that gets a lead-gen page in trouble — with the ASA for
 * being unsubstantiated, and with the visitor who books expecting 10% off a
 * number we never named. One sentence, stating exactly what it applies to,
 * costs nothing and settles both.
 */
export const DISCOUNT_TERMS =
  "10% comes off the build price on one project, applied to the figure we quote you on the call. It does not stack with another offer.";

export const DISCOUNT_COPY = {
  eyebrow: "Before you go",
  heading: "Want the numbers without the call?",
  body: "Leave us four lines and we will send over your missed-call count, where you rank in each town you serve, and what a custom site covering all of them would cost. No call needed. If it turns out to be a small number, you will have saved yourself thirty minutes — and if you do go ahead, 10% comes off the build.",
  button: "Send me the numbers",
  sending: "Sending…",
  /** The dismiss. Named plainly — a coy "no thanks" that hides the cost is a dark pattern. */
  dismiss: "No thanks",
  closeLabel: "Close this offer",
  consent:
    "No list, no sequence. We reply once, by email, and only about this.",
} as const;

/**
 * The same fields as ENQUIRY_FIELDS, in the same shape and the same order, so
 * the modal can render them with the identical markup the main form uses —
 * identity, contact, then the field that takes thought.
 *
 * The `name` keys are the argument names of the Supabase RPC. Renaming one
 * here without renaming it in ENQUIRY_FIELDS and app/actions.ts breaks every
 * insert on this path.
 *
 * This asked for three and now asks for four. Phone was left out on the
 * reasoning that a visitor with one foot out the door will not fill one in.
 * That trade was reversed deliberately: a lead we can only email cannot be
 * called, and on a page whose argument is that whoever picks up first wins the
 * job, an uncallable lead is the wrong thing to optimise for.
 *
 * The last field asks for trucks and towns because the town list is what we
 * actually need to run the search this offer promises. Without it the reply is
 * generic, and a generic reply to somebody who asked for their own number is
 * worse than not answering at all.
 */
export const DISCOUNT_FIELDS = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    autoComplete: "name",
    placeholder: "Dale Whitaker",
    required: true,
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    placeholder: "you@yourcompany.com",
    required: true,
  },
  {
    name: "phone",
    label: "Cell",
    type: "tel",
    autoComplete: "tel",
    placeholder: "(555) 018-4420",
    required: true,
  },
  {
    name: "description",
    label: "How many trucks you run, and which towns you cover",
    type: "textarea",
    autoComplete: "off",
    placeholder:
      "A line is plenty — how many trucks, and the towns you will drive to.",
    required: true,
  },
] as const;

/**
 * Prefixed onto the stored description.
 *
 * Belt and braces for the discount_claimed column. That column is set by a
 * second, best-effort UPDATE after the insert RPC returns, so it can fail
 * independently of the row landing. This marker rides inside the row itself
 * and cannot come apart from it — whoever opens the lead in the CRM sees the
 * claim either way.
 */
export const DISCOUNT_MARKER = `[${DISCOUNT_PERCENT}% build discount claimed — code ${DISCOUNT_CODE}]`;
