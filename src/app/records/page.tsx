import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "记录",
  description: "青木乐队文字记录 — 创作记、随笔与碎碎念",
};

const COLUMNS = [
  {
    title: "发刊词",
    subtitle: "渡越关山 为何飞来",
    href: "/records/release-note",
    excerpt:
      "这张专辑做完了，像是一场漫长的旅程画上了句号。有些情绪一直萦绕在心底，每次想落笔写些什么纪念那些时刻的时候，它们会一遍又一遍地被翻起……",
  },
  {
    title: "专辑创作过程",
    subtitle: "飞出重山的断肠诗",
    href: "/records/creative-process",
    excerpt:
      "从一只死在窗台的青雀，到隆隆的鼓声踏浪而来。十首歌，十个故事。从死雀中诞生，在钟声里咆哮，渡越关山，终见潮信。",
  },
  {
    title: "碎碎念",
    subtitle: "年终总结 · 首演后记 · 杂感",
    href: "/records/misc",
    excerpt:
      "演出结束后如梦方醒，烟火散尽，仍然身处长夜。21世纪的春天过去了，我应该有很多话要说……",
  },
];

export default function RecordsPage() {
  return (
    <Container className="py-24">
      <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-2">
        记录
      </h2>
      <p className="text-sm text-muted text-center mb-20 max-w-xl mx-auto leading-loose">
        史家无曲笔。一些关于创作、演出和生活的碎碎念。记录本身就是意义。
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {COLUMNS.map((col) => (
          <Link
            key={col.href}
            href={col.href}
            className="group bg-surface rounded-lg border border-surface p-6 hover:border-accent-dim/30 transition-colors flex flex-col"
          >
            <h3 className="text-lg font-serif font-bold text-accent mb-1 group-hover:text-accent-dim transition-colors">
              {col.title}
            </h3>
            <p className="text-[10px] text-muted uppercase tracking-widest mb-4">
              {col.subtitle}
            </p>
            <p className="text-sm text-muted leading-relaxed flex-1">
              {col.excerpt}
            </p>
            <span className="text-xs text-accent mt-4 inline-block group-hover:translate-x-1 transition-transform">
              阅读 &rarr;
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
