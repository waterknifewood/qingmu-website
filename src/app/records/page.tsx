import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { creativeProcessFull } from "@/data/creative-process";
import { releaseNote } from "@/data/documents";
import { year_summary, debut_postscript, misc_thoughts } from "@/data/records";

export const metadata: Metadata = {
  title: "记录",
  description: "青木乐队文字记录 — 创作记、随笔与碎碎念",
};

// 金句库，散布在创作记章节之间
const QUOTES = [
  "人生居茫茫天壤间，忽如飞鸟栖枯枝。",
  "吾本山林间人。",
  "尽西风，季鹰归未？",
  "钱塘江上潮信来，今日方知我是我。",
  "青羽白翅，手掌大小，就静静躺在那里。",
  "高树多悲风，海水扬其波。明明如月，何时可掇？",
  "我将踏足崭新的土地，直到恐惧淹没勇气。",
  "一颗扎在土里的木头，没有树叶的木头，做梦着向往着更高的宇宙。",
  "死亡是必将到来的节日，在此之前我们都需要好好享受活着的每一刻。",
  "诚惶诚恐，顿首再拜。",
];

function QuoteBlock({ text }: { text: string }) {
  return (
    <div className="flex justify-center my-20">
      <div className="relative max-w-md text-center px-8">
        <span className="absolute -top-4 left-0 text-4xl font-serif text-accent-dim/30 select-none">
          &ldquo;
        </span>
        <p className="text-base md:text-lg font-serif text-accent/70 leading-relaxed italic">
          {text}
        </p>
        <span className="absolute -bottom-8 right-0 text-4xl font-serif text-accent-dim/30 select-none">
          &rdquo;
        </span>
      </div>
    </div>
  );
}

function isSectionHeader(text: string): boolean {
  return text.length < 40 && (
    text.includes("创作记") ||
    text.includes("创作手记") ||
    text === "飞出重山的断肠诗：《为何飞来》创作记" ||
    text.includes("为何飞来》创作记（终）") ||
    text === "后记" ||
    text === "曲终一奏" ||
    text === "肖忠培：" ||
    text === "补记："
  );
}

function CreativeProcessSection() {
  const sections: { header?: string; paragraphs: string[] }[] = [];
  let currentSection: { header?: string; paragraphs: string[] } = { paragraphs: [] };

  for (const para of creativeProcessFull) {
    if (isSectionHeader(para)) {
      if (currentSection.paragraphs.length > 0 || currentSection.header) {
        sections.push(currentSection);
      }
      currentSection = { header: para, paragraphs: [] };
    } else {
      currentSection.paragraphs.push(para);
    }
  }
  if (currentSection.paragraphs.length > 0 || currentSection.header) {
    sections.push(currentSection);
  }

  return (
    <>
      {sections.map((section, i) => (
        <div key={i}>
          <div className="mb-12">
            {section.header && (
              <h3 className="text-lg font-serif font-bold text-accent mb-6">
                {section.header}
              </h3>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-sm md:text-base text-muted leading-loose mb-5">
                {p}
              </p>
            ))}
          </div>
          {/* 每两三个章节穿插一句金句 */}
          {i > 0 && i % 3 === 0 && (
            <QuoteBlock text={QUOTES[(i / 3 - 1) % QUOTES.length]} />
          )}
        </div>
      ))}
    </>
  );
}

function ProseSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="mb-20">
      <SectionHeading>{title}</SectionHeading>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm md:text-base text-muted leading-loose mb-5">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function RecordsPage() {
  return (
    <Container className="py-24">
      <SectionHeading>记录</SectionHeading>
      <p className="text-sm text-muted mb-20 -mt-4 max-w-2xl leading-loose">
        一些关于创作、演出和生活的碎碎念。记录本身就是意义。
      </p>

      <div className="max-w-2xl mx-auto">
        {/* 发刊词 */}
        <ProseSection title={releaseNote.title} paragraphs={releaseNote.content} />

        <QuoteBlock text={QUOTES[8]} />

        <div className="my-20 border-t border-surface" />

        {/* 创作记 */}
        <div className="mb-16">
          <SectionHeading>飞出重山的断肠诗——《为何飞来》创作记</SectionHeading>
          <p className="text-sm text-muted mb-12 -mt-4 leading-loose">
            专辑发布后，主创梁辰华回溯每一首歌的诞生。从一只死在窗台的青雀，到隆隆的鼓声踏浪而来——十首歌，十个故事，过程本身已足够。
          </p>
          <CreativeProcessSection />
          <div className="mt-12 border-t border-surface pt-6 text-xs text-muted text-right">
            2026.4.20
          </div>
        </div>

        <div className="my-20 border-t border-surface" />

        {/* 年终总结 */}
        <ProseSection title={year_summary.title} paragraphs={year_summary.paragraphs} />

        <QuoteBlock text={QUOTES[7]} />

        <div className="my-20 border-t border-surface" />

        {/* 首演后记 */}
        <ProseSection title={debut_postscript.title} paragraphs={debut_postscript.paragraphs} />
        <div className="-mt-12 mb-20 text-xs text-muted text-right">
          2025-08-10
        </div>

        <div className="my-20 border-t border-surface" />

        {/* 杂感 */}
        <ProseSection title={misc_thoughts.title} paragraphs={misc_thoughts.paragraphs} />
      </div>
    </Container>
  );
}
