import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

export const metadata: Metadata = {
  title: "Leslie Aula",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <AboutMe />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
