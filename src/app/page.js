import NavBar from './components/NavBar';
import Intro from './sections/Intro';
import Dummy from './sections/Dummy';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-sans scroll-smooth">
      <NavBar />
      <main className="pt-20 bg-[#7EB9D7] min-h-screen flex flex-col items-center justify-center">
        <div className="mt-20 mb-20">
          <Intro />
        </div>
        <Dummy imagePosition="right" />
        <Dummy imagePosition="left" />
        <Dummy imagePosition="right" />
        <Dummy imagePosition="left" />
        <div className="mb-20">
          <Dummy imagePosition="right" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
