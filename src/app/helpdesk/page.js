import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HelpDesk from '../components/HelpDesk';

export default function HelpdeskPage() {
  return (
    <div className="font-geist text-gray-800 scroll-smooth bg-[#F6F6F6]">
      <NavBar />
      <main className="pt-20 min-h-screen flex flex-col items-center">
        <HelpDesk />
      </main>
      <Footer />
    </div>
  );
}
