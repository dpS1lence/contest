import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AIImage } from "@/components/brutal/ai-image";
import { isLocale, type Locale } from "@/lib/i18n/config";

const copy = {
  en: {
    title: "PARTNERS",
    kicker: "FOR COMPANIES THAT HIRE BUILDERS",
    intro:
      "For two days, the sharpest young engineers in Bulgaria are in one hall — presenting real projects they spent months building. Not CVs. Working software, defended live. If your company hires engineers, this is the most concentrated room of provable talent you'll stand in all year.",
    getTitle: "WHAT YOU GET",
    get: [
      { title: "A BOOTH IN THE EXPO ZONE", text: "Two days of direct contact with participants and audience. Bring engineers, not brochures." },
      { title: "TALENT, PRE-FILTERED", text: "Every finalist has already survived a blind technical review by 3+ engineers. The vetting is done. It's public." },
      { title: "BRAND ON EVERYTHING", text: "Stage, stream, site, merch drops — packages by tier." },
      { title: "A NAMED AWARD (TOP TIER)", text: "Fund a themed award ('Best AI Project by X') — handed out by your team, on the main stage." },
    ],
    notTitle: "WHAT YOU DON'T GET",
    not: [
      "Influence on scoring. None. Zero. It's a written rule and the entire scoring record is public.",
      "Access to participants' IP — their code stays theirs.",
      "A speaking slot for anyone who will read from slides.",
    ],
    tiersTitle: "TIERS",
    tiersNote: "Detailed packages and pricing — in the partner deck. Write to us.",
    tiers: ["TITLE PARTNER", "STAGE PARTNER", "EXPO PARTNER", "FRIEND OF THE FESTIVAL"],
    ctaTitle: "GET THE PARTNER DECK",
    ctaText: "Tell us who you are and what you're hiring for. We'll send the deck and hold a booth.",
    ctaButton: "EMAIL US",
  },
  bg: {
    title: "ПАРТНЬОРИ",
    kicker: "ЗА КОМПАНИИ, КОИТО НАЕМАТ СТРОИТЕЛИ",
    intro:
      "За два дни най-острите млади инженери в България са в една зала — представяйки истински проекти, по които са работили месеци. Не CV-та. Работещ софтуер, защитен на живо. Ако компанията ви наема инженери, това е най-концентрираната зала с доказуем талант, в която ще стъпите цяла година.",
    getTitle: "КАКВО ПОЛУЧАВАТЕ",
    get: [
      { title: "ЩАНД В ЕКСПО ЗОНАТА", text: "Два дни директен контакт с участници и публика. Доведете инженери, не брошури." },
      { title: "ТАЛАНТ, ПРЕДВАРИТЕЛНО ФИЛТРИРАН", text: "Всеки финалист вече е минал сляпо техническо ревю от 3+ инженери. Проверката е направена. И е публична." },
      { title: "БРАНД НАВСЯКЪДЕ", text: "Сцена, стрийм, сайт, мърч дропове — пакети по тиер." },
      { title: "ИМЕННА НАГРАДА (ТОП ТИЕР)", text: "Финансирайте тематична награда («Най-добър AI проект от X») — връчена от вашия екип, на главната сцена." },
    ],
    notTitle: "КАКВО НЕ ПОЛУЧАВАТЕ",
    not: [
      "Влияние върху оценяването. Никакво. Нула. Това е писано правило, а целият запис от оценки е публичен.",
      "Достъп до интелектуалната собственост на участниците — кодът им остава техен.",
      "Слот за реч на човек, който ще чете от слайдове.",
    ],
    tiersTitle: "ТИЕРИ",
    tiersNote: "Подробни пакети и цени — в партньорското дек. Пишете ни.",
    tiers: ["TITLE PARTNER", "STAGE PARTNER", "EXPO PARTNER", "ПРИЯТЕЛ НА ФЕСТИВАЛА"],
    ctaTitle: "ВЗЕМЕТЕ ПАРТНЬОРСКОТО ДЕК",
    ctaText: "Кажете ни кои сте и за какво наемате. Ще пратим дека и ще запазим щанд.",
    ctaButton: "ПИШЕТЕ НИ",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "bg" ? "Партньори" : "Partners" };
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale as Locale];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-acid">
        {t.kicker}
      </p>
      <h1 className="display mt-4 text-[13vw] leading-none md:text-8xl">{t.title}</h1>
      <p className="mt-8 max-w-3xl font-mono text-sm leading-relaxed text-paper/80 md:text-base">
        {t.intro}
      </p>

      <AIImage slot="expo-hall" alt="Expo zone" className="mt-12 aspect-[21/9]" />

      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.getTitle}</h2>
      <div className="mt-6 grid gap-px bg-paper/20 sm:grid-cols-2">
        {t.get.map((item, i) => (
          <div key={i} className="bg-ink p-6 md:p-8">
            <h3 className="display text-lg md:text-xl">{item.title}</h3>
            <p className="mt-2 font-mono text-sm text-paper/70">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="display mt-16 text-3xl text-blood md:text-4xl">{t.notTitle}</h2>
      <ul className="mt-6 max-w-4xl space-y-3">
        {t.not.map((item, i) => (
          <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed text-paper/80 md:text-base">
            <span className="text-blood">✕</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.tiersTitle}</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {t.tiers.map((tier, i) => (
          <div
            key={i}
            className="display flex aspect-square items-center justify-center border-2 border-paper/30 p-4 text-center text-sm hover:border-acid hover:text-acid md:text-base"
          >
            {tier}
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-paper/50">
        {t.tiersNote}
      </p>

      <div className="mt-16 border-4 border-acid p-8 text-center md:p-12">
        <h2 className="display text-2xl md:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl font-mono text-sm text-paper/70">{t.ctaText}</p>
        <a
          href="mailto:contact@devids.eu?subject=NOT%20RIGGED%20Partnership"
          className="display mt-8 inline-block border-4 border-acid bg-acid px-8 py-4 text-lg text-ink transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-paper)]"
        >
          {t.ctaButton} →
        </a>
      </div>
    </div>
  );
}
