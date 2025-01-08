import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AccessibilityPage from '../components/Accessibility';

export default function Accessibility() {
  return (
    <div className="font-geist text-gray-800 scroll-smooth bg-[#F6F6F6]">
      <NavBar />
      <main className="pt-20 min-h-screen flex flex-col items-center">
        <AccessibilityPage />
      </main>
      <Footer />
    </div>
  );
}
