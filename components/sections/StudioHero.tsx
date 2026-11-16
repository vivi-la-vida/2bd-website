import Image from "next/image";
import CloudSky from "@/components/originkit/ui/cloud-sky";
import logo from "@/public/logos/studio-transparent.png";

export default function StudioHero() {
  return (
    <section id="home" className="studio-hero" aria-labelledby="studio-title">
      <div className="studio-sky" aria-hidden="true">
        <CloudSky
          background="#747ba9"
          baseColor="#eeebf3"
          accentColor="#faf7ff"
          sun={{ x: 100, y: 100, glow: "#eee5ff" }}
          style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
        />
      </div>
      <div className="studio-hero-content">
        <h1 id="studio-title" className="studio-hero-mark">
          <Image src={logo} alt="2BD Studios" preload sizes="(max-width: 640px) 85vw, 70vh" />
        </h1>
        <p className="studio-tagline">Small team. Big feelings.</p>
      </div>
      <a className="studio-scroll" href="#studio">
        <span>Meet the studio</span><span className="studio-scroll-line" />
      </a>
    </section>
  );
}
