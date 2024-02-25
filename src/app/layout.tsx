import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const inter = Almarai({ subsets: ["arabic"], weight: ['400']});

export const metadata: Metadata = {
  title: "Carlos Susanto"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
