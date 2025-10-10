import { HeroSection, AboutSection, ProductsSection, GovernanceSection, IndustriesSection, BlogSection, VisionSection } from './pages/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GovernanceSection />
        <IndustriesSection />
        <BlogSection />
        <VisionSection />
      </div>
    </div>
  );
}
