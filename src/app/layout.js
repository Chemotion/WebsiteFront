import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  fallback: ['system-ui', 'Helvetica', 'Arial'],
  preload: true,
  adjustFontFallback: 'Arial'
});

export const metadata = {
  title: 'Chemotion',
  description: 'Chemotion ELN, Chemotion Repository, LabIMotion',
  icons: { icon: '/images/favicon.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_STRAPI_URL} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://beta.website.chemdev.scc.kit.edu/docs" />
      </head>
      <body
        className={`overflow-x-hidden scroll-smooth bg-background font-geist text-foreground antialiased dark:bg-darkBackground dark:text-darkForeground ${geistSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollToTop />
          <NavBar />
          <main className="mb-20 flex min-h-screen w-full flex-col items-center justify-center pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
