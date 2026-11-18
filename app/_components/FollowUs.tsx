import { site } from "@/data/site";
import SocialStamp from "@/components/ui/SocialStamp";
import type { DoodleIcon } from "@/components/ui/SocialDoodle";
import Reveal from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

const stamps: Array<{ platform: DoodleIcon; tint: string }> = [
  { platform: "Instagram", tint: "#e5e8f5" },
  { platform: "LinkedIn", tint: "#e5e8f5" },
  { platform: "YouTube", tint: "#e5e8f5" },
  { platform: "Steam", tint: "#e5e8f5" },
];

export default function FollowUs() {
  return (
    <section id="follow-us" className="home-follow section-pad" aria-labelledby="follow-heading">
      <Reveal className="content-width home-postcard-position">
        <div className="home-postcard">
          <div className="follow-postmark" aria-hidden="true">
            <svg viewBox="0 0 100 40" fill="none"><path d="M0 9Q10 1 20 9T40 9T60 9M0 20Q10 12 20 20T40 20T60 20M0 31Q10 23 20 31T40 31T60 31" /><circle cx="80" cy="20" r="18" /></svg>
            <Sparkles size={18} />
          </div>
        <div className="home-follow-heading">
          <h2 id="follow-heading">Follow us</h2>
          <p>Check out our socials</p>
          <p>Follow the making of <em>To Be Seen</em> from artwork, development updates, and silly moments.</p>
        </div>
        <div className="home-social-stamps" aria-label="Studio social links">
          {stamps.map(({ platform, tint }) => {
            const href = platform === "Steam" ? site.steam : site.socials.find(({ label }) => label === platform)?.href;
            return href ? <SocialStamp key={platform} platform={platform} href={href} tint={tint} /> : null;
          })}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
