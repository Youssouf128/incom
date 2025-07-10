// Configuration SEO de base pour la page d'accueil Next.js
// Voir la doc : https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export const metadata = {
  title: "Accueil | Incom",
  description: "Agence digitale Incom : création de sites web, marketing digital, design et développement sur-mesure.",
  keywords: [
    "incom",
    "agence digitale",
    "création site web",
    "marketing digital",
    "développement web",
    "design",
    "SEO"
  ],
  openGraph: {
    title: "Accueil | Incom",
    description: "Agence digitale Incom : création de sites web, marketing digital, design et développement sur-mesure.",
    url: "https://incom.com/",
    siteName: "Incom",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Logo Incom"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil | Incom",
    description: "Agence digitale Incom : création de sites web, marketing digital, design et développement sur-mesure.",
    images: ["/images/logo.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};
