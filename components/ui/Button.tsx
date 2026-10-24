import type { ComponentProps } from "react";
export default function Button({
  className = "",
  variant = "lavender",
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "lavender" }) {
  return <a className={`button ${variant} ${className}`} {...props} />;
}
