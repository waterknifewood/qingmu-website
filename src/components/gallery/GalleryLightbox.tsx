"use client";

import { useEffect, useCallback } from "react";
import { type Photo } from "@/data/photos";

interface GalleryLightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const photo = photos[index];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors text-2xl z-10 px-2"
        aria-label="Close"
      >
        &#x2715;
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-xs text-muted uppercase tracking-widest">
        {index + 1} / {photos.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-6 text-muted hover:text-foreground transition-colors text-3xl px-4 py-2 z-10"
        aria-label="Previous"
      >
        &#x276E;
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`/photos/gallery/display/${photo.filename}.webp`}
          alt={photo.alt || `乐队照片`}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-6 text-muted hover:text-foreground transition-colors text-3xl px-4 py-2 z-10"
        aria-label="Next"
      >
        &#x276F;
      </button>
    </div>
  );
}
