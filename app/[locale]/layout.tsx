import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin", "cyrillic"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    metadataBase: new URL("https://notrigged.eu"),
    title: {
      default: "NOT RIGGED — The best project wins. For real.",
      template: "%s | NOT RIGGED",
    },
    description: isBg
      ? "Първото ИТ състезание-фестивал в България с доказуемо честно журиране. Публични оценки, сляпо оценяване, обратна връзка за всеки проект."
      : "Bulgaria's first IT competition-festival with provably fair judging. Public scores, blind reviews, written feedback for every project.",
    alternates: {
      languages: { en: "/en", bg: "/bg" },
    },
    openGraph: {
      siteName: "NOT RIGGED",
      locale: isBg ? "bg_BG" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${unbounded.variable} ${jetbrainsMono.variable} grain flex min-h-screen flex-col antialiased`}
      >
        <SmoothScrollProvider>
          <Header locale={locale as Locale} />
          <main className="flex-grow pt-14">{children}</main>
          <Footer locale={locale as Locale} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
