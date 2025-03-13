import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  fallback: ['system-ui', 'Helvetica', 'Arial']
});

export const metadata = {
  title: 'Chemotion',
  description: 'Chemotion ELN, Chemotion Repository, LabIMotion',
  icons: { icon: '/images/favicon.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden scroll-smooth bg-background font-geist text-foreground antialiased dark:bg-darkBackground dark:text-darkForeground ${geistSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
