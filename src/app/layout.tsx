import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { Header } from "@/components";
import { Providers } from "./providers";
import "./globals.css";
import { BasketOverlay } from "@/components/sections/BasketOverlay/BasketOverlay";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Effortless Interior Design",
  description: "Website for Effortless Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen bg-[#f3eee8] text-[#5d3a40]">
      <body className={`relative w-full ${overpass.className}`}>
        <Providers>
          <Header />
          <BasketOverlay />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
