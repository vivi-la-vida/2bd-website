import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import ContactForm from "./_components/ContactForm";
import StudioSocialLinks from "@/components/ui/StudioSocialLinks";

import { Stamp } from "@/components/ui/Stamp";
import artwork from "@/public/images/to-be-seen-hero.png";
import "./contact.css";

export const metadata: Metadata = { title: "Get in touch" };

export default function ContactPage() {
  return (
    <main id="main-content" className="dedicated-page contact-page">
      <section className="contact-letter-scene" aria-labelledby="contact-heading">
        <div className="contact-envelope content-width">
          <div className="envelope-back" aria-hidden="true" />
          <div className="contact-letter">
            <div className="letter-form-column">
              <h1 id="contact-heading">Get in touch</h1>
              <p className="letter-introduction">Have a question, idea, or just want to say hi?<br />We&apos;d love to hear from you.</p>
              <ContactForm />
            </div>
            <aside className="letter-social-column" aria-labelledby="contact-social-heading">
              <div className="letter-postmark" aria-hidden="true">
                <svg viewBox="0 0 150 50" fill="none"><path d="M0 12Q12 2 24 12T48 12T72 12T96 12M0 24Q12 14 24 24T48 24T72 24T96 24M0 36Q12 26 24 36T48 36T72 36T96 36" /><circle cx="122" cy="24" r="23" /></svg>
                <Sparkles size={22} />
              </div>
              <div className="letter-art-stamp" aria-hidden="true">
                <Stamp paper="#fffaf1" padding={8} horizontalPerforations={8} verticalPerforations={10}>
                  <Image src={artwork} alt="" fill sizes="140px" className="letter-stamp-art" />
                </Stamp>
              </div>
              <h2 id="contact-social-heading">Curious about more?</h2>
              <p>Find us on our socials,<br />or send a little hello.</p>
              <StudioSocialLinks className="letter-social-icons" stamps />
            </aside>
          </div>
          <div className="envelope-front" aria-hidden="true" />
          <div className="envelope-seal" aria-hidden="true"><Sparkles size={26} /></div>
        </div>
      </section>
    </main>
  );
}
