import NavBar from './components/NavBar';
import Hero from './components/sections/Hero';
import Diagram from './components/sections/Diagram';
import CardContainer from './components/sections/FourCardsSection';
import FeatureSection from './components/sections/FeatureSection';
import ELNHero from './components/sections/ELNHero';
import DemoSection from './components/sections/DemoSection';
import DeviceSection from './components/sections/DeviceSection';
import GetStartedSection from './components/sections/GetStartedSection';
import GenericElementHero from './components/sections/LabimotionHero';
import GenericElementSection from './components/sections/LabimotionSection';
import RepositoryHero from './components/sections/RepositoryHero';
import RepositorySection from './components/sections/RepositorySection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-geist text-gray-800 scroll-smooth bg-[#F6F6F6] overflow-x-hidden">
      <NavBar />
      <main className="pt-20 min-h-screen flex flex-col items-center justify-center w-full">
        <Hero />
        <Diagram />
        <ELNHero />
        <CardContainer />
        <DeviceSection />
        <FeatureSection />
        <DemoSection />
        <GetStartedSection />
        <GenericElementHero />
        <GenericElementSection />
        <RepositoryHero />
        <RepositorySection />
      </main>
      <Footer />
    </div>
  );
}
