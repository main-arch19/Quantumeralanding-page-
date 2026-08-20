import { COMPANY, PRIMARY_DOMAIN, isFilled } from "./content";

/**
 * Privacy and Terms copy. These render in a modal ON THIS PAGE — never a new
 * page, never a new tab. This is the single permitted exception to the
 * no-links rule, and it exists because Google Ads disapproves lead-gen pages
 * without an accessible privacy policy.
 */

export type LegalDocument = {
  id: string;
  title: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const PRIVACY_POLICY: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy",
  updated: "August 2026",
  sections: [
    {
      heading: "What we collect about you",
      paragraphs: [
        `The form on this page asks for four things: your name, your work email address, a cell number, and how many trucks you run and which towns you cover. That is everything we ask you to type.`,
        `We use the phone number to call you back about your business and to arrange the call. If you go on to book a time, the scheduling service also asks for a number of its own, and uses it to send you a reminder.`,
        `We also record the advertising parameters attached to your visit (such as utm_source, utm_campaign, utm_term and gclid). These tell us which advertisement and which search term brought you here. They contain no personal information about you.`,
      ],
    },
    {
      heading: "Why we collect it",
      paragraphs: [
        `We use your details for one purpose: to reply to you about the business you described, and to arrange the call if you want one. That may be by email or by phone, on the number you gave us. That is the whole of it. You can tell us to stop at any time and we will.`,
        `We do not sell your information. We do not share it with advertisers or data brokers, and we do not add you to any list beyond replying to what you sent.`,
      ],
    },
    {
      heading: "Who can see it",
      paragraphs: [
        `Your submission is stored in our database and emailed to ${COMPANY.name}, and is read by the people who would run your call. We use a small number of service providers to make that work — a database host, an email delivery service, and a scheduling service — and they process your information only to provide those services to us.`,
      ],
    },
    {
      heading: "Analytics and advertising",
      paragraphs: [
        `This page uses Google Analytics and Google Ads conversion tracking to measure how the page performs and whether our advertising works. These services set cookies and may record your interactions with the page, such as how far you scrolled and whether you submitted the form.`,
        `You can block these with any standard ad or cookie blocker. The page and the form work normally if you do.`,
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        `We keep enquiry details for as long as we are in contact with you about your project, and for a reasonable period afterwards in case you come back to us. You can ask us to delete your information at any time and we will do it.`,
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to ${COMPANY.email} and we will respond.`,
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `${COMPANY.name}, ${COMPANY.location}. Questions about this policy go to ${COMPANY.email}.`,
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  id: "terms",
  title: "Terms",
  updated: "August 2026",
  sections: [
    {
      heading: "What this page offers",
      paragraphs: [
        `This page offers a free 30-minute call. It is genuinely free and there is no obligation attached to it. You keep the call recording, the figures we pull with you and the written plan whether or not you go on to hire us.`,
      ],
    },
    {
      heading: "What the call is",
      paragraphs: [
        `On the call we go through your own call records and estimate figures with you, search what your customers search in each town you serve, and set out what we would build and what it would cost.`,
        `Any figures we arrive at on the call are worked out from the information you give us and from searches run in front of you. They describe what has already happened in your business. They are not a forecast, and nothing on this page or on the call is a guarantee of any particular result. If we think your problem is something we do not fix, we will tell you so — that is a legitimate outcome of the call and it happens.`,
      ],
    },
    {
      heading: "Who it is for",
      paragraphs: [
        `This is written for established residential HVAC companies running their own trucks, typically eight or more, that are losing calls and estimates they should be winning. If that is not your situation, this particular page is not written for you — say so by email and we will point you somewhere more useful.`,
      ],
    },
    {
      heading: "Booking and rescheduling",
      paragraphs: [
        `Submitting the form is a request for a call, not a binding appointment. We confirm the time with you. Either of us can reschedule with reasonable notice, and if you do not show up we will simply offer you another time.`,
      ],
    },
    {
      heading: "Pricing",
      paragraphs: [
        `The price stated on this page is the price: a deposit, then a monthly payment for twelve months, or a single payment up front, with a lower monthly after the first year to keep the system running. The exact figures are the ones shown on this page at the time you enquire, and we confirm them in writing before any work begins. Any illustrative arithmetic on this page — average tickets, missed-call counts, recovery rates — describes what is typical in the trade and is offered for you to check against your own records. It is not a claim about your business and not a promise of a result.`,
      ],
    },
    {
      // The page promises "first towns live within two weeks, or you do not
      // pay the deposit". That is a refund obligation, so it needs terms — an
      // unqualified refund promise is the one claim on this page that could
      // not be defended, and the exact thing the ASA and Google Ads object to.
      //
      // Three things have to be pinned down or the promise is unenforceable in
      // both directions: when the clock starts, what counts as delivery, and
      // what exactly is refunded. All three are stated below.
      //
      // THE CONSEQUENCE IS THE DEPOSIT, NOT THE YEAR. An earlier version of
      // this page promised a free build if a draft slipped, which was
      // survivable against a one-off site and is not against a twelve-month
      // agreement. Keep these terms and OFFER.guarantee in lib/content.ts
      // saying the same thing.
      heading: "The two-week first towns",
      paragraphs: [
        `We promise your first town pages live within two weeks, or you do not pay the deposit. Here is exactly what that means, so that neither of us has to argue about it later.`,
        `The two weeks are calendar days and they start when the deposit clears, not when the call happens. "Live" means pages for the towns and services we agreed on the call, published on your domain and reachable by anybody who types the address, with your missed-call text-back switched on and working. It does not mean every town you serve — the full build takes six weeks and that is what the rest of it is for.`,
        `If we miss that deadline, your deposit is returned in full and you owe nothing for it. You keep whatever we have built. If you choose to carry on, the monthly payments start from the date the first towns actually go live rather than the date we agreed.`,
        `The clock pauses while we are waiting on you — for your town and service list, for access to your domain, for the phone number we are texting from, or for a decision we cannot make on your behalf. It restarts when the thing we asked for arrives. We will tell you in writing each time it pauses, on the day, so that the count is never a surprise at the end.`,
      ],
    },
    {
      heading: "This page",
      paragraphs: [
        // Name the domain only once it is real. Interpolating it unguarded put
        // the literal text "[PRIMARY-DOMAIN]" into published legal copy, and on
        // a staging deploy it would name a throwaway hostname instead.
        isFilled(PRIMARY_DOMAIN)
          ? `The content of this page is owned by ${COMPANY.name}. Client names appear with permission. This page is published at ${PRIMARY_DOMAIN} and these terms are governed by the laws of Jamaica.`
          : `The content of this page is owned by ${COMPANY.name}. Client names appear with permission. These terms are governed by the laws of Jamaica.`,
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = [PRIVACY_POLICY, TERMS] as const;
