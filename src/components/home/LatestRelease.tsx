import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { albums } from "@/data/albums";

export function LatestRelease() {
  return (
    <Container className="py-24">
      <SectionHeading>音乐作品</SectionHeading>

      <div className="grid md:grid-cols-2 gap-8">
        {albums.map((album) => (
          <Link
            key={album.id}
            href={`/music/${album.id}`}
            className="group block bg-surface rounded-lg border border-surface hover:border-accent-dim transition-all duration-300 overflow-hidden"
          >
            {/* Album cover */}
            {album.coverImage ? (
              <div className="aspect-[1/1] overflow-hidden bg-background">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              <div className="aspect-[1/1] bg-background flex items-center justify-center">
                <span className="text-4xl font-serif text-accent-dim">
                  {album.title[0]}
                </span>
              </div>
            )}

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-xs text-muted mt-1 uppercase tracking-widest">
                    {album.status === "released"
                      ? `${album.year} · 已发布`
                      : "制作中"}
                  </p>
                </div>
                {album.status === "upcoming" && (
                  <span className="text-[10px] uppercase tracking-widest bg-accent-dim/20 text-accent px-2 py-1 rounded">
                    创作中
                  </span>
                )}
              </div>
              <p className="text-sm text-muted leading-relaxed line-clamp-3 whitespace-pre-line">
                {album.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {album.tracks.slice(0, 6).map((t) => (
                  <span
                    key={t.number}
                    className="text-[10px] text-muted bg-background px-2 py-0.5 rounded"
                  >
                    {t.title}
                  </span>
                ))}
                {album.tracks.length > 6 && (
                  <span className="text-[10px] text-accent-dim bg-background px-2 py-0.5 rounded">
                    +{album.tracks.length - 6}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
