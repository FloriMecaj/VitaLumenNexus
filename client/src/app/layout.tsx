import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitaLumen Nexus",
  description:
    "VitaLumen Nexus is the infrastructure for next-generation intelligence, innovation orchestration, and applied deep-tech discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
