import type { Track } from "@/data/albums";

export function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <div className="space-y-px">
      {tracks.map((track) => (
        <div
          key={track.number}
          className="flex items-center gap-4 py-1.5 px-2 text-sm hover:bg-background transition-colors rounded"
        >
          <span className="text-muted w-6 text-right tabular-nums text-xs">
            {String(track.number).padStart(2, "0")}
          </span>
          <span className="text-foreground">{track.title}</span>
        </div>
      ))}
    </div>
  );
}
