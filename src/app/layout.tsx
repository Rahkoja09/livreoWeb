import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livreo — Application de livraison à Antananarivo",
  description: "Livreo connecte expéditeurs et livreurs vérifiés à Madagascar. Trouvez un livreur en moins de 5 minutes. Téléchargez l'application gratuitement.",
  keywords: ["Livreo", "livraison Madagascar", "livraison Antananarivo", "livreur Antananarivo", "expédition colis Madagascar", "application livraison Madagascar"],
  authors: [{ name: "Livreo" }],
  openGraph: {
    title: "Livreo — Application de livraison à Antananarivo",
    description: "Trouvez un livreur vérifié en moins de 5 minutes. Téléchargez l'application Livreo gratuitement.",
    siteName: "Livreo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livreo — Application de livraison à Antananarivo",
    description: "Téléchargez l'application Livreo. Expédiez vos colis ou devenez livreur partenaire à Antananarivo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: 'var(--mb-paper)', color: 'var(--mb-ink)' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
