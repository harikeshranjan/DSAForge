import Features from "@/components/features";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="max-w-[85rem] mx-auto mt-12">
      <HeroSection />
      <Features />
    </div>
  );
}
