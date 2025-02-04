import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PrivacyPage from '@/components/Privacy';

export default function Privacy() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-20">
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  );
}
