import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Portfolio — Namkyu Yeo",
  description: "Namkyu Yeo's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main className="pt-16 min-h-screen bg-white">
          <div className="container py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
