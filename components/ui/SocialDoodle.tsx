export type SocialPlatform = "LinkedIn" | "Instagram" | "YouTube";

/** Hand-drawn paths, with uneven contours and a few pencil marks. */
export default function SocialDoodle({ platform }: { platform: SocialPlatform }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <path d="m103 52 2-5 2 5 5 2-5 2-2 5-2-5-5-2Z" strokeWidth="1.7" />
    </svg>
  );
}
