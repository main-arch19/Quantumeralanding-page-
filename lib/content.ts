/**
 * EVERY piece of copy on the page lives here.
 *
 * Values still wrapped in [BRACKETS] are unfilled. A production build FAILS
 * while any required value still contains them — see unfilledPlaceholders() at
 * the bottom of this file. Google Ads policy prohibits unsubstantiated claims,
 * and a page with placeholder proof is both a disapproval risk and a worse page
 * than no page at all.
 *
 * WHO THIS PAGE IS WRITTEN FOR
 * The owner of a residential HVAC company in a tier 2 or tier 3 US city. One to
 * three locations, eight to thirty trucks, $2M–$10M. He came up in the trade and
 * still runs calls in peak season. He is the bottleneck — quoting, dispatching,
 * hiring and payroll all run through him. There is one bigger outfit in town,
 * forty-plus trucks, that outranks him on every search and takes jobs he should
 * be getting. He thinks in monthly payments because that is how he buys trucks.
 * He can smell a pitch, and a few agencies have already sold him something vague
 * and disappeared.
 *
 * THE LOSS THIS PAGE NAMES IS THE MISSED CALL. Roughly twenty-five a month go
 * unanswered — lunch, after hours, a second call arriving while the first is
 * live. The caller does not leave a voicemail. He taps the next result and books
 * with whoever picks up. There is no missed-call badge on a job you never knew
 * existed, which is exactly why it has never been counted.
 *
 * THE NUMBERS ARE THE READER'S, NOT OURS. This page never asserts a measured
 * figure about the person reading it. It hands him the arithmetic and tells him
 * where to verify each input himself — his phone system logs every unanswered
 * call, and he knows his own quote count. That is both more persuasive than a
 * claim and the only version of this argument that survives Ads review. Do not
 * convert any of it into a flat assertion about his business.
 *
 * NEVER LEAD WITH THE WEBSITE. The product is a lead-to-booked-job system in
 * three parts: a page for every town crossed with every service, an automation
 * layer that answers and follows up, and a dashboard with four numbers on it.
 * The site is one third of one part. A headline that makes it the product sells
 * the cheapest component of the offer and invites comparison against every
 * web shop in his market.
 *
 * NEVER NAME THE UNDERLYING TOOLS. Outcomes only. The stack is an
 * implementation detail he does not care about, and naming it converts a system
 * he is buying into software he could go price himself.
 *
 * PRICE IS A FLOOR, PAID IN STAGES. Builds start from PRICE_FLOOR and are
 * quoted individually, because scope really does move with the number of towns
 * and services. He thinks in payments rather than lump sums — that is how he
 * buys trucks — so the floor is never stated without the stages beside it.
 *
 * "Pay in stages" means our own invoice, split. Never "financing available":
 * that implies a credit product and carries stated-terms obligations. See the
 * note on PAYMENT_TERMS.
 */

// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS CONSTANTS — confirmed
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Quantum Era Solutions",
  location: "Kingston, Jamaica",
  email: "main@quantumerasolutions.com",
  year: 2026,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// UNFILLED — required before this page sees a single paid click
// ─────────────────────────────────────────────────────────────────────────────

/** True when a value has been filled in — i.e. no [BRACKETS] left. */
export function isFilled(value: string): boolean {
  return value.length > 0 && !/\[.+\]/.test(value);
}

/**
 * Must match the Google Ads display URL domain exactly, before ads run.
 *
 * Falls back to VERCEL_URL so a deployment always has a usable hostname for
 * metadata without anyone editing this file. Set NEXT_PUBLIC_PRIMARY_DOMAIN,
 * or hardcode the real domain here, once the custom domain is attached.
 */
export const PRIMARY_DOMAIN =
  process.env.NEXT_PUBLIC_PRIMARY_DOMAIN ??
  process.env.VERCEL_URL ??
  "[PRIMARY-DOMAIN]";

/**
 * Shown in the footer as PLAIN TEXT, never a mailto: link.
 *
 * DELIBERATELY NOT derived from PRIMARY_DOMAIN. It used to be
 * `main@${PRIMARY_DOMAIN}`, which meant any staging host published a contact
 * address that does not exist — "main@qes-websites-that-answer.vercel.app" —
 * on the one part of the page whose job is to look legitimate. The real
 * mailbox does not change when the deployment host does.
 *
 * There is no phone number anywhere on this page. It was removed because it
 * could not be answered reliably during working hours, and a number that rings
 * out is worse than no number at all on a page whose entire argument is that a
 * call nobody picks up is a job somebody else books.
 */
export const CONTACT_EMAIL = "main@quantumerasolutions.com";

/**
 * The floor, and the first figure a price-conscious buyer sees.
 *
 * THIS IS A FLOOR, NOT A FIXED PRICE. It was briefly a deposit against a fixed
 * twelve-month agreement, and it is now back to a starting figure because
 * scope genuinely moves: a contractor serving four towns with three services
 * is a materially smaller build than one serving nine towns with six, and
 * quoting them the same number is either leaving money on the table or losing
 * the smaller job.
 *
 * A floor quoted ALONE gets read as the price, and every quote above it then
 * feels like an upsell. So the objection that names this figure says in the
 * same breath what moves it — towns and services — and promises a real number
 * on the call.
 *
 * Interpolated into the hero and the price objection from here, so the two can
 * never disagree.
 */
