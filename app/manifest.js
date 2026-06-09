// PWA web app manifest. Next.js serves this at /manifest.webmanifest and
// automatically injects the <link rel="manifest"> tag.

export default function manifest() {
  return {
    name: "Korean American Society of Houston",
    short_name: "KASH",
    description:
      "Official Korean American Society of Houston website - Host of the annual Korean Festival in Houston, Texas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a8a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
