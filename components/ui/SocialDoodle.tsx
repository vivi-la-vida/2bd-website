export type SocialPlatform = "LinkedIn" | "Instagram" | "YouTube";
export type DoodleIcon = SocialPlatform | "Steam" | "Email";

/** Hand-drawn paths, with uneven contours and a few pencil marks. */
export default function SocialDoodle({ platform }: { platform: DoodleIcon }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {platform === "LinkedIn" && <>
        <path d="M25 23 Q61 20 96 24 L94 97 Q60 100 23 95 Z" />
        <path d="m27 27-1 65M32 49l11-1-1 35-10 1ZM53 48l10 1v5q6-9 15-5 8 3 7 16l-1 18-10 1V64q0-8-6-6-5 1-5 8v18l-10-1Z" />
        <path d="M42 36q-1 6-6 5-6-1-5-6 2-7 8-4 3 1 3 5ZM17 87l-4 7m87-65 6-4m-8 13 8-1" />
      </>}
      {platform === "Instagram" && <>
        <path d="M42 23q-18-1-19 20l1 37q0 18 20 17l35-1q18 0 18-20l-1-35q0-19-20-18Z" />
        <path d="M28 45q-2-17 16-17m35 64q14 0 13-17M77 60q1 19-17 20-20-1-20-20 1-20 21-19 17 1 16 19Z" />
        <path d="M47 68q-6-13 5-20m31-12q4 1 3 5-1 4-5 3-4-1-3-5 1-4 5-3ZM14 28l-5-5m9 12-9-1m91 64 6 4" />
      </>}
      {platform === "YouTube" && <>
        <path d="M20 36q39-6 79-1 7 1 8 12l-1 29q-1 11-10 12-35 4-75 0-9-1-9-12l1-28q0-10 7-12Z" />
        <path d="m50 45 25 16-26 15ZM21 40q39-5 76-1M18 71l1 8m6-8 1 10m6-7 1 7m7-5v6M92 23l4-8m4 13 9-4M15 96l-6 5" />
      </>}
      {platform === "Steam" && <>
        <path d="M70 20q21-5 28 14 6 19-13 27-20 8-29-10-9-21 14-31Z" />
        <path d="M73 29q14-3 17 10 2 12-11 15-12 2-15-10-2-12 9-15ZM29 67q15-7 23 7 7 16-8 23-16 5-22-9-5-14 7-21Z" />
        <path d="m48 71 13-20m-6 34 23-23M17 69l20 11q8 4 5 9-2 3-7 1L12 80m64-55q15-2 19 10m-64 58q9 6 17-2M96 83l9 3m-12 3 4 6" />
      </>}
      {platform === "Email" && <>
        <path d="M19 31q43-5 81-1l-1 58q-39 4-81 0Z" />
        <path d="m21 35 37 29q3 2 6-1l34-30M20 85l27-27m23 1 27 25M24 30l69-3m-69 65 66 1M10 24l-4-5m10-1-1-7m87 86 6 4" />
      </>}
    </svg>
  );
}
