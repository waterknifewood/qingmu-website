import { HeroSection } from "@/components/home/HeroSection";
import { LatestRelease } from "@/components/home/LatestRelease";
import { FeaturedPhoto } from "@/components/home/FeaturedPhoto";
import { HomeExtras } from "@/components/home/HomeExtras";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LatestRelease />
      <FeaturedPhoto />
      <HomeExtras />
    </>
  );
}
