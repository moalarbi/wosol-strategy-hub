import { HomeHero } from "@/components/HomeHero";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { ChapterGrid } from "@/components/ChapterGrid";
import { ManifestoBlock } from "@/components/ManifestoBlock";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExecutiveSummary />
      <ChapterGrid />
      <ManifestoBlock />
    </>
  );
}
