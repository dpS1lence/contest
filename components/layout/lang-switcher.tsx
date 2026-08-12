"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? `/${current}`;
  const rest = pathname.replace(/^\/(en|bg)(?=\/|$)/, "");

  return (
    <div className="flex items-center border-2 border-paper/30 font-mono text-xs font-bold">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest}`}
          className={cn(
            "px-2 py-1 uppercase transition-colors",
            locale === current
              ? "bg-acid text-ink"
              : "text-paper/60 hover:text-acid"
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
