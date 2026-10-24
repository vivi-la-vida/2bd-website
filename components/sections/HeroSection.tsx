import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroAtmosphere from "@/components/sections/HeroAtmosphere";
import heroArtwork from "@/public/images/to-be-seen-hero.png";
import gameLogo from "@/public/logos/to-be-seen.png";
export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="game-title">
      <HeroAtmosphere>
        <Image
          src={heroArtwork}
          alt="A wanderer and a glowing jellyfish beside a lake of floating islands under a starry sky"
          fill
          sizes="100vw"
          preload
          placeholder="blur"
          className="hero-image"
        />
      </HeroAtmosphere>
      <div className="hero-content">
        <p className="eyebrow">A LITTLE LOST. NEVER ALONE.</p>
        <h1 id="game-title" className="game-title">
          <Image
            src={gameLogo}
            alt="To Be Seen"
            sizes="(max-width: 640px) 255px, 285px"
            preload
          />
        </h1>
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
