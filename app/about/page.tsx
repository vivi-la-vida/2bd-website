import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };
import SectionHeading from "@/components/ui/SectionHeading";
import TeamGallery from "@/app/about/_components/TeamGallery";
import Reveal from "@/components/ui/Reveal";

function TeamSection() {
  return (
    <section
      id="team"
      className="team-section section-pad"
      aria-labelledby="team-heading"
    >
      <Reveal>
        <SectionHeading
          id="team-heading"
          eyebrow="SMALL STUDIO. FULL HEARTS."
          title={
            <>
              The people <em>behind the wonder.</em>
            </>
          }
        >
          We&apos;re 2BD Studios. A small independent team making
          <br />
          thoughtful worlds and stories that stay with you.
        </SectionHeading>
      </Reveal>
      <TeamGallery />
      <p className="team-note">
        A few different perspectives. One shared adventure.
      </p>
    </section>
  );
}

export default function AboutPage() {
  return <main id="main-content" className="dedicated-page"><h1 className="sr-only">About 2BD Studios</h1><TeamSection /></main>;
}
