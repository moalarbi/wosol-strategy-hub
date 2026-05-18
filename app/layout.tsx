import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "WOSOL × Kingdom Centre — Luxury Strategy Hub",
  description:
    "The strategic blueprint for WOSOL Concierge at Kingdom Centre Riyadh — a quiet-luxury launch of Saudi Arabia's first world-class concierge lifestyle brand.",
  authors: [{ name: "WOSOL Concierge" }],
  openGraph: {
    title: "WOSOL × Kingdom Centre — Luxury Strategy Hub",
    description:
      "An executive strategic dossier for the launch of WOSOL Concierge at Kingdom Centre Riyadh.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#0B1220"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="backdrop-cream">
        <LocaleProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
