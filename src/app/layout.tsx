"use client";

import { Inter } from "next/font/google";
import { useDarkMNode } from "@/stores/use-dark-mode";
import { Sidebar } from "@/components/Sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkMode } = useDarkMNode();

  return (
    <html lang="en" className={`antialiased ${isDarkMode && "dark"}`}>
      <body className={inter.className}>
        <div className="lg:grid min-h-screen lg:grid-cols-app dark:bg-zinc-900">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 max-w-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
