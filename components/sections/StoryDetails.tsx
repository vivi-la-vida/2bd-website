"use client";
import { useState } from "react";
export default function StoryDetails() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p id="expanded-story" className="expanded-story" hidden={!expanded}>
        There are no ticking clocks here. Take your time, follow your curiosity,
        and let each island reveal a new perspective. Sometimes, understanding
        someone else is the first step toward finding yourself.
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
