import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/header/NavBar/NavBar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
