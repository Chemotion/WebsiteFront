import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import PrivacyPage from '@/components/subpages/Privacy';

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
