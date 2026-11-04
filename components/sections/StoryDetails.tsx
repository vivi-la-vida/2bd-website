"use client";
import { useState } from "react";
export default function StoryDetails() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p id="expanded-story" className="expanded-story" hidden={!expanded}>
        On your eighteenth birthday, your brother&apos;s postcards inspire a
        journey to the places he loved and those he never reached. Your parents
        fear reopening old wounds; you fear losing his memory. In the In-Between,
        each chapter follows an emotion, from joy to grief. Through atmosphere,
        sound, and small interactions, memories reveal what words could not,
        leaving room for you to find your own meaning—and a way back to life.
      </p>
      <button
        type="button"
        className="text-link"
        aria-expanded={expanded}
        aria-controls="expanded-story"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "A little less" : "A little more about our story"}
        <span aria-hidden="true">{expanded ? "−" : "→"}</span>
      </button>
    </>
  );
}
