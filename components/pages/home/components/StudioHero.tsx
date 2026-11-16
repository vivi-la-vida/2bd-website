"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CloudSky from "@/components/originkit/ui/cloud-sky";
import logo from "@/public/logos/studio-transparent.png";

export default function StudioHero() {
  const [finished, setFinished] = useState(false);
  const [ready, setReady] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) setFinished(true);
      setReady(true);
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      preference.removeEventListener("change", update);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function finish() {
    if (timer.current) clearTimeout(timer.current);
    setFinished(true);
  }

  return (
    <section id="home" className={`studio-hero${finished ? " logo-complete" : ""}`} aria-labelledby="studio-title">
      <div className="studio-sky" aria-hidden="true">
        <CloudSky
          background="#747ba9"
          baseColor="#eeebf3"
          accentColor="#faf7ff"
          sun={{ x: 100, y: 100, glow: "#eee5ff" }}
          style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
        />
      </div>
      <div className="studio-hero-content">
        <h1 id="studio-title" className="studio-hero-mark" aria-label="2BD Studios">
          <Image src={logo} alt="2BD Studios" preload sizes="(max-width: 640px) 85vw, 70vh" />
          {ready && !finished && (
            // Native GIF playback preserves the supplied frame timing and plays once.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="studio-logo-animation"
              src="/logos/studio-intro-once.gif"
              alt=""
              aria-hidden="true"
              width={1080}
              height={1080}
              onLoad={() => {
                if (timer.current) clearTimeout(timer.current);
                timer.current = setTimeout(finish, 8000);
              }}
              onError={finish}
            />
          )}
        </h1>
        <p className="studio-tagline" aria-hidden={!finished}>A game studio with a focus on storytelling and emotional connection.</p>
      </div>
      <a className="studio-scroll" href="#studio" aria-hidden={!finished} tabIndex={finished ? 0 : -1}>
        <span>Scroll</span><span className="studio-scroll-line" />
      </a>
    </section>
  );
}

