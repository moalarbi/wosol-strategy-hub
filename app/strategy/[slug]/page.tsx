import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StrategyPageLayout } from "@/components/StrategyPageLayout";
import { STRATEGIES, getStrategyBySlug, getAdjacent } from "@/lib/strategies";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return STRATEGIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getStrategyBySlug(params.slug);
  if (!s) return { title: "WOSOL · Strategy" };
  return {
    title: `${s.number} · ${s.title.en} — WOSOL × Kingdom Centre`,
    description: s.subtitle.en
  };
}

export default function StrategyChapterPage({ params }: Props) {
  const strategy = getStrategyBySlug(params.slug);
  if (!strategy) notFound();
  const { prev, next } = getAdjacent(params.slug);
  return <StrategyPageLayout strategy={strategy} prev={prev} next={next} />;
}
