import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Korean American Society of Houston",
  description: "Korean American Society of Houston",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
