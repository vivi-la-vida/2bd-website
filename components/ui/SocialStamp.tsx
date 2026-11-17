import { Stamp } from "./Stamp";
import SocialDoodle, { type SocialPlatform } from "./SocialDoodle";
import "./social-stamp.css";

export default function SocialStamp({ platform, href, tint }: { platform: SocialPlatform; href: string; tint: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`Follow 2BD Studios on ${platform} (opens in a new tab)`} className="social-stamp-link">
      <Stamp paper="#fffaf1" ink="#514775" padding={5} horizontalPerforations={8} verticalPerforations={10} className="social-stamp-stamp">
        <div className="social-stamp-face" style={{ background: tint }}>
          <SocialDoodle platform={platform} />
        </div>
      </Stamp>
    </a>
  );
}
