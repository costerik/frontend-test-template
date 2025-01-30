import './globals.css';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} ${archivo.variable} grid h-screen grid-rows-[auto_1fr_auto]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
