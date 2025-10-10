import { HeroSection, AboutSection, ProductsSection, GovernanceSection, IndustriesSection, BlogSection, VisionSection } from './pages/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GovernanceSection />
      <IndustriesSection />
      <BlogSection />
      <VisionSection />


    </div>
  );
}
