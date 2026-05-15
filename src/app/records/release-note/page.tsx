import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { releaseNote } from "@/data/documents";

export const metadata: Metadata = {
  title: "发刊词 · 渡越关山",
  description: "青木乐队专辑《为何飞来》发刊词",
};

export default function ReleaseNotePage() {
  return (
    <Container className="py-24">
      <Link
        href="/records"
        className="text-xs text-accent hover:text-accent-dim transition-colors mb-8 inline-block"
      >
        &larr; 返回记录
      </Link>

      <h1 className="text-2xl font-serif font-bold text-accent mb-2">
        渡越关山 为何飞来
      </h1>
      <p className="text-xs text-muted uppercase tracking-widest mb-12">
        发刊词
      </p>

      <div className="max-w-2xl">
        {releaseNote.content.map((para, i) => (
          <p key={i} className="text-sm md:text-base text-muted leading-loose mb-5">
            {para}
          </p>
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
