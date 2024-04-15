import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "../components/header/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./globals.scss";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
