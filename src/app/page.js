import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import Diagram from '@/components/sections/Diagram';
import CardContainer from '@/components/sections/FourCardsSection';
import FeatureSection from '@/components/sections/FeatureSection';
import ELNHero from '@/components/sections/ELNHero';
import DemoSection from '@/components/sections/DemoSection';
import DeviceSection from '@/components/sections/DeviceSection';
import GetStartedSection from '@/components/sections/GetStartedSection';
import LabimotionHero from '@/components/sections/LabimotionHero';
import LabimotionSection from '@/components/sections/LabimotionSection';
import RepositoryHero from '@/components/sections/RepositoryHero';
import RepositorySection from '@/components/sections/RepositorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-20">
        <Hero />
        <Diagram />
        <ELNHero />
        <CardContainer />
        <DeviceSection />
        <FeatureSection />
        <DemoSection />
        <GetStartedSection />
        <LabimotionHero />
        <LabimotionSection />
        <RepositoryHero />
        <RepositorySection />
      </main>
      <Footer />
    </div>
  );
}
