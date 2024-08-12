import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "next/head";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Korean American Society of Houston",
  description:
    "Official Korean American Society of Houston website - Host of the annual Korean Festival in Houston, Texas.",
  keywords: [
    "Houston",
    "Texas",
    "Korean",
    "American",
    "Society",
    "Festival",
    "Kpop",
  ],
  openGraph: {
    url: "https://kashouston.org",
    type: "website",
    title: "Official Korean American Society of Houston Website",
    description:
      "Official Korean American Society of Houston website - Host of the annual Korean Festival in Houston, Texas.",
    images: [
      {
        url: "https://kashouston.org/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Korean American Society of Houston",
      },
    ],
    siteName: "Korean American Society of Houston",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Korean American Society of Houston Website",
    description:
      "Official Korean American Society of Houston website - Host of the annual Korean Festival in Houston, Texas.",
    creator: "@KASHouston",
    site: "@KASHouston",
    images: [
      {
        url: "https://kashouston.org/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Korean American Society of Houston",
      },
    ],
  },
  metadataBase: new URL("https://kashouston.org"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    types: {
      "application/rss+xml": "https://kashouston.org/rss.xml",
    },
  },
  applicationName: "Korean American Society of Houston",
  appleWebApp: {
    title: "Korean American Society of Houston",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: ["YOUR_YANDEX_VERIFICATION_CODE"],
    other: {
      "msvalidate.01": ["YOUR_MS_VERIFICATION_CODE"],
      "facebook-domain-verification": ["YOUR_FACEBOOK_VERIFICATION_CODE"],
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://kashouston.org",
    logo: "https://kashouston.org/images/logo.png",
    name: "Korean American Society of Houston",
    sameAs: [
      "https://www.facebook.com/KASHouston/",
      "https://twitter.com/kashouston",
      "https://www.instagram.com/kashouston/",
    ],
  };

  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Korean American Society of Houston" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
