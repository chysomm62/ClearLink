import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clear Link",
  description: "Uniting the world,\none video call at a time",

  icons: {
    shortcut: ["/site-icons/favicon.ico"],
    apple: ["/site-icons/apple-touch-icon.png"],
    icon: [
      {
        url: "/site-icons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/site-icons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/site-icons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        url: "/site-icons/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
