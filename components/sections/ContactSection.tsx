import { site } from "@/data/site";
import ContactForm from "@/components/sections/ContactForm";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section section-pad"
      aria-labelledby="contact-heading"
    >
      <div className="contact-grid content-width">
        <div>
          <span className="eyebrow">LET&apos;S MAKE A CONNECTION</span>
          <h2 id="contact-heading">
            Every story starts
            <br />
            <em>with a hello.</em>
          </h2>
          <p>
            Have a question, a little thought, or just want to say hi?
            <br />
            We&apos;d love to hear from you.
          </p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email} <span>↗</span>
          </a>
          <div className="social-links">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
          {site.linksAreSamples && (
            <p className="contact-sample-note">
              Prototype contact details & social links · Awaiting studio links.
            </p>
          )}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
