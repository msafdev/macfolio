import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/component/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import Nav from "@/components/component/nav";
import Footer from "@/components/component/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Macfolio",
  description:
    "A portfolio template for developers who love Macs. Built with Next.js, Tailwind CSS, and TypeScript by @msafdev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-[100svh] min-w-56 ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
