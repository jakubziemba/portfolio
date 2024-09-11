import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MouseRadialGradient from "./_components/mouse-radial-gradient";
import Script from "next/script";

const openRunde = localFont({
  src: [
    {
      path: "./fonts/OpenRunde-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenRunde-Medium.woff2",
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
      <body className={`${openRunde.className} group/body relative`}>
        <main className="grid min-h-screen place-items-center">{children}</main>
        <MouseRadialGradient />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
