import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const nav = [
    { href: `/${locale}/manifesto`, label: dict.nav.manifesto },
    { href: `/${locale}/rules`, label: dict.nav.rules },
    { href: `/${locale}/festival`, label: dict.nav.festival },
    { href: `/${locale}/partners`, label: dict.nav.partners },
    { href: `/${locale}/register`, label: dict.nav.register },
  ];

  return (
    <footer className="border-t-2 border-paper/20 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <p className="display text-[13vw] leading-none text-outline md:text-[9vw]">
          NOT RIGGED
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-acid">
          {dict.footer.tagline}
        </p>

        <div className="mt-10 grid gap-8 font-mono text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-paper/40">
              {dict.footer.navTitle}
            </p>
            <ul className="space-y-2 uppercase">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-brutal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-paper/40">
              {dict.footer.contactTitle}
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@devids.eu" className="link-brutal">
                  contact@devids.eu
                </a>
              </li>
              <li className="uppercase text-paper/60">{dict.common.est}</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-paper/40">
              {dict.footer.legalTitle}
            </p>
            <ul className="space-y-2 uppercase">
              <li>
                <Link href={`/${locale}/rules`} className="link-brutal">
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashed-y mt-10 flex flex-col justify-between gap-2 pt-6 font-mono text-xs uppercase tracking-widest text-paper/40 sm:flex-row">
          <span>
            © 2026 <a href="https://devids.eu" className="link-brutal">Devids</a> — {dict.common.byDevids}
          </span>
          <span className="text-acid/70">{dict.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
