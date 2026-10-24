"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { chapters, site, type Chapter } from "@/data/site";
import { SteamIcon, StudioLogo } from "@/components/ui/Brand";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<Chapter>("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== "/") return;
      let current: Chapter = "Home";
      for (const chapter of chapters) {
        const section = document.getElementById(chapter.toLowerCase());
        if (section && section.getBoundingClientRect().top <= 150)
          current = chapter;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5
      )
        current = "Contact";
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
  const current =
    pathname === "/"
      ? active
      : chapters.find((chapter) => pathname === `/${chapter.toLowerCase()}`);
  return (
    <header
      className={`site-header${scrolled || menu || pathname !== "/" ? " is-scrolled" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu) {
          setMenu(false);
          toggle.current?.focus();
        }
      }}
    >
      <Link
        href="/#home"
        aria-label="2BD Studios home"
        onClick={() => setMenu(false)}
      >
        <StudioLogo />
      </Link>
      <button
        ref={toggle}
        className="menu-button"
        type="button"
        onClick={() => setMenu(!menu)}
        aria-expanded={menu}
        aria-controls="main-navigation"
        aria-label={menu ? "Close navigation" : "Open navigation"}
      >
        {menu ? <X size={18} /> : <Menu size={18} />}
        <span>{menu ? "Close" : "Menu"}</span>
      </button>
      <nav
        id="main-navigation"
        className={menu ? "open" : ""}
        aria-label="Main navigation"
      >
        {chapters.map((chapter) => (
          <Link
            key={chapter}
            href={`/#${chapter.toLowerCase()}`}
            className={current === chapter ? "active" : ""}
            aria-current={current === chapter ? "location" : undefined}
            onClick={() => setMenu(false)}
          >
            {chapter}
          </Link>
        ))}
      </nav>
      <a
        className="header-wishlist"
        href={site.steam}
        target="_blank"
        rel="noreferrer"
        aria-label="Wishlist on Steam (prototype search link, opens in a new tab)"
      >
        <SteamIcon />
        Wishlist on Steam
        <ArrowUpRight size={12} />
      </a>
    </header>
  );
}
