import { COMPANY, CONTACT_EMAIL } from "@/lib/content";
import { LegalModals } from "./LegalModals";

/**
 * Copyright line, location, contact email, Privacy, Terms. Nothing else.
 * Privacy and Terms are buttons that open modals on this page.
 *
 * The email is PLAIN TEXT, deliberately not a mailto: link. A mail client
 * launching is a leak like any other — the visitor leaves the page and lands
 * in an empty compose window, which converts worse than the form does.
 *
 * The city plus a domain-matched email carries the legitimacy signal the phone
 * number used to carry, without promising a channel we cannot answer.
 *
 * COMPANY.location is the SHORT form — city and state only. The full street
 * address lives in COMPANY.addressLines and renders in the privacy policy,
 * where a complete address is actually useful. Putting it here would wrap onto
 * three lines on a phone and buy nothing.
 */
export function Footer() {
  return (
    <footer className="bg-ink-deep px-5 py-10 text-center sm:px-8">
      <p className="text-sm text-white/70">
        © {COMPANY.year} {COMPANY.name} · {COMPANY.location}
      </p>
      <p className="mt-1 font-mono text-sm text-white/65">{CONTACT_EMAIL}</p>
      <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/70">
        <LegalModals />
      </div>
    </footer>
  );
}
