import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const REHEARSAL_PHOTOS = [
  { src: "/images/rehearsal-1.jpg", alt: "排练照片" },
  { src: "/images/rehearsal-2.jpg", alt: "排练照片" },
  { src: "/images/rehearsal-3.jpg", alt: "排练照片" },
];

export function HomeExtras() {
  return (
    <Container className="py-24">
      <SectionHeading>更多</SectionHeading>

      {/* Thumbnails grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-20">
        {/* Video card */}
        <Link
          href="/videos"
          className="group relative aspect-[3/2] bg-surface rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-dim/20 to-background flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-xs text-accent uppercase tracking-widest">视频</span>
            </div>
          </div>
        </Link>

        {/* Photo cards */}
        {REHEARSAL_PHOTOS.map((photo, i) => (
          <Link
            key={i}
            href="/gallery"
            className="group relative aspect-[3/2] bg-surface rounded-lg overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            {i === 2 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-xs text-accent uppercase tracking-widest">
                  全部照片 &rarr;
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Quote card */}
      <Link
        href="/records"
        className="block max-w-xl mx-auto bg-surface rounded-lg border border-surface p-8 text-center hover:border-accent-dim/30 transition-colors group"
      >
        <span className="text-4xl font-serif text-accent-dim/30 select-none block leading-none mb-4">
          &ldquo;
        </span>
        <p className="text-lg font-serif text-accent/80 leading-relaxed italic mb-4">
          尽西风，季鹰归未？
        </p>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">
          创作记 · 发刊词 · 碎碎念
        </p>
        <span className="text-xs text-accent group-hover:text-accent-dim transition-colors">
          阅读更多 &rarr;
        </span>
      </Link>
    </Container>
  );
}
