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
          eyebrow="WELCOME TO THE IN BETWEEN"
          title={
            <>
              A little wonder.
              <br />
              <em>A little closer to home.</em>
            </>
          }
        >
          Some journeys aren&apos;t about where you go.
          <br />
          They&apos;re about what you find along the way.
        </SectionHeading>
      </Reveal>
      <Reveal className="game-intro content-width">
        <div className="game-copy">
          <span className="mini-label">THE GAME</span>
          <h3>
            To be seen.
            <br />
            To be remembered.
          </h3>
          <p>
            A cozy, narrative-driven puzzle adventure about memory, family, and
            the invisible threads that connect us.
          </p>
          <p>
            Drift through a world suspended between life and death. Explore
            luminous islands, step into cherished memories, and follow the light
            back home.
          </p>
          <Button href={site.steam} target="_blank" rel="noreferrer">
            <SteamIcon />
            Wishlist on Steam
            <ArrowUpRight size={14} />
          </Button>
          <span className="availability">IN DEVELOPMENT · PC / STEAM</span>
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
