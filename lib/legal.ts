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
        `The form on this page asks for three things: your name, your work email address, and a description of what you want built. That is everything we ask you to type.`,
        `There is no phone field on this page. If you go on to book a call, the scheduling service asks for a phone number separately and optionally, and uses it to send you a reminder.`,
        `We also record the advertising parameters attached to your visit (such as utm_source, utm_campaign, utm_term and gclid). These tell us which advertisement and which search term brought you here. They contain no personal information about you.`,
      ],
    },
    {
      heading: "Why we collect it",
      paragraphs: [
        `We use your details for one purpose: to reply to you about the project you described, and to arrange the call if you want one. That is the whole of it. You can tell us to stop at any time and we will.`,
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
        `This page offers a free 30-minute build call. It is genuinely free and there is no obligation attached to it. You keep the call recording and the written plan whether or not you go on to hire us.`,
      ],
    },
    {
      heading: "What the call is",
      paragraphs: [
        `On the call we talk through what you want built and what it has to do, look at what the searches for your services return, and set out what we would build and what it would cost.`,
        `The plan is our professional opinion based on a 30-minute conversation. It is not a guarantee of any particular result. If we think what you want does not need us, we will tell you so — that is a legitimate outcome of the call and it happens.`,
      ],
    },
    {
      heading: "Who it is for",
      paragraphs: [
        `This is written for established businesses that already have a website which is not producing the enquiries it should. If you do not have a website yet, this particular page is not written for you — say so by email and we will point you somewhere more useful.`,
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
        `Any figures discussed on this page or on the call are indicative starting points, not quotes. A real quote follows a real conversation about scope, and we give you a fixed date and figure in writing before any work begins.`,
      ],
    },
    {
      // The page promises "first draft within seven days, or the build is
      // free". That is a refund obligation, so it needs terms — an
      // unqualified refund promise is the one claim on this page that could
      // not be defended, and the exact thing the ASA and Google Ads object to.
      //
      // Three things have to be pinned down or the promise is unenforceable in
      // both directions: when the clock starts, what counts as delivery, and
      // what "free" refunds. All three are stated below.
      heading: "The seven-day first draft",
      paragraphs: [
        `We promise a first draft within seven days or the build is free. Here is exactly what that means, so that neither of us has to argue about it later.`,
        `The seven days are calendar days and they start when the deposit clears, not when the call happens. A first draft means a working site you can open in a browser and click through, laid out with your own content in it — not a picture of a design, and not a template with somebody else's words. It will not be finished; that is what the rest of the build is for.`,
        `If we miss that deadline, you pay nothing for the build and any deposit you have paid is returned in full. You keep the draft.`,
        `The clock pauses while we are waiting on you — for content, for access to your domain or hosting, or for a decision we cannot make on your behalf. It restarts when the thing we asked for arrives. We will tell you in writing each time it pauses, on the day, so that the count is never a surprise at the end.`,
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
