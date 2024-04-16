import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neblink - Créateurs Web",
  description:
    "Experte en création web sur mesure, notre équipe propose des services professionnels de conception et de développement web pour votre entreprise. Du design personnalisé à l'intégration de fonctionnalités avancées, nous offrons des solutions adaptées à vos besoins. Optez pour des sites web optimisés pour le référencement (SEO), responsive et esthétiques, conçus pour maximiser votre présence en ligne. Découvrez nos services de création de sites vitrine, boutiques en ligne (e-commerce) et portfolios en ligne, et donnez à votre entreprise la visibilité qu'elle mérite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-background antialiased ",
          quicksand.className
        )}
      >
        <Header />
        <Toaster />
        {children}

        <Footer />
      </body>
    </html>
  );
}
