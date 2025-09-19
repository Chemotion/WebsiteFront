import Hero from '@/components/home/Hero';
import Diagram from '@/components/home/Diagram';
import CardContainer from '@/components/home/FourCardContainer';
import FeatureSection from '@/components/home/FeaturesCard';
import ELNHero from '@/components/home/ELNHero';
import DemoSection from '@/components/home/DemoCard';
import VideoSection from '@/components/home/VideoCard';
import DeviceSection from '@/components/home/DevicesCard';
import GetStartedSection from '@/components/home/TwoWayCard';
import LabimotionHero from '@/components/home/LabimotionHero';
import LabimotionSection from '@/components/home/LabimotionCard';
import RepositoryHero from '@/components/home/RepositoryHero';
import RepositorySection from '@/components/home/RepositoryCard';

export default function Home() {
  return (
    <>
      <Hero />
      <ELNHero />
      <CardContainer />
      <VideoSection />
      <FeatureSection />
      <DemoSection />
      <GetStartedSection />
      <DeviceSection />
      <LabimotionHero />
      <LabimotionSection />
      <RepositoryHero />
      <RepositorySection />
      <Diagram />
    </>
  );
}
