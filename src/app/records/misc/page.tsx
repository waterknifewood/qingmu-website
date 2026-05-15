import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { year_summary, debut_postscript, misc_thoughts } from "@/data/records";

export const metadata: Metadata = {
  title: "碎碎念",
  description: "青木乐队碎碎念 — 年终总结、首演后记与杂感",
};

const ENTRIES = [year_summary, debut_postscript, misc_thoughts];

export default function MiscPage() {
  return (
    <Container className="py-24">
      <Link
        href="/records"
        className="text-xs text-accent hover:text-accent-dim transition-colors mb-8 inline-block"
      >
        &larr; 返回记录
      </Link>

      <h1 className="text-2xl font-serif font-bold text-accent mb-2">
        碎碎念
      </h1>
      <p className="text-xs text-muted uppercase tracking-widest mb-12">
        年终总结 · 首演后记 · 杂感
      </p>

      <div className="max-w-2xl">
        {ENTRIES.map((entry, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-lg font-serif font-bold text-accent mb-6">
              {entry.title}
            </h2>
            {entry.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-muted leading-loose mb-5"
              >
                {para}
              </p>
            ))}
            {idx < ENTRIES.length - 1 && (
              <div className="mt-12 border-t border-surface" />
            )}
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
