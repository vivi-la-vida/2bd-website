import SectionHeading from "@/components/ui/SectionHeading";
import TeamGallery from "@/components/team/TeamGallery";
import Reveal from "@/components/ui/Reveal";
export default function TeamSection() {
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
