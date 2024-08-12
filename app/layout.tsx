import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { alegreyaSC } from './lib/Fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seasons Novel | Opera Metal',
  description:
    'Seasons novel est un projet musical qui allie histoires originales, metal progressif et animés',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${alegreyaSC.className} flex flex-col min-h-screen`}>{children}</body>
    </html>
  );
}
