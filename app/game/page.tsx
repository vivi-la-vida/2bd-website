import type { Metadata } from "next";
import "./story.css";
export const metadata: Metadata = { title: "The Game" };
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroAtmosphere from "@/app/game/_components/HeroAtmosphere";
import heroArtwork from "@/public/images/to-be-seen-hero.png";
import treeArtwork from "@/public/images/to-be-seen-tree.png";
import gameLogo from "@/public/logos/to-be-seen-trimmed.png";
import { features } from "@/data/game";
import { site } from "@/data/site";
import { SteamIcon } from "@/components/ui/Brand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TrailerPreview from "@/app/game/_components/TrailerPreview";
import StoryDetails from "@/app/game/_components/StoryDetails";
function CloudDivider({ position }: { position: "top" | "bottom" }) {
  return (
    <svg className={`game-cloud-divider game-cloud-divider--${position}`} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 0H1440V75C1410 45 1360 40 1300 80C1270 30 1180 20 1120 60C1070 0 970 0 910 65C870 15 770 15 720 55C670 0 560 0 510 65C470 20 400 20 350 55C300 0 200 0 160 65C120 20 30 30 0 90Z" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="game-title">
      <HeroAtmosphere>
        <Image
          src={treeArtwork}
          alt="A wanderer beneath a pale tree overlooking a dreamlike lavender landscape"
          fill
          sizes="100vw"
          preload
          placeholder="blur"
          className="hero-image"
        />
      </HeroAtmosphere>
      <div className="hero-content">
        <h1 id="game-title" className="game-title">
          <Image
            src={gameLogo}
            alt="To Be Seen"
            sizes="(max-width: 640px) 82vw, 340px"
            preload
          />
        </h1>
        <p className="hero-description">
          See through your family&apos;s eyes.
          <br />Find your way back to life.
        </p>
      </div>
      <a className="scroll-cue" href="#game">
        <span>THE JOURNEY STARTS HERE</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}

function GameSection() {
  return (
    <section
      id="game"
      className="game-section section-pad"
      aria-labelledby="game-heading"
    >
      <Reveal>
        <SectionHeading
          id="game-heading"
          eyebrow=" "
          title={
            <>
              Through their eyes.
              <br />
              <em>A little closer to home.</em>
            </>
          }
        >
          Relive their memories. Understand their world.
          <br />
          Discover what it means to be seen.
        </SectionHeading>
      </Reveal>
      <Reveal className="game-intro content-width">
        <div className="game-copy">
          <h3>
            A spirit in the In-Between.
          </h3>
          <p>
            To Be Seen is a cozy, narrative-driven puzzle game set between life
            and death. As a wandering spirit, you must understand the family
            you&apos;ve grown distant from to find your way back to life.
          </p>
          <p>
            Possess your family members in third person, then relive their
            memories in first person. Solve puzzles and uncover their joys,
            regrets, and hidden truths as you discover how they see the
            world—and how they see you.
          </p>
          <Button href={site.steam} target="_blank" rel="noreferrer">
            <SteamIcon />
            Wishlist on Steam
            <ArrowUpRight size={14} />
          </Button>
        </div>
        <TrailerPreview />
      </Reveal>
      <div className="features content-width">
        {features.map((feature, index) => (
          <Reveal key={feature.image}>
            <article>
              <div className="island-image">
                <Image
                  src={`/images/${feature.image}.png`}
                  alt={`${feature.title}: a painted island floating on water`}
                  fill
                  unoptimized
                />
              </div>
              <span className="feature-number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>
                {feature.subtitle}
                <br />
                <span>{feature.description}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="about-section game-story"
      aria-labelledby="about-heading"
    >
      <CloudDivider position="top" />
      <div className="about-art">
        <Image
          src={heroArtwork}
          alt="A wanderer and a glowing jellyfish beside a lake of floating islands under a starry sky"
          fill
          sizes="100vw"
        />
      </div>
      <div className="content-width story-content">
      <div className="about-copy">
        <span className="eyebrow">A STORY OF RECONNECTION</span>
        <h2 id="about-heading">
          A family apart.
          <br />
          <em>A chance to reconnect.</em>
        </h2>
        <p>
          After losing your brother, your family moves abroad to begin again.
          To you, leaving feels like forgetting. The distance between you grows.
        </p>
        <p>
          Now, caught between life and death, you enter the In-Between. With a
          jellyfish spirit guide beside you, step into your family&apos;s memories
          and discover the love, grief, and misunderstandings you couldn&apos;t
          see before.
        </p>
        <p className="story-quote">
          To find your way back, first understand the people you left behind.
        </p>
        <StoryDetails />
      </div>
      </div>
    </section>
  );
}

export default function GamePage() {
  return <main id="main-content" className="game-page"><HeroSection /><GameSection /><AboutSection /></main>;
}
