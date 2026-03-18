import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Vandan Panirwala — Spatial Stories",
  description:
    "Portfolio of Vandan Panirwala — Architect, Designer, Urban Thinker. Conceptual design, technical execution, and urban systems thinking.",
  keywords: [
    "Architecture",
    "Portfolio",
    "Urban Design",
    "IIT Chicago",
    "Vandan Panirwala",
  ],
  authors: [{ name: "Vandan Panirwala" }],
  openGraph: {
    title: "Vandan Panirwala — Spatial Stories",
    description: "Designing spaces, systems, and stories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