export const PRICE_FLOOR = "$3,000";

/**
 * How long the FULL build takes — every town page live, every automation
 * running. The first towns go live much sooner and that number is stated
 * separately wherever this appears.
 */
export const BUILD_TIMEFRAME = "Six weeks";

/**
 * How long until his first town pages are live and taking calls. The fast
 * number, and the one the guarantee is written against.
 */
export const FIRST_TOWNS_TIMEFRAME = "two weeks";

/** Markets actually served, e.g. "Jamaica, the wider Caribbean and the US". */
export const MARKETS = "[MARKETS]";

/**
 * How the build is split into stages, e.g. "A third to start, a third when the
 * first towns go live, the balance on completion."
 *
 * THE HERO NOW PROMISES STAGES, so this is no longer optional decoration — it
 * is the answer that says what the promise actually means. While it is
 * unfilled the objection is hidden and the hero still says "pay in stages",
 * which is the one place this page currently makes a claim it does not
 * immediately substantiate. Fill it before ads run.
 *
 * Our own instalments, never a third-party lender. That keeps this out of
 * consumer-credit advertising rules entirely, which is the whole reason the
 * page says "pay in stages" rather than "financing available" — the second
 * phrase implies a credit product and carries stated-terms obligations.
 *
 * Placeholder until the real split exists, so the guard below hides the
 * objection rather than publishing half a promise.
 *
 * WHEN YOU FILL THIS, it must name a DEPOSIT. The two-week guarantee in TERMS
 * (lib/legal.ts, "The two-week first towns") starts its clock when the deposit
 * clears, and that is currently the only place on the page a deposit's timing
 * is pinned down. A split that opens with anything else leaves the guarantee
 * triggered by a payment the reader was never told about.
 */
export const PAYMENT_TERMS = "[PAYMENT-TERMS]";

/** The Calendly event link for the call. Embedded on /booked only. */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "[CALENDLY-URL]";

export type PrimaryProof = {
  /** Client company name. Appears in the section heading. */
  client: string;
  /**
   * ONE paragraph, and it must be an UPGRADE story — this page is read by
   * someone who already has a website, and a "they had nothing, then they had
   * a site" story argues nothing to them. They already cleared that bar.
   *
   * What their old site did and how long they had it. How enquiries arrived
   * and what happened to them — how long a reply actually took, and how many
   * went cold. What we changed. The specific number after, over a stated time
   * window. If you do not have that number, do not launch this page.
   */
  story: string;
  quote: {
    /** One sentence from the client, with a number in it. */
    text: string;
    name: string;
    role: string;
    company: string;
  };
};

