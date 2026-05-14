import Link from "next/link";
import type { Album } from "@/data/albums";
import { TrackList } from "./TrackList";

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
            <div className="flex gap-3 mb-6">
              {album.links.netease && (
                <a
                  href={album.links.netease}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-[#c62f2f]/20 hover:bg-[#c62f2f]/30 text-[#c62f2f] hover:text-red-400 px-3 py-1.5 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6.5v-5l5 2.5-5 2.5z"/>
                  </svg>
                  网易云音乐
                </a>
              )}
              {album.links.qq && (
                <a
                  href={album.links.qq}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-[#31c27c]/20 hover:bg-[#31c27c]/30 text-[#31c27c] hover:text-green-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6.5v-5l5 2.5-5 2.5z"/>
                  </svg>
                  QQ 音乐
                </a>
              )}
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
