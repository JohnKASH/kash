// Served at /robots.txt. Allows all crawlers and points to the sitemap.

const BASE_URL = "https://kashouston.org";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
