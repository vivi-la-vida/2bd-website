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
          alt="A luminous tree illuminating the quiet waters of the In Between"
          fill
          sizes="(max-width: 640px) 100vw, 65vw"
        />
      </div>
      <div className="about-copy">
        <span className="eyebrow">MORE THAN A JOURNEY</span>
        <h2 id="about-heading">
          We all leave
          <br />
          <em>a little light behind.</em>
        </h2>
        <p>
          What if the moments we thought we&apos;d lost were still out there,
          waiting to be found?
        </p>
        <p>
          As a wandering spirit in the In Between, you&apos;ll cross quiet
          waters and enter the memories of your family. Discover their stories,
          untangle the things left unsaid, and find meaning in the beautifully
          ordinary.
        </p>
        <p className="story-quote">
          A gentle story about love, loss, and what it means to be seen.
        </p>
        <StoryDetails />
      </div>
    </section>
  );
}
