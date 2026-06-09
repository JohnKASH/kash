// Served at /sitemap.xml. Keep this list in sync with the routes under app/(pages).

const BASE_URL = "https://kashouston.org";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/Scholarship", changeFrequency: "weekly", priority: 0.9 },
    { path: "/UpcomingEvents", changeFrequency: "weekly", priority: 0.8 },
    { path: "/KoreanFestival", changeFrequency: "monthly", priority: 0.8 },
    { path: "/MentorshipProgram", changeFrequency: "monthly", priority: 0.7 },
    { path: "/MeetOurTeam", changeFrequency: "monthly", priority: 0.7 },
    { path: "/KASHHistory", changeFrequency: "yearly", priority: 0.6 },
    { path: "/Contact", changeFrequency: "yearly", priority: 0.5 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
