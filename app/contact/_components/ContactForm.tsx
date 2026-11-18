"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import TactileFace from "@/components/ui/TactileFace";
import { site } from "@/data/site";
export default function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        const name = String(fields.get("name") ?? "").trim();
        const email = String(fields.get("email") ?? "").trim();
        const subject = String(fields.get("subject") ?? "").trim();
        const message = String(fields.get("message") ?? "").trim();
        const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setDraftOpened(true);
      }}
      onChange={() => setDraftOpened(false)}
      aria-label="Email 2BD Studios"
      aria-describedby="contact-status"
    >
      <div className="form-row">
        <label htmlFor="contact-name">
          Your name
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="A name to remember"
            required
            maxLength={120}
          />
        </label>
        <label htmlFor="contact-email">
          Email address
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Somewhere to write back"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label htmlFor="contact-subject">
        Subject
        <input id="contact-subject" name="subject" placeholder="What's this about?" maxLength={160} required />
      </label>
      <label htmlFor="contact-message">
        Your message
        <textarea
          id="contact-message"
          name="message"
          placeholder="What's on your mind?"
          rows={4}
          required
          maxLength={5000}
        />
      </label>
      <div className="form-bottom">
        <span id="contact-status" role="status">
          {draftOpened
            ? "Finish sending in your email app. Your message stays here if it didn't open."
            : "Opens a draft in your email app. Review it and send when you're ready."}
          {draftOpened && <> You can also email <a href={`mailto:${site.email}`}>{site.email}</a>.</>}
        </span>
        <button className="button lavender tactile-button" type="submit"><TactileFace>
          {draftOpened ? "Reopen email draft" : "Open email draft"}
          <ArrowUpRight size={14} />
        </TactileFace></button>
      </div>
    </form>
  );
}
