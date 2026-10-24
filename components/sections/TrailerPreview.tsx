"use client";
import Image from "next/image";
import { useRef } from "react";
import { Play, X } from "lucide-react";
import trailer from "@/public/images/trailer.png";
export default function TrailerPreview() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="trailer-preview"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
        aria-label="Open game artwork preview"
      >
        <Image
          src={trailer}
          alt="A young wanderer facing a magical island and ancient tree"
          fill
          sizes="(max-width: 640px) 86vw, 620px"
        />
        <span className="play-button">
          <Play size={28} strokeWidth={1} />
        </span>
        <span className="trailer-caption">
          A GLIMPSE OF THE IN BETWEEN <span>WATCH PREVIEW ↗</span>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="preview-modal"
        aria-labelledby="preview-title"
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="modal-close"
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Close preview"
        >
          <X size={22} />
        </button>
        <Image
          src={trailer}
          alt="To Be Seen concept artwork"
          sizes="(max-width: 700px) 90vw, 660px"
        />
        <div>
          <span className="eyebrow">A GLIMPSE OF WHAT&apos;S TO COME</span>
          <h2 id="preview-title">Your journey is on the horizon.</h2>
          <p>
            Our trailer is still in the making. Until then, take a little look
            at the world of To Be Seen.
          </p>
          <button
            type="button"
            className="button lavender"
            onClick={() => dialog.current?.close()}
          >
            Back to exploring →
          </button>
        </div>
      </dialog>
    </>
  );
}
