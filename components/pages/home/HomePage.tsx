import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import gameArt from "@/public/images/to-be-seen-hero.png";
import studioLogo from "@/public/logos/studio-transparent.png";
import StudioHero from "./components/StudioHero";


function HomePage() {
  return (
    <main id="main-content" className="studio-homepage">
      <StudioHero />
      <section id="studio" className="home-studio section-pad" aria-labelledby="studio-heading">
        <Reveal className="content-width home-studio-grid">
          <div className="home-studio-logo">
            <Image src={studioLogo} alt="2BD Studios" sizes="(max-width: 760px) 65vw, 360px" />
          </div>
          <div className="home-section-copy home-studio-copy">
            <h2 id="studio-heading">Welcome!</h2>
            <p className="home-studio-introduction">We are 2BD Studios.</p>
            <p>We&apos;re a nine person team that started at Duke University&apos;s Game Design, Development, and Innovation program. We believe games should do more than follow trends. We draw inspiration from personal experiences to create thoughtful, emotionally resonant worlds that encourage reflection, empathy, and human connection.</p>
            <Link href="/about" className="button lavender">About the studio <ArrowUpRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
      <section className="home-game section-pad" aria-labelledby="home-game-heading">
        <Reveal className="content-width home-game-grid">
          <div className="home-game-art"><Image src={gameArt} alt="A wanderer and jellyfish spirit guide beneath a star-filled sky" sizes="(max-width: 760px) 100vw, 55vw" placeholder="blur" /></div>
          <div className="home-section-copy">
            <span className="eyebrow">OUR GAME · IN DEVELOPMENT</span>
            <h2 id="home-game-heading">To Be Seen</h2>
            <p className="home-game-lead">Through their eyes.<br /><em>A little closer to home.</em></p>
            <p>A cozy narrative puzzle game between life and death. Guided by a jellyfish spirit, step into your family’s memories, piece together their hidden truths, and find your way back to life.</p>
            <Link href="/game" className="button lavender">Explore To Be Seen <ArrowUpRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default HomePage;
