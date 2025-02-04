import localFont from 'next/font/local';
import '@/globals.css';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata = {
  title: 'Chemotion',
  description: 'Chemotion.net new webpage',
  icons: {
    icon: '/images/chemotion-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden scroll-smooth bg-background font-geist text-foreground antialiased ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
