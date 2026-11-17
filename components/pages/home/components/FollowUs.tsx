import { site } from "@/data/site";
import SocialStamp from "@/components/ui/SocialStamp";
import type { SocialPlatform } from "@/components/ui/SocialDoodle";
import Reveal from "@/components/ui/Reveal";

const stamps: Array<{ platform: SocialPlatform; tint: string }> = [
  { platform: "LinkedIn", tint: "#dce3f1" },
  { platform: "Instagram", tint: "#eeddea" },
  { platform: "YouTube", tint: "#e1dcf1" },
];

export default function FollowUs() {
  return (
    <section id="follow-us" className="home-follow section-pad" aria-labelledby="follow-heading">
      <Reveal className="content-width home-postcard-position">
        <div className="home-postcard">
          <svg className="postcard-paperclip" viewBox="0 0 110 60" fill="none" aria-hidden="true">
            <path d="M90 14 32 43C10 54 0 29 20 19L77 2c18-5 28 17 11 25L36 50C13 61 1 32 20 23L71 7" stroke="#a8a5a6" strokeWidth="5" strokeLinecap="round" />
            <path d="M90 13 32 42C10 53 0 28 20 18L77 1c18-5 28 17 11 25L36 49C13 60 1 31 20 22L71 6" stroke="#f6f4f0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        <div className="home-follow-heading">
          <h2 id="follow-heading">Follow <em>us.</em></h2>
        </div>
        <div className="home-social-stamps" aria-label="Studio social links">
          {stamps.map(({ platform, tint }) => {
            const social = site.socials.find(({ label }) => label === platform);
            return social ? <SocialStamp key={platform} platform={platform} href={social.href} tint={tint} /> : null;
          })}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
