"use client";

import CloudSky from "@/components/originkit/ui/cloud-sky";
import "./studio-sky.css";

export default function StudioSky({ framed = false }: { framed?: boolean }) {
  return (
    <CloudSky
      background="#747ba9"
      baseColor="#eeebf3"
      accentColor="#faf7ff"
      {...(framed ? { speed: 0, pointer: { wind: 0, parallax: 40, damping: 60 } } : {})}
      sun={{ x: 100, y: 100, glow: "#eee5ff" }}
      style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
    />
  );
}
