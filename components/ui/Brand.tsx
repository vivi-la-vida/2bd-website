import Image from "next/image";
import studioLogo from "@/public/logos/2bd-studios.png";

export function StudioLogo({ sizes = "48px" }: { sizes?: string }) {
  return (
    <Image
      src={studioLogo}
      alt="2BD Studios"
      className="studio-logo"
      sizes={sizes}
    />
  );
}
export function SteamIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7" cy="17" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m9 15 4-6m-4 9L1 14m9 1 5-4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
