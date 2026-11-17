"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { members, teamBiosAreDraft } from "@/data/team";
import TeamProfileCard from "./TeamProfileCard";
import TeamThumbnail from "./TeamThumbnail";
import TactileFace from "@/components/ui/TactileFace";

export default function TeamGallery() {
  const [{ selected, direction, leaving }, setDeck] = useState({
    selected: 0, direction: 1, leaving: -1,
  });
  const reduced = useReducedMotion();
  const touch = useRef<{ x: number; y: number } | null>(null);
  const member = members[selected];
  const select = (index: number, step: number) => {
    setDeck((current) => {
      const next = (index + members.length) % members.length;
      return next === current.selected ? current : {
        selected: next, direction: step, leaving: current.selected,
      };
    });
  };
  const move = (step: number) => {
    setDeck((current) => ({
      selected: (current.selected + step + members.length) % members.length,
      direction: step, leaving: current.selected,
    }));
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
          <div className="gallery-portrait-stack gallery-shuffle-stack">
            {members.map((person, index) => {
              const active = index === selected;
              const outgoing = index === leaving;
              return (
              <motion.figure
                key={person.id}
                className="gallery-portrait"
                aria-hidden={!active}
                initial={false}
                animate={reduced ? {
                  opacity: active ? 1 : 0, x: "0%", y: 0, rotate: 0, scale: 1, zIndex: active ? 3 : 0,
                } : outgoing ? {
                  x: [null, `${direction * 55}%`, "0%"],
                  y: [null, -12, 8], rotate: [null, direction * 10, -5],
                  scale: [null, 1.01, .94], zIndex: [4, 4, 0], opacity: 1,
                } : {
                  x: "0%", y: active ? 0 : 8, rotate: active ? 0 : -5,
                  scale: active ? 1 : .94, zIndex: active ? 3 : 0,
                  opacity: active ? 1 : 0,
                }}
                transition={reduced ? { duration: .15 } : outgoing ? {
                  duration: .5, times: [0, .45, 1], ease: "easeInOut",
                  opacity: { duration: 0 },
                } : {
                  duration: .3, ease: "easeOut",
                  opacity: { duration: 0 }, zIndex: { duration: 0 },
                }}
              >
                <Image
                  src={person.photo}
                  style={{ objectPosition: person.photoPosition }}
                  alt={active ? `Portrait of ${person.name}` : ""}
                  width={720}
                  height={850}
                  sizes="(max-width: 640px) 280px, (max-width: 1000px) 35vw, 410px"
                  draggable={false}
                  loading="eager"
                />
                <figcaption>
                  <strong>{person.name}</strong>
                  {/* <span>{person.role}</span> */}
                </figcaption>
              </motion.figure>
              );
            })}
          </div>
          <button
            type="button"
            className="gallery-arrow gallery-prev tactile-button"
            onClick={() => move(-1)}
            aria-label="Previous team member"
          >
            <TactileFace><ArrowLeft size={18} /></TactileFace>
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-next tactile-button"
            onClick={() => move(1)}
            aria-label="Next team member"
          >
            <TactileFace><ArrowRight size={18} /></TactileFace>
          </button>
        </div>
        <div className="gallery-feature-footer">
          <span className="gallery-count">
            {String(selected + 1).padStart(2, "0")}{" "}
            <span>/ {String(members.length).padStart(2, "0")}</span>
          </span>
          <span className="gallery-watermark" aria-hidden="true">
            ✧
          </span>
        </div>
      </div>
      <div className="gallery-information">
        <div className="gallery-bio-panel">
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={member.id} {...transition}>
              <TeamProfileCard member={member} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="gallery-selection">
          <div className="gallery-selection-heading">
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
          {teamBiosAreDraft && (
            <p className="gallery-placeholder-note">
              Biographies are draft copy · More about our team soon.
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
