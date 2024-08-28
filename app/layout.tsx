import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={openRunde.className}>
        <main className="py-10">{children}</main>
      </body>
    </html>
  );
}
