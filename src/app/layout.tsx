import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

export const metadata: Metadata = {
  title: "Leslie Aula",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Add a Navbar component here if needed */}
        </header>
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
