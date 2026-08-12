import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { WaitlistForm } from "./waitlist-form";

const copy = {
  en: {
    title: "REGISTER",
    kicker: "SEASON 1 · REGISTRATION OPENS LATE 2026",
    intro:
      "Registration isn't open yet. The waitlist is. Join it and you'll get the rules, the dates and the first registration slot before anyone else — plus zero spam, because writing spam takes time and we're busy building a festival.",
    faqTitle: "QUICK ANSWERS",
    faq: [
      { q: "WHO CAN ENTER?", a: "Solo or teams up to 3. School division (up to 12th grade) and Open division (under 25)." },
      { q: "WHAT DO I BUILD?", a: "Anything real. Web, mobile, AI, games, hardware. Your idea, your stack, ~3 months of building." },
      { q: "DOES IT COST ANYTHING?", a: "No. Entry is free for participants. Visiting the festival is free too." },
      { q: "WHO OWNS MY PROJECT?", a: "You. 100%. Forever. It's in the rules." },
      { q: "WHY SHOULD I TRUST THE JUDGING?", a: "Don't trust it — verify it. Public rubric, blind round, normalized scores, public conflict declarations, full score dump after the final." },
    ],
  },
  bg: {
    title: "РЕГИСТРАЦИЯ",
    kicker: "СЕЗОН 1 · РЕГИСТРАЦИЯТА ОТВАРЯ КЪСНО ПРЕЗ 2026",
    intro:
      "Регистрацията още не е отворена. Листата на чакащите — да. Запиши се и ще получиш правилата, датите и първия слот за регистрация преди всички останали — плюс нула спам, защото писането на спам отнема време, а ние сме заети да строим фестивал.",
    faqTitle: "БЪРЗИ ОТГОВОРИ",
    faq: [
      { q: "КОЙ МОЖЕ ДА УЧАСТВА?", a: "Самостоятелно или отбори до 3-ма. Ученическа дивизия (до 12 клас) и Отворена (до 25 г.)." },
      { q: "КАКВО ТРЯБВА ДА НАПРАВЯ?", a: "Нещо истинско. Web, mobile, AI, игри, хардуер. Твоята идея, твоят стек, ~3 месеца разработка." },
      { q: "СТРУВА ЛИ НЕЩО?", a: "Не. Участието е безплатно. Посещението на фестивала — също." },
      { q: "ЧИЙ Е ПРОЕКТЪТ МИ?", a: "Твой. 100%. Завинаги. Пише го в правилата." },
      { q: "ЗАЩО ДА ВЯРВАМ НА ЖУРИРАНЕТО?", a: "Не вярвай — проверявай. Публична рубрика, сляп кръг, нормализирани оценки, публични декларации за конфликти, пълно публикуване след финала." },
    ],
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "bg" ? "Регистрация" : "Register" };
}

export default async function RegisterPage({
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

      <WaitlistForm locale={locale as Locale} />

      <h2 className="display mt-20 text-3xl text-acid md:text-4xl">{t.faqTitle}</h2>
      <div className="mt-6 max-w-4xl space-y-px bg-paper/20">
        {t.faq.map((item, i) => (
          <details key={i} className="group bg-ink">
            <summary className="display cursor-pointer list-none p-5 text-base transition-colors hover:text-acid md:text-lg [&::-webkit-details-marker]:hidden">
              <span className="mr-3 font-mono text-acid">[{String(i + 1).padStart(2, "0")}]</span>
              {item.q}
              <span className="float-right text-acid group-open:rotate-45 inline-block transition-transform">+</span>
            </summary>
            <p className="border-t border-paper/10 p-5 font-mono text-sm leading-relaxed text-paper/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
