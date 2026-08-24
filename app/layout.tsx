import type { Metadata } from 'next';
import { Bebas_Neue, Geist, Oswald } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const oswald = Oswald({ variable: '--font-oswald', subsets: ['latin'] });
const display = Bebas_Neue({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gapackandload.com'),
  title: 'Georgia Pack & Load | Atlanta Moving, Packing & Storage',
  description: 'A smoother Georgia move starts with one call. Get a fast moving estimate from Georgia Pack & Load.',
  openGraph: {
    title: 'Move the smart way | Georgia Pack & Load',
    description: 'One crew. One plan. One smooth move.',
    images: [{ url: '/og.png', width: 1536, height: 1024 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${oswald.variable} ${display.variable}`}>{children}</body></html>;
}
