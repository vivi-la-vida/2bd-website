import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StudioHero from "@/components/sections/StudioHero";
import Reveal from "@/components/ui/Reveal";
import gameArt from "@/public/images/to-be-seen-hero.png";

export default function HomePage() {
  return (
    <main id="main-content" className="studio-homepage">
      <StudioHero />
      <section id="studio" className="home-studio section-pad" aria-labelledby="studio-heading">
        <Reveal className="content-width home-studio-grid">
          <div><span className="eyebrow">ABOUT 2BD STUDIOS</span>
            <h2 id="studio-heading">Thoughtful worlds.<br /><em>Stories that stay.</em></h2>
          </div>
          <div className="home-section-copy">
            <p>We’re 2BD Studios, a small independent team creating games with heart.</p>
            <p>We believe a little wonder can bring us closer. Through playful discovery and personal stories, we make space for empathy, connection, and the many ways we see the world.</p>
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
