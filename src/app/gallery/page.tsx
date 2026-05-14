import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "相册",
  description: "青木乐队照片集 — 演出、排练与日常",
};

export default function GalleryPage() {
  if (photos.length === 0) {
    return (
      <Container className="py-24 text-center">
        <SectionHeading>相册</SectionHeading>
        <p className="text-muted">照片处理中，请稍后再来。</p>
      </Container>
    );
  }

  return (
    <Container className="py-24">
      <SectionHeading>相册</SectionHeading>
      <GalleryGrid photos={photos} />
    </Container>
  );
}
