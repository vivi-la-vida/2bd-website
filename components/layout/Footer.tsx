import Link from "next/link";
import { StudioLogo } from "@/components/ui/Brand";
export default function Footer() {
  return (
    <div className="footer-wrap">
      <footer className="content-width">
        <Link href="/#home" aria-label="2BD Studios home">
          <StudioLogo />
        </Link>
        <span>© 2026 2BD Studios. Made with a little wonder.</span>
        <Link href="/#home">BACK TO THE TOP ↑</Link>
      </footer>
    </div>
  );
}
