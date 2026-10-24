"use client";
import { motion, useReducedMotion } from "motion/react";
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? { opacity: 1 } : { opacity: [0.7, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
