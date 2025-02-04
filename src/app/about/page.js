import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhoWeArePage from '@/components/WhoWeAre';

export default function WhoWeAre() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-20">
        <WhoWeArePage />
      </main>
      <Footer />
    </div>
  );
}
