import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import NavBar from "../components/header/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./globals.scss";

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
    <html lang="en">
      <body className={overpass.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
