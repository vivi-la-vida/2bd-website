import Image from "next/image";
import StoryDetails from "@/components/sections/StoryDetails";
import story from "@/public/images/story.png";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-art">
        <Image
          src={story}
          alt="Main Character and jellyfish guide in the In Between"
          fill
          sizes="(max-width: 640px) 100vw, 65vw"
        />
      </div>
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
    </section>
  );
}
