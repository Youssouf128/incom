import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "in'COM - Agence Marketing Digital à Djibouti",
  description: "in'COM propulse votre visibilité digitale à Djibouti. Stratégie digitale, SEO, réseaux sociaux et création de contenu pour faire croître votre entreprise.",
  keywords: "marketing digital, Djibouti, SEO, réseaux sociaux, stratégie digitale, agence communication",
  authors: [{ name: "in'COM" }],
  openGraph: {
    title: "in'COM - Agence Marketing Digital à Djibouti",
    description: "Votre croissance digitale, notre mission à Djibouti.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}