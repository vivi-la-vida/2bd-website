import type { ReactNode } from "react";

/** Shared raised face; the parent retains its native link or button semantics. */
export default function TactileFace({ children }: { children: ReactNode }) {
  return <><span className="tactile-base" aria-hidden="true" /><span className="tactile-face">{children}</span></>;
}
