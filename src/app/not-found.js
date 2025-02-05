import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import NotFoundPage from '@/components/subpages/NotFound';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex grow flex-col items-center pt-20">
        <NotFoundPage />
      </main>
      <Footer />
    </div>
  );
}
