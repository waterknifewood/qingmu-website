import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bandBio } from "@/data/band";

export const metadata: Metadata = {
  title: "关于",
  description: "青木乐队简介 — 一颗扎在土里的木头",
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <SectionHeading>关于青木</SectionHeading>

      {/* Bio */}
      <div className="max-w-2xl mb-16">
        {bandBio.description.split("\n").map((paragraph, i) => (
          <p
            key={i}
            className="text-sm md:text-base text-muted leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Members */}
      <SectionHeading className="!text-xl !mb-6">成员</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {bandBio.members.map((member) => (
          <div
            key={member.name}
            className="bg-surface rounded-lg p-5 border border-surface text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent-dim/20 mx-auto mb-3 flex items-center justify-center text-accent text-xl font-serif">
              {member.name[0]}
            </div>
            <h4 className="text-sm font-medium text-foreground">
              {member.name}
            </h4>
            <p className="text-xs text-accent mt-1">{member.role}</p>
            <p className="text-[10px] text-muted mt-1 leading-tight">
              {member.instruments}
            </p>
          </div>
        ))}
      </div>

      {/* Performance Timeline */}
      <SectionHeading className="!text-xl !mb-6">演出</SectionHeading>
      <div className="max-w-lg">
        {bandBio.performances.map((p, i) => (
          <div key={i} className="relative pl-8 pb-6 last:pb-0">
            {i < bandBio.performances.length - 1 && (
              <div className="absolute left-[7px] top-3 bottom-0 w-px bg-surface" />
            )}
            <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent-dim bg-background" />
            <time className="text-xs text-accent uppercase tracking-widest">
              {p.date}
            </time>
            <p className="text-sm text-foreground mt-0.5">{p.venue}</p>
            <p className="text-xs text-muted">{p.city}</p>
          </div>
        ))}
      </div>

      {/* Documentary */}
      <div className="mt-16 bg-surface rounded-lg p-6 border border-surface max-w-lg">
        <p className="text-xs text-accent uppercase tracking-widest mb-2">
          纪录片
        </p>
        <p className="text-sm text-muted">{bandBio.documentary}</p>
      </div>
    </Container>
  );
}
