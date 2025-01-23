import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFound';

export default function NotFound() {
  return (
    <div className="font-geist text-gray-800 scroll-smooth bg-[#F6F6F6] overflow-x-hidden min-h-screen flex flex-col">
      <NavBar />
      <main className="pt-20 flex flex-col flex-grow items-center font-geist text-gray-800 bg-[#F6F6F6]">
        <NotFoundPage />
      </main>
      <Footer />
    </div>
  );
}
