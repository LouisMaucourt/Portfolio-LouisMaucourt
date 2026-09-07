import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import localFont from "next/font/local";
import Preloader from "@/components/Preloader";


const amiamie = localFont({
  src: [
    { path: "../fonts/Amiamie-Black.woff2", weight: "900", style: "normal" },
    { path: "../fonts/Amiamie-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-amiamie",
});

export const metadata: Metadata = {
  title: "Louis Maucourt",
  description: "Développeur Web de talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <body className={`${amiamie.variable} antialiased p-4`}>
          <Preloader />
          <Header />
          <main>{children}</main>
        </body>
      </html>
  );
}
