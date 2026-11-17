import type { ComponentProps } from "react";
import TactileFace from "./TactileFace";
export default function Button({
  className = "",
  variant = "lavender",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "lavender" }) {
  return <a className={`button ${variant} tactile-button ${className}`} {...props}><TactileFace>{children}</TactileFace></a>;
}
