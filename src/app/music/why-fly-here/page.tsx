import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackList } from "@/components/music/TrackList";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "为何飞来",
  description: "青木乐队首张全长专辑《为何飞来》— 专辑详情",
};

export default function WhyFlyHerePage() {
  const album = albums.find((a) => a.id === "why-fly-here")!;

  return (
    <Container className="py-24">
      {/* Album header */}
      <div className="bg-surface rounded-lg border border-surface overflow-hidden mb-16">
        <div className="grid md:grid-cols-[300px_1fr] gap-0">
          <div className="aspect-[1/1] bg-background overflow-hidden">
            <img
              src={album.coverImage}
              alt={album.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  {album.title}
                </h2>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">
                  {album.year} · 全长专辑
                </p>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-4 whitespace-pre-line">
              {album.description}
            </p>

            {album.credits && (
              <div className="text-xs text-muted mb-4 space-y-0.5">
                <p>作曲：{album.credits.composer}</p>
                <p>作词：{album.credits.lyricist}</p>
                <p>编曲：{album.credits.arranger}</p>
                <p>版权：{album.credits.copyright}</p>
              </div>
            )}

            {album.links && (
              <div className="flex gap-3 mb-6">
                {album.links.netease && (
                  <a
                    href={album.links.netease}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-[#c62f2f]/20 hover:bg-[#c62f2f]/30 text-[#c62f2f] hover:text-red-400 px-3 py-1.5 rounded-full transition-colors"
                  >
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
                    QQ 音乐
                  </a>
                )}
              </div>
            )}

            <TrackList tracks={album.tracks} />

            <Link
              href="/records"
              className="mt-6 text-xs text-accent hover:text-accent-dim transition-colors inline-flex items-center gap-1"
            >
              创作记 & 发刊词 &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <Link
          href="/music"
          className="text-xs text-accent hover:text-accent-dim transition-colors"
        >
          &larr; 返回音乐
        </Link>
      </div>
    </Container>
  );
}
