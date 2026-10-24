import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { Jellyfish } from "@/components/ui/Brand";
import HeroAtmosphere from "@/components/sections/HeroAtmosphere";
import lake from "@/public/images/lake.png";
export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="game-title">
      <HeroAtmosphere>
        <Image
          src={lake}
          alt=""
          fill
          sizes="100vw"
          preload
          placeholder="blur"
          className="hero-image"
        />
      </HeroAtmosphere>
      <div className="hero-content">
        <p className="eyebrow">A LITTLE LOST. NEVER ALONE.</p>
        <div className="game-title">
          <h1 id="game-title">
            To be
            <br />
            <span>seen</span>
          </h1>
          <Jellyfish />
        </div>
        <p className="hero-description">
          A journey through memories.
          <br />A story of finding your way home.
        </p>
        <Button href="#game" variant="primary">
          Find your way <ArrowDown size={14} />
        </Button>
      </div>
      <span className="hero-note">
        For the things we leave behind.
        <br />
        And the love that stays.
      </span>
      <a className="scroll-cue" href="#game">
        <span>THE JOURNEY STARTS HERE</span>
        <span className="scroll-line" />
      </a>
      <div className="hero-bottom">
        <span>A GAME BY 2BD STUDIOS</span>
        <span>NARRATIVE ADVENTURE · COMING SOON</span>
      </div>
    </section>
  );
}
