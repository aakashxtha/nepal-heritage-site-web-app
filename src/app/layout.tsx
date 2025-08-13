import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nepal Heritage",
    template: "%s • Nepal Heritage",
  },
  description: "Explore Nepal's UNESCO World Heritage Sites through interactive maps, stories, and practical guides.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          {/* Skip to content for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1001] bg-foreground text-background px-3 py-2 rounded-md">Skip to content</a>
          <SiteHeader />
          <main id="main-content" className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
