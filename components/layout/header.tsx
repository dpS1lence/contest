import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LangSwitcher } from "./lang-switcher";
import { MobileNav } from "./mobile-nav";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const nav = [
    { href: `/${locale}/manifesto`, label: dict.nav.manifesto },
    { href: `/${locale}/rules`, label: dict.nav.rules },
    { href: `/${locale}/festival`, label: dict.nav.festival },
    { href: `/${locale}/partners`, label: dict.nav.partners },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-paper/20 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link
          href={`/${locale}`}
          className="display shrink-0 text-base tracking-tight text-paper md:text-lg"
        >
          NOT&nbsp;<span className="strike-blood">RIGGED</span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-brutal px-1 py-0.5">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher current={locale} />
          <Link
            href={`/${locale}/register`}
            className="hidden border-2 border-acid bg-acid px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-transparent hover:text-acid sm:block"
          >
            {dict.nav.register}
          </Link>
          <MobileNav
            items={[...nav, { href: `/${locale}/register`, label: dict.nav.register }]}
          />
        </div>
      </div>
    </header>
  );
}
