import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Probe - Complete surveys. Earn rewards.",
  description: "Complete surveys, earn rewards, verified by humanity.",
  authors: [{ name: "Lovable" }],
  icons: {
    icon: "/Probe.svg",
    shortcut: "/Probe.svg",
    apple: "/Probe.svg",
  },
  openGraph: {
    title: "Probe - Complete surveys. Earn rewards.",
    description: "Complete surveys, earn rewards, verified by humanity.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 