import Link from "next/link";
import { StudioLogo } from "@/components/ui/Brand";
import SocialDoodle, { type SocialPlatform } from "@/components/ui/SocialDoodle";
import { site } from "@/data/site";
import "./footer-links.css";
export default function Footer() {
  return (
    <div className="footer-wrap">
      <footer className="content-width">
        <Link href="/" aria-label="2BD Studios home">
          <StudioLogo />
        </Link>
        <span>© 2026 2BD Studios</span>
        <div className="footer-social-links" role="group" aria-label="Follow and contact 2BD Studios">
          {site.socials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
              <SocialDoodle platform={label as SocialPlatform} />
            </a>
          ))}
          <a href={site.steam} target="_blank" rel="noreferrer" aria-label="Steam (opens in a new tab)"><SocialDoodle platform="Steam" /></a>
          <a href={`mailto:${site.email}`} aria-label="Email 2BD Studios"><SocialDoodle platform="Email" /></a>
        </div>
        <a href="#main-content">BACK TO THE TOP ↑</a>
      </footer>
    </div>
  );
}
