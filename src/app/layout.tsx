import "./globals.css";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import Cookie from "@/components/Cookie/Cookie";
import Footer from "../components/Footer/Footer";
import { Header } from "@/components";

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
    <html lang="en" className="max-w-screen">
      <body
        className={`relative w-full bg-[#f3eee8] text-[#5d3a40] ${overpass.className}`}
      >
        <Header />
        {children}
        <Cookie />
        <Footer />
      </body>
    </html>
  );
}
