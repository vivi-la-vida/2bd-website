import type { Metadata } from "next";
import TeamGallery from "@/app/about/_components/TeamGallery";
import Reveal from "@/components/ui/Reveal";
import StudioSky from "@/components/ui/StudioSky";
import "./about.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main-content" className="dedicated-page about-page">
      <section className="studio-introduction section-pad" aria-labelledby="studio-heading">
        <div className="studio-introduction-sky" aria-hidden="true"><StudioSky framed /></div>
        <Reveal className="studio-introduction-copy content-width">
          <h1 id="studio-heading">About the Studio</h1>
          <p className="studio-belief"><strong>We create games that make players feel something.</strong></p>
          <p>2BD Studios began as a nine-person team in Duke University&apos;s Game Design, Development, and Innovation program. We came together to build thoughtful worlds and tell stories rooted in personal experience.</p>
          <p>We believe games should do more than follow trends. We draw inspiration from our own lives to create emotionally resonant worlds that encourage reflection, empathy, and human connection.</p>
          <p>We like to keep things &ldquo;to be determined.&rdquo; That curiosity shapes how we work: exploring different ideas, experimenting with how things can be made, and giving each other room to discover something unexpected.</p>
          <p>Together, we completed a playable vertical slice of <em>To Be Seen</em>, established the game&apos;s core mechanics and visual direction, and refined the experience through iterative player testing.</p>
        </Reveal>
      </section>
      <section id="team" className="team-section section-pad" aria-labelledby="team-heading">
        <Reveal className="section-heading">
          <h2 id="team-heading">Meet the team</h2>
        </Reveal>
        <TeamGallery />
      </section>
    </main>
  );
}
