import NavBar from '@/components/layout/NavBar';
import Hero from '@/components/home/Hero';
import Diagram from '@/components/home/Diagram';
import CardContainer from '@/components/home/FourWayCard';
import FeatureSection from '@/components/home/FeaturesCard';
import ELNHero from '@/components/home/ELNHero';
import DemoSection from '@/components/home/DemoCard';
import DeviceSection from '@/components/home/DevicesCard';
import GetStartedSection from '@/components/home/TwoWayCard';
import LabimotionHero from '@/components/home/LabimotionHero';
import LabimotionSection from '@/components/home/LabimotionCard';
import RepositoryHero from '@/components/home/RepositoryHero';
import RepositorySection from '@/components/home/RepositoryCard';
import Footer from '@/components/layout/Footer';

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
