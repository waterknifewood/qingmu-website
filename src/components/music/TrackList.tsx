"use client";

import { useState } from "react";
import type { Track, AlbumLinks } from "@/data/albums";
import { StreamingLinks } from "./StreamingLinks";
import { lyrics } from "@/data/lyrics";

type TrackListMode = "static" | "anchor" | "expand";

export function TrackList({
  tracks,
  mode = "static",
  links,
}: {
  tracks: Track[];
  mode?: TrackListMode;
  links?: AlbumLinks;
}) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const handleClick = (track: Track) => {
    setExpandedSlug(expandedSlug === track.slug ? null : track.slug ?? null);
  };

  return (
    <div className="space-y-px">
      {tracks.map((track) => {
        const isExpandable = mode === "expand";
        const isExpanded = isExpandable && expandedSlug === track.slug;
        const isAnchor = mode === "anchor" && track.slug;

        const row = (
          <div className="flex items-center gap-4 py-1.5 px-2 text-sm">
            <span className="text-muted w-6 text-right tabular-nums text-xs">
              {String(track.number).padStart(2, "0")}
            </span>
            <span className="text-foreground">{track.title}</span>
          </div>
        );

        if (isAnchor) {
          return (
            <a
              key={track.number}
              href={`#track-${track.slug}`}
              className="block hover:bg-background transition-colors rounded"
            >
              {row}
            </a>
          );
        }

        if (isExpandable) {
          const trackLyrics = track.slug ? lyrics[track.slug] : undefined;

          return (
            <div key={track.number}>
              <button
                type="button"
                className="w-full text-left hover:bg-background transition-colors rounded cursor-pointer"
                onClick={() => handleClick(track)}
                aria-expanded={isExpanded}
              >
                {row}
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-b border-surface">
                  {trackLyrics ? (
                    <pre className="text-xs text-muted font-sans whitespace-pre-line leading-relaxed mb-3">
                      {trackLyrics}
                    </pre>
                  ) : (
                    <p className="text-xs text-muted mb-3">纯器乐作品</p>
                  )}
                  {links && <StreamingLinks links={links} />}
                </div>
              )}
            </div>
          );
        }

        return (
          <div
            key={track.number}
            className="hover:bg-background transition-colors rounded"
          >
            {row}
          </div>
        );
      })}
    </div>
  );
}
