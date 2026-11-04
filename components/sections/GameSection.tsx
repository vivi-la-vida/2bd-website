import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/data/game";
import { site } from "@/data/site";
import { SteamIcon } from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TrailerPreview from "@/components/sections/TrailerPreview";
export default function GameSection() {
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
            <br />
            A way back home.
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
                  sizes="(max-width: 640px) 43vw, 260px"
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
