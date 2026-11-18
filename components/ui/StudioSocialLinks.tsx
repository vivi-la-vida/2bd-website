import { site } from "@/data/site";
import SocialDoodle, { type SocialPlatform, type DoodleIcon } from "./SocialDoodle";
import { Stamp } from "./Stamp";
import "@/components/layout/footer-links.css";

export default function StudioSocialLinks({ className = "", stamps = false }: { className?: string; stamps?: boolean }) {
  const icon = (platform: DoodleIcon) => stamps ? (
    <Stamp paper="#fffaf1" ink="#303c63" padding={5} horizontalPerforations={8} verticalPerforations={10}>
      <span className="contact-social-stamp-face"><SocialDoodle platform={platform} /></span>
    </Stamp>
  ) : <SocialDoodle platform={platform} />;
  return (
    <div className={`studio-social-links ${stamps ? "contact-social-stamps" : ""} ${className}`} role="group" aria-label="Follow and contact 2BD Studios">
      {site.socials.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
          {icon(label as SocialPlatform)}
        </a>
      ))}
      <a href={site.steam} target="_blank" rel="noreferrer" aria-label="Steam (opens in a new tab)">{icon("Steam")}</a>
      <a href={`mailto:${site.email}`} aria-label="Email 2BD Studios">{icon("Email")}</a>
    </div>
  );
}
