import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import gameArt from "@/public/images/to-be-seen-landscape.png";
import StudioHero from "./_components/StudioHero";
import FollowUs from "./_components/FollowUs";
import TactileFace from "@/components/ui/TactileFace";
import CloudDivider from "@/components/ui/CloudDivider";


function HomePage() {
  return (
    <main id="main-content" className="studio-homepage">
      <StudioHero />
      <section id="studio" className="home-studio section-pad" aria-labelledby="studio-heading">
        <Reveal className="content-width home-studio-content">
          <div className="home-section-copy home-studio-copy">
            <h2 id="studio-heading">Welcome!</h2>
            <p className="home-studio-introduction">We are 2BD Studios.</p>
            <p>We&apos;re a nine person team that started at Duke University&apos;s Game Design, Development, and Innovation program. We believe games should do more than follow trends. We draw inspiration from personal experiences to create thoughtful, emotionally resonant worlds that encourage reflection, empathy, and human connection.</p>
            <Link href="/about" className="button lavender tactile-button"><TactileFace>About the studio <ArrowUpRight size={16} /></TactileFace></Link>
          </div>
        </Reveal>
      </section>
      <section id="home-game" className="home-game section-pad" aria-labelledby="home-game-heading">
        <div className="home-game-art"><Image src={gameArt} alt="A wanderer beneath a tree in a dreamlike purple landscape" fill sizes="100vw" placeholder="blur" /></div>
        <CloudDivider />
        <Reveal className="content-width home-game-content">
          <div className="home-section-copy">
            <span className="eyebrow">OUR GAME · IN DEVELOPMENT</span>
            <h2 id="home-game-heading">To Be Seen</h2>
            <p>A cozy puzzle adventure about family and memory. Step into your loved ones’ memories and find your way back to life.</p>
            <Link href="/game" className="button lavender tactile-button"><TactileFace>Explore To Be Seen <ArrowUpRight size={16} /></TactileFace></Link>
          </div>
        </Reveal>
      </section>
      <FollowUs />
    </main>
  );
}

export default HomePage;
