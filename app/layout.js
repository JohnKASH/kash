import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://kashouston.org";
const OG_IMAGE = "/assets/LandingPageImages/LandingPhoto.jpg";
const DESCRIPTION =
  "Official Korean American Society of Houston (KASH) website — host of the annual Korean Festival in Houston, Texas. Celebrating Korean culture through festivals, scholarships, mentorship, and community.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Korean American Society of Houston | KASH",
    template: "%s | KASH Houston",
  },
  description: DESCRIPTION,
  keywords: [
    "Korean American Society of Houston",
    "KASH",
    "Korean Festival Houston",
    "Korean culture Houston",
    "Houston Texas",
    "Korean scholarship",
    "Korean community",
    "Kpop Houston",
  ],
  applicationName: "Korean American Society of Houston",
  authors: [{ name: "Korean American Society of Houston" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Korean American Society of Houston",
    title: "Korean American Society of Houston | KASH",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 2048,
        height: 1365,
        alt: "Korean American Society of Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean American Society of Houston | KASH",
    description: DESCRIPTION,
    creator: "@KASHouston",
    site: "@KASHouston",
    images: [OG_IMAGE],
  },
  appleWebApp: {
    title: "KASH Houston",
    statusBarStyle: "default",
    capable: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a8a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  name: "Korean American Society of Houston",
  alternateName: "KASH",
  description: DESCRIPTION,
  sameAs: [
    "https://www.facebook.com/KASHouston/",
    "https://twitter.com/kashouston",
    "https://www.instagram.com/kashouston/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
