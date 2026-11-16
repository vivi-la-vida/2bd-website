import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import gameArt from "@/public/images/to-be-seen-landscape.png";
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
      <section id="home-game" className="home-game section-pad" aria-labelledby="home-game-heading">
        <div className="home-game-art"><Image src={gameArt} alt="A wanderer beneath a tree in a dreamlike purple landscape" fill sizes="100vw" placeholder="blur" /></div>
        <svg className="home-game-cloud-divider" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <path fillRule="evenodd" d="M0 0 H1440 V160 H0 Z M0 90 C30 30 120 20 160 65 C200 0 300 0 350 55 C400 20 470 20 510 65 C560 0 670 0 720 55 C770 15 870 15 910 65 C970 0 1070 0 1120 60 C1180 20 1270 30 1300 80 C1360 40 1410 45 1440 75 L1440 160 H0 Z" />
        </svg>
        <Reveal className="content-width home-game-content">
          <div className="home-section-copy">
            <span className="eyebrow">OUR GAME · IN DEVELOPMENT</span>
            <h2 id="home-game-heading">To Be Seen</h2>
            <p>A cozy puzzle adventure about family and memory. Step into your loved ones’ memories and find your way back to life.</p>
            <Link href="/game" className="button lavender">Explore To Be Seen <ArrowUpRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default HomePage;
