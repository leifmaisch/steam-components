import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steam Components - React Components for Steam, CS2 Premier & FACEIT",
  description: "A collection of beautiful React components inspired by Steam, CS2 Premier, and FACEIT. Install via shadcn CLI. Includes Premier Badges, Steam Level Badges, and FACEIT Level Badges.",
  keywords: ["react", "components", "steam", "cs2", "premier", "faceit", "shadcn", "tailwind", "typescript"],
  authors: [{ name: "Steam Components" }],
  openGraph: {
    title: "Steam Components - React Components for Steam, CS2 Premier & FACEIT",
    description: "Beautiful React components inspired by Steam, CS2 Premier, and FACEIT. Install via shadcn CLI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Components",
    description: "Beautiful React components inspired by Steam, CS2 Premier, and FACEIT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
