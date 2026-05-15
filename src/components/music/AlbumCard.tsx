import Link from "next/link";
import type { Album } from "@/data/albums";
import { TrackList } from "./TrackList";
import { StreamingLinks } from "./StreamingLinks";

export function AlbumCard({ album }: { album: Album }) {
  return (
    <div className="bg-surface rounded-lg border border-surface overflow-hidden">
      <div className="grid md:grid-cols-[300px_1fr] gap-0">
        {/* Album cover */}
        <div className="aspect-[1/1] bg-background overflow-hidden">
          {album.coverImage ? (
            <img
              src={album.coverImage}
              alt={album.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-serif text-accent-dim">
                {album.title[0]}
              </span>
            </div>
          )}
        </div>

        {/* Album info */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {album.title}
              </h3>
              <p className="text-xs text-muted mt-1 uppercase tracking-widest">
                {album.status === "released"
                  ? `${album.year} · 全长专辑`
                  : "全长专辑 · 制作中"}
              </p>
            </div>
            {album.status === "upcoming" && (
              <span className="text-[10px] uppercase tracking-widest bg-accent-dim/20 text-accent px-3 py-1 rounded-full shrink-0 ml-4">
                制作中
              </span>
            )}
          </div>

          <p className="text-sm text-muted leading-relaxed mb-4 whitespace-pre-line">
            {album.description}
          </p>

          {/* Credits */}
          {album.credits && (
            <div className="text-xs text-muted mb-4 space-y-0.5">
              <p>作曲：{album.credits.composer}</p>
              <p>作词：{album.credits.lyricist}</p>
              <p>编曲：{album.credits.arranger}</p>
              <p>版权：{album.credits.copyright}</p>
            </div>
          )}

          {/* Streaming links */}
          {album.links && (
            <div className="mb-6">
              <StreamingLinks links={album.links} />
            </div>
          )}

          {/* Track list */}
          <TrackList tracks={album.tracks} />

          {/* Link to album detail */}
          <Link
            href={`/music/${album.id}`}
            className="mt-6 text-xs text-accent hover:text-accent-dim transition-colors inline-flex items-center gap-1"
          >
            {album.status === "released" ? "创作记 & 更多详情" : "创作笔记 & 歌词"} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
