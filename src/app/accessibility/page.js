import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import AccessibilityPage from '@/components/pages/Accessibility';

export default function Accessibility() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-20">
        <AccessibilityPage />
      </main>
      <Footer />
    </div>
  );
}
