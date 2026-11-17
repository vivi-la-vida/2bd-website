"use client";

import Image from "next/image";
import { useState } from "react";
import StudioSky from "@/components/ui/StudioSky";
import logo from "@/public/logos/studio-transparent.png";

export default function StudioHero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="home" className={`studio-hero${loaded ? " logo-complete" : ""}`} aria-labelledby="studio-title">
      <div className="studio-sky" aria-hidden="true">
        <StudioSky />
      </div>
      <div className="studio-hero-content">
        <h1 id="studio-title" className="studio-hero-mark" aria-label="2BD Studios">
          <Image
            src={logo}
            alt="2BD Studios"
            preload
            sizes="(max-width: 640px) 85vw, 70vh"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </h1>
        <p className="studio-tagline" aria-hidden={!loaded}>A game studio with a focus on storytelling and emotional connection.</p>
      </div>
      <a className="studio-scroll" href="#studio" aria-hidden={!loaded} tabIndex={loaded ? 0 : -1}>
        <span>Scroll</span><span className="studio-scroll-line" />
      </a>
    </section>
  );
}

