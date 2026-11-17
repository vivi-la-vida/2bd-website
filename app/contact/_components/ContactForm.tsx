"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import TactileFace from "@/components/ui/TactileFace";
export default function ContactForm() {
  const [previewed, setPreviewed] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setPreviewed(true);
      }}
      onChange={() => setPreviewed(false)}
      aria-label="Contact form preview"
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
          {previewed
            ? "Preview complete. No message has been sent or saved."
            : "Demo form · Messages are not sent yet."}
        </span>
        <button className="button lavender tactile-button" type="submit"><TactileFace>
          {previewed ? "Preview again" : "Send a little hello"}
          <ArrowUpRight size={14} />
        </TactileFace></button>
      </div>
    </form>
  );
}
