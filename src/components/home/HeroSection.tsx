import { bandBio } from "@/data/band";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/band-photo.jpg"
          alt="青木乐队"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 py-24">
        {/* 青木 logo images stacked */}
        <div className="flex justify-center gap-2 md:gap-4 mb-4">
          <img
            src="/images/qing.png"
            alt="青"
            className="h-32 md:h-48 w-auto object-contain"
            style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(13%) saturate(460%) hue-rotate(338deg) brightness(96%) contrast(89%)" }}
          />
          <img
            src="/images/mu.png"
            alt="木"
            className="h-40 md:h-60 w-auto object-contain -translate-y-[8%]"
            style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(13%) saturate(460%) hue-rotate(338deg) brightness(96%) contrast(89%)" }}
          />
        </div>

        <p className="text-accent/60 text-xs md:text-sm uppercase tracking-[0.3em] mb-8">
          Qingmu Band
        </p>

        <p className="text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed font-serif mt-8">
          {bandBio.tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-accent-dim to-transparent animate-pulse" />
      </div>
    </section>
  );
}