export const PRIMARY_PROOF: PrimaryProof = {
  client: "[CLIENT NAME]",
  story:
    "[ONE PARAGRAPH. What their old site was and how long they had it. How enquiries reached them, how long a reply actually took, and how many went cold. What we changed. The specific number after, over a stated time window.]",
  quote: {
    text: "[ONE SENTENCE FROM THE CLIENT, WITH A NUMBER IN IT.]",
    name: "[NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
};

/** Rendered as the proof section's H2. Kept here so page.tsx holds no copy. */
export const PROOF_HEADING = `${PRIMARY_PROOF.client} already had a website. Here is what changed when it started answering.`;

/**
 * Whether the proof section renders at all.
 *
 * A page with no proof section is weaker. A page that prints "[CLIENT NAME]"
 * is broken, and a page that prints an invented number is a Google Ads policy
 * violation. Omission is the only honest option while the real story does not
 * exist, and it is strictly better than blocking every deploy until it does.
 *
 * Fill PRIMARY_PROOF and the section reappears on its own — nothing else to change.
 */
export const PROOF_READY =
  isFilled(PRIMARY_PROOF.client) &&
  isFilled(PRIMARY_PROOF.story) &&
  isFilled(PRIMARY_PROOF.quote.text) &&
  isFilled(PRIMARY_PROOF.quote.name) &&
  isFilled(PRIMARY_PROOF.quote.role) &&
  isFilled(PRIMARY_PROOF.quote.company);

/**
 * The proof section's eyebrow, which depends on what the section actually
 * contains.
 *
 * Until PRIMARY_PROOF is filled the section is the client roster and nothing
 * else, and "Proof" overpromises against that — it announces evidence and
 * delivers a list of names. Once a real story with a real number sits above
 * the logos, "Proof" is accurate and the roster becomes its supporting cast.
 *
 * Switching on PROOF_READY rather than hardcoding either one means filling
 * PRIMARY_PROOF relabels the section on its own, with nothing else to
 * remember at the point where somebody is busy writing the story.
 *
 * Must stay below PROOF_READY — it reads it at module scope.
 */
export const PROOF_EYEBROW = PROOF_READY
  ? "Proof"
  : "Brands we have worked with";

export type SecondaryProof = {
  client: string;
  /** One line. Must contain a real number and a stated time window. */
  result: string;
};

/**
 * Zero to two entries. Rendered as compact one-line results beneath the primary
 * proof — no paragraphs, no quotes. Three co-equal testimonials read as
 * decoration; one story with a real number reads as evidence. Leave empty and
 * the section renders the primary proof alone without a layout break.
 */
export const SECONDARY_PROOFS: SecondaryProof[] = [];

/**
 * The client roster — every client on the portfolio, all ten.
 *
 * Names only here. The artwork lives in components/ClientLogos as static
 * imports, because next/image needs the real file to emit width and height,
 * and a roster that shifts the page as it loads is worse than no roster.
 * Never links, and never a logo that links: a logo is the single most
 * reflexively clicked thing on a paid page, and every click on one is a lead
 * leaving.
 *
 * Nine ship as artwork. One does not:
 *
 *   Yaadflexx      an illustrated badge — Statue of Liberty, palm trees and
 *                  "WHOLESALE DISTRIBUTOR" in small type under the wordmark —
 *                  with no file in public/clients. Set in type until one
 *                  exists.
 *
 * Power Concepts and Pherson's were also type until their real art was found.
 * The reasoning that put them there assumed the roster was still flattened to
 * a single ink, and described art neither of them actually has: Power Concepts
 * is a bulb on a painted glow, not a photo on black, and Pherson's is a blue
 * and green skyline on white, not a painted-in card. In full colour both hold
 * up at roster size. That note is preserved here because the conclusion it
 * reached outlived the premise it rested on — check the file before trusting a
 * claim about what a mark looks like.
 *
 * Setting the remaining one in the display face rather than dropping it keeps
 * every client named. An image that failed to load would look like a bug; a
 * name set deliberately looks like a decision.
 *
 * `opticalScale` is the fudge that makes a logo row read level. Sizing every
 * mark to the same pixel height does not do it — a one-line wordmark reads far
 * larger than a three-line lockup of identical height. Eyeballed against the
 * rendered row, not calculated.
 *
 * Order is deliberate: the strongest marks lead, and the wordmark sits inside
 * the row rather than at the end, where it would read as a leftover.
 */
export type ClientMark =
  | { name: string; kind: "logo"; opticalScale: number }
  | { name: string; kind: "wordmark" };

export const TRUST_LINE: readonly ClientMark[] = [
  { name: "Parafount", kind: "logo", opticalScale: 0.78 },
  { name: "Shark Box", kind: "logo", opticalScale: 0.92 },
  { name: "Yaadflexx", kind: "wordmark" },
  { name: "Vivid Walls", kind: "logo", opticalScale: 1.14 },
  // A compact icon with no wordmark beside it. At a height matched to the
  // lockups it reads as a stray leaf, so it gets sized to match their
  // presence rather than their height.
  { name: "Sannovia Skincare", kind: "logo", opticalScale: 1.55 },
  // A bulb inside a painted glow, with the name set vertically beside it. The
  // glow is most of the file's width and carries no ink, so matching it on
  // height alone leaves the bulb itself small.
  { name: "Power Concepts", kind: "logo", opticalScale: 1.5 },
  { name: "Jamaica Centre for Advanced Medicine", kind: "logo", opticalScale: 1.14 },
  // Fine hairlines and a very small wordmark under the monogram. Sized up so
  // the script reads as a script rather than as a grey smear.
  { name: "Nykefah Nairne", kind: "logo", opticalScale: 1.2 },
  // A tall skyline lockup over two lines of wordmark. Matched on height it
  // reads smaller than the flat marks beside it, because most of its height
  // is illustration rather than type.
  { name: "Pherson's Kellan Estates", kind: "logo", opticalScale: 1.55 },
  { name: "Shop Extreme JA on Wheels", kind: "logo", opticalScale: 1.2 },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// COPY — verbatim. Do not shorten. Do not add adjectives.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * THREE HEADLINES, ONE SHIPPED.
 *
 * The two alternates are kept in the file rather than in somebody's notes,
 * because a variant that lives outside the codebase is a variant nobody ever
 * tests. Swap `h1`/`subhead` to run one; change nothing else.
 *
 *   A — LOSS   (shipped) names the money before it names us. This is the
 *              angle the audience research points at: what makes him buy is a
 *              specific number showing money he is losing right now.
 *   B — SPEED  sells the race rather than the loss. Softer, because it asks
 *              him to accept a mechanism before he has accepted a cost.
 *   C — PROOF  uses the bigger outfit across town as the wedge. Highest
 *              variance — it lands hardest on the ones it lands on, and reads
 *              as an insult to anyone who does not feel outranked.
 *
 * B: "The first contractor to call back gets the job. It is usually not you."
 *    sub: "Not because you are slower. Because you were on a roof and he has
 *    a system."
 *
 * C: "The 40-truck outfit across town is not better than you. They just
 *    answer faster."
 *    sub: "Every town you both serve, they show up first and pick up first.
 *    Both of those are fixable."
 *
 * `priceLine` is the qualification filter and it is deliberately the third
 * thing on the page. Two facts, one line: what it costs to start and how long
 * it takes. Somebody whose budget is nowhere near this leaves before filling
 * in the form, which is the outcome we want — we pay for every one of these
 * clicks either way, and a lead that was never going to buy costs a call to
 * find out.
 *
 * NAMES THE FLOOR AND THE STAGES TOGETHER. This buyer thinks in monthly
 * payments because that is how he buys trucks, so a lump sum quoted alone
 * prices him out of a decision he would otherwise make. "Pay in stages" is
 * deliberate and is not a euphemism for financing — it is our own invoice
 * split, with no lender involved. The phrase "financing available" implies a
 * credit product and carries stated-terms obligations we have no reason to
 * take on. Do not reintroduce it.
 *
 * Interpolated from PRICE_FLOOR so the hero cannot drift from the objection
 * answering the same question further down. Hidden entirely while unfilled —
 * see HERO_PRICE_READY.
 */
export const HERO = {
  h1: "Your phone rang 25 times last month and nobody picked up.",
  subhead:
    "Roughly a quarter of those would have booked. Go pull your call log — the number is sitting in it.",
  priceLine: `Builds start from ${PRICE_FLOOR}, and you can pay in stages. ${BUILD_TIMEFRAME} to build.`,
} as const;

/** The hero price line renders only once there is a real figure in it. */
export const HERO_PRICE_READY =
  isFilled(PRICE_FLOOR) && isFilled(BUILD_TIMEFRAME);

/**
 * THE ENQUIRY FORM. One stage, four fields.
 *
 * This replaced a two-stage flow that ran a live audit on the visitor's URL
 * and gated the findings behind an email. That audit no longer exists and its
 * code has been removed from the tree.
 *
 * It has been five fields, then three, and is now four. The history is worth
 * keeping because the same argument will come back around.
 *
 * PHONE IS REQUIRED, and on this page it is the whole point. It was cut once on
 * the reasoning that three fields is where completion peaks and that a phone
 * input costs more completions than any other. That trade was reversed
 * deliberately: it optimises for form submissions, and what this business needs
 * is leads it can act on. A page whose entire argument is that whoever picks up
 * first wins the job cannot then collect leads it can only email.
 *
 * The last field asks for TRUCKS AND TOWNS rather than "what you want built",
 * because those two numbers are what the call runs on. Truck count sizes the
 * business against the offer, and the town list is what gets searched live on
 * the call to show him who is currently collecting his customers. Asking for
 * them here means the diagnostic starts before the call does.
 *
 * Business name stays out. It is genuinely recoverable on the call, and it was
 * also the argument to the RPC that had been failing every insert.
 *
 * Every field here is required. The (optional) marker in EnquiryForm renders
 * for none of them and stays only so adding an optional field later needs no
 * component change.
 */
export const ENQUIRY_COPY = {
  heading: "Tell us what you are working with",
  subheading:
    "Four questions, one minute. A person reads it and calls you back — not a robot.",
  button: "Get my missed-call number",
  sending: "Sending…",
  consent: "One reply, about this only. No list. No drip.",
} as const;

/**
 * Field order is deliberate: identity first, contact second, and the field
 * that takes actual thought last, once they are already committed.
 *
 * Identical in shape and order to DISCOUNT_FIELDS in lib/discount.ts, which is
 * what the exit offer renders. The two forms ask for the same four things, and
 * the `name` keys are the argument names of the Supabase RPC — changing one
 * without the other breaks every insert.
 */
export const ENQUIRY_FIELDS = [
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
 * Eyebrows are TIMESTAMPS, not numbers. They narrate one hot Tuesday in
 * sequence and that sequence is the argument of the page. Never replace with
 * 01 / 02 / 03.
 *
 * The fourth eyebrow breaks the clock on purpose — it is the same day
 * multiplied out to a year, and it is the section that turns a lost call into
 * a number bigger than the price.
 *
 * NOTHING HERE ASSERTS A FIGURE ABOUT THE READER. Every number is either an
 * industry-typical figure he is told to go check against his own logs, or
 * arithmetic he performs himself with his own inputs. That is deliberate and
 * it is not timidity: a number he calculated is one he believes, and a number
 * we claimed about a business we have never seen is one Ads can disapprove.
 */
export const NARRATIVE_SECTIONS = [
  {
    id: "missed-call",
    eyebrow: "11:20 AM",
    heading: "The second call always comes while you are on the first one.",
    body: [
      "It is 96 degrees. Your best tech is in an attic in Fairview and you are on the phone with a woman whose condenser died overnight.",
      "Another call comes in. It rings four times and goes to voicemail.",
      "He does not leave one. Nobody leaves voicemails anymore. He hangs up and taps the next result.",
      "You never knew he called. There is no missed-call badge on a job you did not know existed.",
    ],
  },
  {
    id: "competitor",
    eyebrow: "11:21 AM",
    heading: "Somebody answered him. It took nine seconds.",
    body: [
      "The next number he tapped picked up on the second ring. Not the owner — a system, or somebody paid to sit by a phone. It does not matter which. It answered.",
      "By 11:40 he had a two-hour window and a tech's name.",
      "Here is the part worth sitting with. You were probably the better company. Better techs, fairer price, twenty years in this town. None of that was ever on the table. The only thing measured was who picked up.",
      "That happens about twenty-five times a month at your size. Lunch. After five. A second call while the first is live. Your phone system logs every one of them — go look before you believe me.",
    ],
  },
  {
    id: "invisible",
    eyebrow: "6:40 PM",
    heading: "You will never count this as a loss.",
    body: [
      "You closed out four jobs today. Good day. Trucks moved, invoices went out.",
      "Nothing on your desk says you lost anything. A missed call does not generate paperwork. It does not show up in your P&L as a line item called jobs that went to the other guy.",
      "So the only conclusion available to you is that things are fine, or the market is soft, or people are cheap this year.",
      "The same thing happens to your estimates. Fifteen go out a month. The ones that do not close that day just sit there. Nobody calls. Not because you do not care — because you are quoting the next one.",
      "And there is a third one you cannot see at all. Somebody two towns over searched for exactly what you sell this afternoon and never found you, because you serve six towns and you have one page. The forty-truck outfit has a page for every one of them. That is not a better company. That is more pages.",
      "You have a record of the work you did. You have no record of the work that walked.",
    ],
  },
  {
    // The value anchor. Everything before this is one lost call; this is the
    // lost call multiplied, and it is what makes the price a small number.
    // The reader supplies every figure — that is more persuasive than we are,
    // and it is the only version of this that is defensible.
    id: "arithmetic",
    eyebrow: "× 12 months",
    heading: "Do the arithmetic yourself. Do not take my number for it.",
    body: [
      "Take your average ticket. Not the biggest install, not a capacitor swap. The middle one. Hold it.",
      "Now pull your call log for last month and count what went unanswered. Then be honest about how many of those were real work. A quarter is the number most shops land on.",
      "Multiply. That is one month.",
      "Then do the estimates. Fifteen a month, five grand a job, and about one in ten of the dead ones comes back if somebody actually follows up. Add it.",
      "You do not need the number to be exact. You only need to know whether it is bigger than what this costs a month. It is not close. And it happens again next year, and the year after, until something picks up the phone.",
    ],
  },
] as const;

export const MECHANISM = {
  heading: "We build the thing that picks up.",
  body: [
    "Start with what is actually broken, because it is not your website. Your phone rings and it lands on a person — you, your office manager, whoever is closest. When that person is busy, the call is gone. That is the whole failure, and a nicer homepage does not touch it.",
    "So something else answers. A call you could not take gets a text back inside a minute, before he has redialled anybody. Every new lead, from wherever it came, gets a real response in under sixty seconds. Not an acknowledgement. A question about what the unit is doing and when somebody can come look.",
    "Then the towns. You serve six and you have one page, so you show up in the town your shop sits in and you are invisible in the other five. That is why the forty-truck outfit outranks you everywhere. Every town you serve gets its own page, crossed with every service you sell. When somebody in Fairview searches for AC repair in Fairview, there is something of yours to find.",
    "Then the follow-up nobody has time for. Estimates that did not close get chased on a schedule. Maintenance plans get renewal notices before they lapse. The customer list already sitting in your system — the thousands of names that have never been emailed once — gets a tune-up reminder in September and again in March. Finished jobs get asked for a review while the customer is still happy.",
    "None of that requires you to remember it. That is the point of it.",
    "Then the dashboard, which is one screen. How many leads came in. How fast each one got answered. How many booked. What it cost. Four numbers. If they are bad you will see it in October, not next June.",
    "You already know the alternative, because it is what you have. You are the system. Quoting, dispatching, answering, hiring, all of it running through one man who is also supposed to be running the company. That works until it is 96 degrees.",
    "We build for the ninety seconds after somebody's system dies. That is the whole business.",
  ],
} as const;

/**
 * What the client actually receives, in eight lines.
 *
 * This is a DELIBERATE SUBSET of what the stack can do. The full platform
 * inventory runs to roughly ninety features across twelve categories, and
 * publishing it would do three bad things: identify the platform we never
 * name, convert ninety capabilities into ninety promises a client can hold us
 * to mid-build, and bury the four lines that actually sell.
 *
 * The test for inclusion is narrow: does this line serve the missed-call
 * argument, or one of the three losses named beside it — dead estimates, the
 * five towns he is invisible in, the customer list nobody has ever emailed?
 * The first three items ARE the argument, restated as deliverables. The rest
 * earn their place by being things he already wishes were handled.
 *
 * The last item is the dashboard, and it is last on purpose. It is what
 * answers "I have paid for marketing before and nothing happened", so it wants
 * to be the line he is still holding when he reaches the objections.
 *
 * Written as OUTCOMES, never as product names. "One screen with four numbers"
 * survives a platform migration; a product name is somebody else's brand and
 * naming it here would identify the stack to anyone who has seen its deck.
 */
export const INCLUDED = {
  eyebrow: "Included in every build",
  heading: "What runs while you are on a call.",
  intro: "Not a feature list. This is the part that works when you cannot.",
  items: [
    {
      label: "A missed call texts back",
      body: "Inside a minute, before he has dialled the next result. This one alone pays for most of what this costs.",
    },
    {
      label: "Every lead answered in under sixty seconds",
      body: "Phone, form, wherever it came from. A real question about the unit and the timeline, not a thank-you note.",
    },
    {
      label: "A page for every town you serve",
      body: "Crossed with every service you sell. Six towns and four services is twenty-four ways to be found instead of one.",
    },
    {
      label: "Estimates get chased",
      body: "The ones that do not close same-day get followed up on a schedule. You already did the quoting. This is the part nobody has time for.",
    },
    {
      label: "Maintenance plans get renewed",
      body: "Reminders before they lapse, not after. Plan count is the number that carries you through February.",
    },
    {
      label: "Your old customers hear from you",
      body: "Tune-up campaigns in September and March, to the list already sitting in your system. The cheapest work you will ever book.",
    },
    {
      label: "Reviews get asked for",
      body: "Automatically, the day the job closes, which is the only day it works.",
    },
    {
      label: "One screen with four numbers",
      body: "Leads in, how fast each was answered, how many booked, what it cost. Open it on your phone at a light.",
    },
  ],
} as const;

/**
 * THE CALL IS THE DIAGNOSTIC, NOT A DEMO.
 *
 * This buyer has been pitched before and a few agencies have already sold him
 * something vague. "Book a call" is what those agencies said. What makes this
 * answerable is that every step produces a number he did not have before, from
 * his own data, on his own screen — and he keeps all of it whether or not he
 * hires us. That is the difference between a diagnostic and a sales meeting,
 * and it has to be visible in the steps themselves rather than asserted.
 *
 * Step 03 is the one that closes. Searching his own towns live, in front of
 * him, shows him the forty-truck outfit collecting customers he thought he was
 * competing for. Nothing we could say does that job.
 *
 * `icon` names map to lucide-react in app/page.tsx. Monochrome Quantum Navy,
 * never Electric — that stays reserved for the CTA.
 */
export const OFFER = {
  heading: "Thirty minutes. We pull your numbers, not our slides.",
  intro: "Screen shared. Here is exactly what happens.",
  steps: [
    {
      icon: "lightbulb",
      label: "Your call log",
      body: "We start with your actual phone records. How many calls came in last month, how many went unanswered, and when they happened. You will have a real count in the first ten minutes.",
    },
    {
      icon: "target",
      label: "Your estimates",
      body: "How many went out, how many closed, and what happened to the rest. Most shops have never counted the third number, and it is usually the biggest one.",
    },
    {
      icon: "search",
      label: "Where you rank in every town",
      body: "Then we search what your customers search — service and town, the way somebody types it when they do not have your name yet — for every town you drive to. You see who is collecting those people right now.",
    },
    {
      icon: "map",
      label: "What it costs to fix",
      body: "Then we price it. What it takes, what it costs, and the date it goes live. Real numbers, not a range.",
    },
  ],
  closer:
    "You keep the recording and the numbers whether you hire us or not. There is no pitch on this call. If your problem turns out to be something else, we will tell you that, and it will be a short call.",
  /**
   * Risk reversal, and the only promise on this page with a consequence
   * attached. Written against FIRST_TOWNS_TIMEFRAME so it cannot drift from
   * the FAQ answer and step 04, which promise the same fortnight.
   *
   * THE CONSEQUENCE IS THE DEPOSIT, NOT THE BUILD. An earlier version promised
   * a free build if a draft slipped. That put the entire project behind a
   * two-week slip a client could cause himself by taking ten days to send his
   * town list. The deposit is a real consequence — it is the money he has
   * actually parted with at that point — and it is one we can honour without
   * argument.
   *
   * The terms that make this enforceable — when the clock starts, what counts
   * as live, what is refunded, and when the clock pauses — are in TERMS in
   * lib/legal.ts under "The two-week first towns". Do not ship this line
   * without that section: an unqualified refund promise is the one claim here
   * that could not be defended.
   */
  guarantee: `Your first towns live within ${FIRST_TOWNS_TIMEFRAME}, or you do not pay the deposit.`,
} as const;

/**
 * Ordered by how loudly each objection blocks the sale.
 *
 * THE BURNED-BEFORE OBJECTION LEADS, ahead of price. This buyer has been sold
 * something vague by an agency that then disappeared, and until that is dealt
 * with he is not reading the price answer, he is waiting to catch us. Answering
 * it first, and answering it with the dashboard rather than with reassurance,
 * is the single highest-leverage line on this page.
 *
 * Price is second, because it is the next thing he wants. Then the beliefs that
 * keep him where he is — the office manager handles it, an answering service
 * would do, we are busy anyway — then the rest.
 */
/**
 * Raw list. Entries carrying a `requires` value drop out of OBJECTIONS below
 * while that value is unfilled, rather than answering a buyer's question with
 * "[FIGURE]". An objection you cannot answer honestly yet is better left
 * unasked than answered with a placeholder.
 */
const ALL_OBJECTIONS: readonly {
  q: string;
  a: string;
  requires?: string;
}[] = [
  {
    // FIRST, DELIBERATELY. See the note above — this is the objection that is
    // actually in the room, and the only answer that moves it is one he can
    // verify himself in ninety days. Reassurance would confirm his suspicion.
    q: "I have paid for marketing before and nothing happened.",
    a: "Probably true, and it is the reason most of these calls go nowhere. Here is the difference you can check rather than take on faith: you get a screen with four numbers on it — leads in, how fast each one was answered, how many booked, what it cost. If those numbers are not moving in ninety days, you will know in ninety days, not whenever you finally get around to asking for a report. Most agencies avoid that screen on purpose. Ask the last one why you never had it.",
  },
  {
    // Anchors on value rather than apologising for the number.
    //
    // The floor never appears alone. Quoted by itself it gets read as THE
    // price, and every quote above it then feels like an upsell — so the same
    // sentence names what moves it (towns and services) and promises a real
    // figure on the call. That is also the honest description of the product:
    // four towns and three services is a materially smaller build than nine
    // and six.
    q: "What does it cost?",
    requires: PRICE_FLOOR,
    a: `Builds start from ${PRICE_FLOOR}. What yours lands at depends on how many towns you want pages for and how many services you sell — that is genuinely the whole of it, and it is why nobody can quote you honestly without asking. You get a real number and a real date on the call, not a range. If your job is smaller than that floor, we will tell you so.`,
  },
  {
    // Sits directly under the price because a payment worry is the very next
    // thought after a number, and making somebody hunt for the answer in a
    // different part of the page is how a solvable objection becomes an exit.
    //
    // OUR OWN INSTALMENTS, NEVER A LENDER. "Pay in stages" rather than
    // "financing available" is deliberate and has now been decided twice: the
    // second phrase implies a credit product, carries stated-terms obligations
    // (APR, term, representative example) we have no reason to take on, and is
    // among the phrases Google Ads looks hardest at on a lead-gen page. If a
    // real third-party lender is ever added, this answer has to be rewritten
    // to those disclosure rules rather than edited around.
    //
    // Still gated on PAYMENT_TERMS: the hero now promises stages, so this
    // answer is the one that says what the split actually is. Publishing the
    // promise without the terms is the half-promise the guard exists to stop.
    q: "Can I pay in stages?",
    requires: PAYMENT_TERMS,
    a: `${PAYMENT_TERMS} No interest, no third party and no credit check — it is our invoice, split.`,
  },
  {
    q: "My office manager handles the website.",
    a: "Then she has a job already, and this is not it. Nobody on a five-person office staff has time to write a page for every town you serve, or to remember which estimates went cold in March. That is not a knock on her. It is a knock on expecting a person to do a system's job while the phones are ringing.",
  },
  {
    // The nearest substitute he can actually buy, so it gets the most specific
    // answer. Concede the part that is true — refusing to would cost more
    // credibility than the objection itself — then name the four things it
    // does not do.
    q: "Could I not just get an answering service?",
    a: "For the calls, partly, and if that is all you want then get one and keep your money. What an answering service does not do is chase your dead estimates, renew your maintenance plans, email the customer list already sitting in your system, or put you on the map in the five towns you are invisible in. It also costs you every month forever without ever building you anything you own.",
  },
  {
    // The seasonal objection, and the one most likely to produce a "call me in
    // September" that never happens. The answer has to make summer the
    // deadline rather than the reason to wait.
    q: "We are already busy. I do not need more leads in July.",
    a: "Nobody does. July is not the problem — October through March is, when the trucks sit and you start doing arithmetic on who you can keep on. The maintenance plans and the tune-up campaigns are what fill that window, and they get built in summer or they do not exist in winter. Starting this in October is starting it a season late.",
  },
  {
    // Every prospect is thinking this and almost nobody in the category
    // answers it. Concede the case where it is true, then move to the part the
    // tools genuinely do not do.
    q: "Could I not just use AI to build this?",
    a: "You can build pages with it, and they will be decent. What the tools do not do on their own is pick up a call you missed at 11:20 while you were on a roof, work out which of your estimates went quiet, and keep doing it every day for a year without anybody remembering to. That is not a page. It is a set of questions written for what you sell and how you price it, wired into your phone and your calendar.",
  },
  {
    q: "How long does it take?",
    requires: BUILD_TIMEFRAME,
    // The fast number leads because it is the one that changes a decision.
    // The full build follows in the same breath so nobody discovers it later
    // and feels sold to.
    a: `Your first towns are live inside ${FIRST_TOWNS_TIMEFRAME}. The full build is ${BUILD_TIMEFRAME.toLowerCase()}. You get a real date on the call, not a range.`,
  },
  {
    // Named, deliberately. At this scale the founder's name is the strongest
    // trust device available and it costs nothing — an anonymous "we" on a
    // page asking for a four-figure commitment invites the reader to wonder
    // how many people are actually behind it.
    q: "Who actually does the work?",
    a: `Othniel Grant. I run ${COMPANY.name} and I do the builds. There is no account manager relaying messages to a subcontractor you never meet — you will be talking to the person doing the work, which is also why we cannot take many of these on at once.`,
  },
  {
    q: "Where are you based?",
    // Selling into the US from Kingston invites the "offshore, therefore
    // cheap" assumption. Meet it head on rather than leaving the reader to
    // draw it themselves.
    requires: MARKETS,
    a: `Kingston, Jamaica. We work with clients in ${MARKETS}. Worth saying plainly: we are not an offshore shop competing on price. Our rates are what they are because of the work. Most of our clients have never been to our office and do not need to be — everything runs over video and shared documents, and you will always know exactly who is building your system.`,
  },
];

/** Only the objections we can currently answer without a placeholder. */
export const OBJECTIONS = ALL_OBJECTIONS.filter(
  (item) => item.requires === undefined || isFilled(item.requires)
);

/**
 * The trust badge, rendered under the client roster and beside the final CTA.
 *
 * Deliberately NOT a generic "100% satisfaction guaranteed" seal. A
 * self-issued badge asserting something unverifiable is discounted instantly
 * by the kind of buyer this page is written for, and it would be the only
 * unfalsifiable claim on a page that has been careful not to make any.
 *
 * This states a promise the page ALREADY makes in the offer closer, which
 * costs the reader nothing to test and is true the moment he books: he keeps
 * his own numbers whether or not he hires us.
 */
export const TRUST_BADGE = {
  headline: "You keep the numbers either way",
  sub: "No pitch · no obligation",
} as const;

export const FINAL_CTA = {
  heading: "Find out what your phone cost you last month.",
  subhead:
    "Thirty minutes, screen shared. You leave with your real missed-call count, where you rank in every town you serve, and a price. Yours to keep whether you hire us or not.",
} as const;

/**
 * The signature element. One orchestrated moment, nothing else animated.
 *
 * Same call, twice. The first card is the one that rang out and went to a
 * competitor; the second is the same minute with something answering.
 *
 * The unanswered card deliberately carries no name — that is the whole point
 * of it. He cannot lose a customer he was never told about, which is why this
 * loss has never appeared in any number he looks at.
 */
export const NOTIFICATION_CARDS = {
  unanswered: {
    source: "Missed call",
    stamp: "11:20 AM",
    title: "No answer — Fairview, (555) 018-0142",
    body: "Rang four times. No voicemail left. No callback made. Nothing logged anywhere you look.",
    status: "He called the next result",
  },
  answered: {
    source: "Your system",
    stamp: "11:20 AM",
    title: "Texted back in 40 seconds — Fairview",
    body: "Asked what the unit is doing and when somebody can be there. Both answered. Condenser, today if possible.",
    status: "Booked for 3:00 PM",
  },
  caption: "Same call. Same minute. That is the whole difference.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// BUILD GUARD
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Every value that must not still contain [BRACKETS] when ads run.
 *
 * THIS LIST IS HAND-MAINTAINED, which is its one weakness: a new placeholder
 * added anywhere above is invisible to `npm run check:launch` until somebody
 * remembers to register it here. PAYMENT_TERMS was added and briefly not
 * registered, and the launch check happily reported "10 placeholders" while
 * an eleventh sat unfilled. If you add a [BRACKET] value, add it here in the
 * same edit.
 */
const REQUIRED_VALUES: Record<string, string> = {
  PRIMARY_DOMAIN,
  PRICE_FLOOR,
  BUILD_TIMEFRAME,
  FIRST_TOWNS_TIMEFRAME,
  MARKETS,
  PAYMENT_TERMS,
  CALENDLY_URL,
  "PRIMARY_PROOF.client": PRIMARY_PROOF.client,
  "PRIMARY_PROOF.story": PRIMARY_PROOF.story,
  "PRIMARY_PROOF.quote.text": PRIMARY_PROOF.quote.text,
  "PRIMARY_PROOF.quote.name": PRIMARY_PROOF.quote.name,
  "PRIMARY_PROOF.quote.role": PRIMARY_PROOF.quote.role,
  "PRIMARY_PROOF.quote.company": PRIMARY_PROOF.quote.company,
};

/** Unfilled placeholders, by name. Empty means the page is launch-ready. */
export function unfilledPlaceholders(): string[] {
  return Object.entries(REQUIRED_VALUES)
    .filter(([, value]) => /\[.+\]/.test(value))
    .map(([key]) => key);
}

/**
 * Deliberate escape hatch for deploying with placeholders still in.
 *
 * Enforcement conflates two different things: BUILDING the page and RUNNING ADS
 * against it. Only the second is actually forbidden. Standing up a preview to
 * test the Supabase, Resend and Calendly wiring is legitimate work, and making
 * that impossible pushes you toward the genuinely bad workaround — inventing a
 * client result to get the build green.
 *
 * So: set ALLOW_PLACEHOLDER_BUILD=1 and the build proceeds. The unfilled banner
 * then renders in production too, so a placeholder deploy is impossible to
 * mistake for a finished one at a glance.
 */
export const PLACEHOLDER_BUILD_ALLOWED =
  process.env.ALLOW_PLACEHOLDER_BUILD === "1";

/** The human-readable list. Shared so the message is identical everywhere. */
export function placeholderReport(unfilled: string[]): string {
  return (
    `\n${unfilled.length} placeholder(s) in lib/content.ts are still unfilled:\n` +
    unfilled.map((key) => `  · ${key}`).join("\n") +
    `\n\nGoogle Ads prohibits unsubstantiated claims. Fill these before running ads.\n`
  );
}

/**
 * NOTHING THROWS AT MODULE SCOPE HERE — deliberately.
 *
 * This used to call an assert that threw during a production build. The throw
 * happened while Next collected page data, so Next caught and re-wrapped it,
 * and the deploy failed with:
 *
 *     [Error: Failed to collect page data for /_not-found] { type: 'Error' }
 *
 * which names a route that has nothing to do with the problem — /_not-found is
 * merely the first route that transitively imports this file. The real reason
 * was buried in a [cause] twenty lines up, and Vercel summarises the last line.
 *
 * Enforcement now lives in scripts/check-content.mts, run by the `prebuild`
 * npm script. It fails BEFORE Next starts, so the reason is the first and last
 * thing in the log and cannot be re-wrapped by anything.
 *
 * What remains here is a dev-time nag that never blocks.
 */
// CONTENT_CHECK_RUNNING suppresses this when scripts/check-content.mts is the
// caller — it prints the same report itself, and two copies of it in one build
// log reads like a bug.
if (
  process.env.NODE_ENV !== "production" &&
  !process.env.CONTENT_CHECK_RUNNING
) {
  const unfilled = unfilledPlaceholders();
  if (unfilled.length > 0) {
    console.warn(
      `\x1b[33m⚠ CONTENT INCOMPLETE —${placeholderReport(unfilled)}\x1b[0m`
    );
  }
}
