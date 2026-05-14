import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AlbumCard } from "@/components/music/AlbumCard";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "音乐",
  description: "青木乐队音乐作品 — 《为何飞来》全长专辑 & 《红拂夜奔》制作中",
};

export default function MusicPage() {
  return (
    <Container className="py-24">
      <SectionHeading>音乐</SectionHeading>
      <div className="space-y-8">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </Container>
  );
}
