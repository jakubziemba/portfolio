import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./_components/nav";

const inter = Inter({ subsets: ["latin"] });

const openRunde = localFont({
  src: [
    {
      path: "./_fonts/OpenRunde-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/OpenRunde-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Jakub Ziemba",
  description: "Frontend Developer based in Warsaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openRunde.className}>
        {/* <Navigation /> */}
        <main className="py-10">{children}</main>
      </body>
    </html>
  );
}
