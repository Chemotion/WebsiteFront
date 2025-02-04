import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AccessibilityPage from '@/components/Accessibility';

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
