import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedPhoto() {
  return (
    <Container className="py-24">
      <SectionHeading>专辑</SectionHeading>

      <Link
        href="/music/why-fly-here"
        className="group relative block rounded-lg overflow-hidden bg-surface aspect-[16/9] md:aspect-[21/9]"
      >
        <img
          src="/images/album-cover.jpg"
          alt="《为何飞来》专辑封面"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.3em] mb-2">
                首张全长专辑
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                为何飞来
              </h3>
              <p className="text-sm text-muted mt-2 max-w-md">
                高树多悲风，海水扬其波。明明如月，何时可掇？
              </p>
            </div>
            <span className="hidden md:inline text-sm text-accent group-hover:translate-x-1 transition-transform">
              查看详情 &rarr;
            </span>
          </div>
        </div>
      </Link>
    </Container>
  );
}
