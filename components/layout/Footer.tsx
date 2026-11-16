import Link from "next/link";
import { StudioLogo } from "@/components/ui/Brand";
export default function Footer() {
  return (
    <div className="footer-wrap">
      <footer className="content-width">
        <Link href="/" aria-label="2BD Studios home">
          <StudioLogo />
        </Link>
        <span>© 2026 2BD Studios</span>
        <a href="#main-content">BACK TO THE TOP ↑</a>
      </footer>
    </div>
  );
}
