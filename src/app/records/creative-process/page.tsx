import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { creativeProcessFull } from "@/data/creative-process";

export const metadata: Metadata = {
  title: "专辑创作过程",
  description: "《为何飞来》创作记 — 十首歌，十个故事",
};

// Parse sections from the creative process text
function parseSections(): { anchor: string; title: string }[] {
  const sections: { anchor: string; title: string }[] = [];
  let counter = 0;

  for (const line of creativeProcessFull) {
    if (line.length < 40 && line.includes("创作记")) {
      counter++;
      const slug = line
        .replace(/[《》：《》"".。，、（）()\s]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase()
        .slice(0, 30);
      sections.push({ anchor: `section-${counter}`, title: line });
    }
  }

  return sections;
}

// Split paragraphs into sections based on headers
function getSectionedContent(): {
  sections: { anchor: string; title: string; paragraphs: string[] }[];
} {
  const result: { anchor: string; title: string; paragraphs: string[] }[] = [];
  let current: { anchor: string; title: string; paragraphs: string[] } | null =
    null;
  let counter = 0;

  // First paragraph is the main title
  let started = false;

  for (const line of creativeProcessFull) {
    if (line.length < 40 && line.includes("创作记")) {
      counter++;
      if (current) result.push(current);
      current = {
        anchor: `section-${counter}`,
        title: line,
        paragraphs: [],
      };
      started = true;
    } else if (started && current) {
      current.paragraphs.push(line);
    }
  }

  if (current) result.push(current);

  return { sections: result };
}

export default function CreativeProcessPage() {
  const { sections } = getSectionedContent();

  return (
    <Container className="py-24">
      <Link
        href="/records"
        className="text-xs text-accent hover:text-accent-dim transition-colors mb-8 inline-block"
      >
        &larr; 返回记录
      </Link>

      <h1 className="text-2xl font-serif font-bold text-accent mb-2">
        飞出重山的断肠诗
      </h1>
      <p className="text-xs text-muted uppercase tracking-widest mb-12">
        《为何飞来》创作记
      </p>

      {/* Table of contents */}
      <div className="bg-surface rounded-lg border border-surface p-6 mb-16 max-w-xl">
        <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
          目录
        </h2>
        <ol className="space-y-2">
          {sections.map((section) => (
            <li key={section.anchor} className="flex gap-3 text-sm">
              <span className="text-accent-dim tabular-nums shrink-0">
                {String(sections.indexOf(section) + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${section.anchor}`}
                className="text-muted hover:text-accent transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Full content */}
      <div className="max-w-2xl">
        {sections.map((section) => (
          <div key={section.anchor} id={section.anchor} className="mb-16">
            <h3 className="text-lg font-serif font-bold text-accent mb-6">
              {section.title}
            </h3>
            {section.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-muted leading-loose mb-5"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-surface pt-8">
        <Link
          href="/records"
          className="text-xs text-accent hover:text-accent-dim transition-colors"
        >
          &larr; 返回记录
        </Link>
      </div>
    </Container>
  );
}
