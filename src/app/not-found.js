import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import NotFoundPage from '@/components/NotFound';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden scroll-smooth bg-neutral-50 font-geist text-gray-800">
      <NavBar />
      <main className="flex grow flex-col items-center pt-20 font-geist text-gray-800">
        <NotFoundPage />
      </main>
      <Footer />
    </div>
  );
}
