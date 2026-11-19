import type { CSSProperties, ReactNode } from "react";
import "./stamp.css";

type CssLength = number | string;
type StampRootStyle = CSSProperties & Partial<Record<"--stamp-ink" | "--stamp-padding" | "--stamp-paper", string>>;
export type StampProps = {
  children: ReactNode;
  as?: "span";
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  className?: string;
  contentClassName?: string;
  horizontalPerforations?: number;
  ink?: string;
  padding?: CssLength;
  paper?: string;
  perforationDepth?: number;
  stampClassName?: string;
  style?: CSSProperties;
  verticalPerforations?: number;
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function createStampClipPath(depth: number, horizontalCount: number, verticalCount: number) {
  const d = clamp(depth, 0, 10);
  const h = clamp(Math.round(horizontalCount), 4, 32);
  const v = clamp(Math.round(verticalCount), 4, 40);
  const points: Array<[number, number]> = [[0, 0]];
  for (let i = 0; i < h; i++) {
    const start = i * 100 / h, step = 100 / h;
    points.push([start + step * .25, 0], [start + step * .5, d], [start + step * .75, 0], [start + step, 0]);
  }
  for (let i = 0; i < v; i++) {
    const start = i * 100 / v, step = 100 / v;
    points.push([100, start + step * .25], [100 - d, start + step * .5], [100, start + step * .75], [100, start + step]);
  }
  for (let i = 0; i < h; i++) {
    const start = 100 - i * 100 / h, step = 100 / h;
    points.push([start - step * .25, 100], [start - step * .5, 100 - d], [start - step * .75, 100], [start - step, 100]);
  }
  for (let i = 0; i < v; i++) {
    const start = 100 - i * 100 / v, step = 100 / v;
    points.push([0, start - step * .25], [d, start - step * .5], [0, start - step * .75], [0, start - step]);
  }
  return `polygon(${points.map(([x, y]) => `${x.toFixed(3)}% ${y.toFixed(3)}%`).join(", ")})`;
}

export function Stamp({ children, as, "aria-hidden": ariaHidden, "aria-label": ariaLabel, className = "", contentClassName = "", horizontalPerforations = 12, ink = "#181713", padding = 13, paper = "#ffffff", perforationDepth = 2.4, stampClassName = "", style, verticalPerforations = 15 }: StampProps) {
  const Container = as ?? "div";
  const Paper = as ?? "article";
  const rootStyle: StampRootStyle = {
    "--stamp-ink": ink,
    "--stamp-padding": typeof padding === "number" ? `${padding}px` : padding,
    "--stamp-paper": paper,
    filter: "drop-shadow(0 1px 1px rgb(15 15 15 / 12%)) drop-shadow(0 12px 22px rgb(15 15 15 / 9%))",
    ...style,
  };
  return (
    <Container className={`paper-stamp-root ${className}`} style={rootStyle}>
      <Paper aria-hidden={ariaHidden} aria-label={ariaHidden ? undefined : ariaLabel} className={`paper-stamp-paper ${stampClassName}`} style={{ background: "linear-gradient(145deg, rgb(255 255 255 / 34%), transparent 42%), var(--stamp-paper)", clipPath: createStampClipPath(perforationDepth, horizontalPerforations, verticalPerforations) }}>
        <Container className={`paper-stamp-content ${contentClassName}`}>{children}</Container>
      </Paper>
    </Container>
  );
}
