"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { members, teamIsSample } from "@/data/team";
import TeamProfileCard from "./TeamProfileCard";
import TeamThumbnail from "./TeamThumbnail";

export default function TeamGallery() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();
  const touch = useRef<{ x: number; y: number } | null>(null);
  const member = members[selected];
  const select = (index: number, step: number) => {
    setDirection(step);
    setSelected((index + members.length) % members.length);
  };
  const move = (step: number) => {
    setDirection(step);
    setSelected(
      (current) => (current + step + members.length) % members.length,
    );
  };
  const transition = {
    initial: { opacity: reduced ? 1 : 0.2, x: reduced ? 0 : direction * 8 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: reduced ? 1 : 0, x: reduced ? 0 : direction * -8 },
    transition: { duration: reduced ? 0 : 0.2 },
  };

  return (
    <div
      className="team-gallery content-width"
      role="region"
      aria-label="Interactive team gallery"
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
        if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          select(event.key === "Home" ? 0 : members.length - 1, 1);
        }
      }}
    >
      <div className="gallery-feature">
        <div
          className="gallery-portrait-stage"
          tabIndex={0}
          aria-label="Featured portrait. Use left and right arrow keys to change team members."
          onTouchStart={(event) => {
            touch.current =
              event.touches.length === 1
                ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
                : null;
          }}
          onTouchEnd={(event) => {
            if (!touch.current) return;
            const dx = event.changedTouches[0].clientX - touch.current.x;
            const dy = event.changedTouches[0].clientY - touch.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3)
              move(dx < 0 ? 1 : -1);
            touch.current = null;
          }}
          onTouchCancel={() => {
            touch.current = null;
          }}
        >
          <div className="gallery-portrait-stack">
            <AnimatePresence initial={false} mode="wait">
              <motion.figure
                key={member.id}
                className="gallery-portrait"
                {...transition}
              >
                <Image
                  src={member.photo}
                  alt={`${teamIsSample ? "Sample portrait of" : "Portrait of"} ${member.name}`}
                  width={720}
                  height={850}
                  sizes="(max-width: 640px) 280px, (max-width: 1000px) 35vw, 410px"
                  draggable={false}
                />
                <figcaption>
                  <span className="portrait-caption-label">
                    THE PEOPLE OF 2BD
                  </span>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <button
            type="button"
            className="gallery-arrow gallery-prev"
            onClick={() => move(-1)}
            aria-label="Previous team member"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-next"
            onClick={() => move(1)}
            aria-label="Next team member"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="gallery-feature-footer">
          <span className="gallery-count">
            {String(selected + 1).padStart(2, "0")}{" "}
            <span>/ {String(members.length).padStart(2, "0")}</span>
          </span>
          <span>A FEW DIFFERENT PERSPECTIVES</span>
          <span className="gallery-watermark" aria-hidden="true">
            ✧
          </span>
        </div>
      </div>
      <div className="gallery-information">
        <div className="gallery-bio-panel">
          <span className="eyebrow gallery-chapter">
            ONE SHARED ADVENTURE · MEET THE TEAM
          </span>
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={member.id} {...transition}>
              <TeamProfileCard member={member} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="gallery-selection">
          <div className="gallery-selection-heading">
            <span>FIND A FAMILIAR FACE</span>
            <span>SELECT TO EXPLORE</span>
          </div>
          <div
            className="gallery-thumbnails"
            role="group"
            aria-label={`Choose one of ${members.length} team members`}
          >
            {members.map((person, index) => (
              <TeamThumbnail
                key={person.id}
                member={person}
                selected={selected === index}
                onSelect={() => select(index, index < selected ? -1 : 1)}
              />
            ))}
          </div>
          {teamIsSample && (
            <p className="gallery-placeholder-note">
              Sample profiles, portraits & links · Our real team is coming soon.
            </p>
          )}
        </div>
      </div>
      <span className="sr-only" role="status" aria-atomic="true">
        {member.name}, {member.role}. Team member {selected + 1} of{" "}
        {members.length}.
      </span>
    </div>
  );
}
