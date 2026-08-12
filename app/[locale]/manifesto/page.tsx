import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";

const copy = {
  en: {
    title: "THE MANIFESTO",
    kicker: "WHY THIS EXISTS",
    paragraphs: [
      "We are seven programmers, all around 20 years old. Between us: dozens of podium finishes at national olympiads, tournaments and IT competitions. We won the game. And we still hate how it's played.",
      "Here's what nobody says out loud: in too many competitions, months of real work end with a jury nobody knows, scoring by criteria nobody sees, giving feedback to nobody at all. And somehow, again and again, the winners turn out to be the ones with the right connections, the right school, the right mentor on the jury.",
      "We've sat in those halls. We've watched brilliant projects lose to handshakes. We've received trophies without a single sentence about what was good or bad in what we built. It teaches young builders exactly one lesson: it's not about the work.",
      "NOT RIGGED is our answer. A competition where fairness isn't a value statement — it's the technical spec. Public rubric before registration. Blind first round. Three-plus independent judges per project, scores normalized, formula published. Public conflict-of-interest declarations. Written feedback for every single project. And when it's over — every score, every criterion, published on this site. Forever.",
      "And because we're done with grey halls and dead silence: the final is a two-day festival. Live demos on a main stage. An expo zone full of companies. Games, merch, shows, noise. The way a celebration of building things should feel.",
      "We're not an institution. We're not a ministry. We're seven people who got tired of waiting for someone else to fix it.",
    ],
    signoff: "— The Devids team",
    promise: "IF WE EVER RIG IT, BURN US DOWN. ALL THE DATA WILL BE PUBLIC — SO YOU'LL KNOW.",
    cta: "JOIN THE WAITLIST",
  },
  bg: {
    title: "МАНИФЕСТЪТ",
    kicker: "ЗАЩО СЪЩЕСТВУВА ТОВА",
    paragraphs: [
      "Ние сме седем програмисти, всичките около 20-годишни. Помежду ни: десетки призови места от национални олимпиади, турнири и ИТ състезания. Спечелихме играта. И пак мразим начина, по който се играе.",
      "Ето какво никой не казва на глас: в твърде много състезания месеци истинска работа завършват с жури, което никой не познава, оценяващо по критерии, които никой не вижда, даващо обратна връзка на абсолютно никого. И някак, отново и отново, победителите се оказват тези с правилните връзки, правилното училище, правилния ментор в журито.",
      "Седели сме в тези зали. Гледали сме брилянтни проекти да губят от ръкостискания. Получавали сме купи без нито едно изречение за това какво е било добро или лошо в това, което сме построили. Това учи младите на точно един урок: не е важна работата.",
      "NOT RIGGED е нашият отговор. Състезание, в което честността не е ценност от презентация — а техническа спецификация. Публична рубрика преди регистрацията. Сляп първи кръг. Три и повече независими журьори на проект, нормализирани оценки, публикувана формула. Публични декларации за конфликт на интереси. Писмена обратна връзка за всеки един проект. А когато свърши — всяка оценка, всеки критерий, публикувани на този сайт. Завинаги.",
      "И понеже ни писна от сиви зали и мъртва тишина: финалът е двудневен фестивал. Демота на живо на главна сцена. Експо зона, пълна с компании. Игри, мърч, представления, шум. Така, както трябва да усеща един празник на строенето на неща.",
      "Не сме институция. Не сме министерство. Седем души сме, на които им омръзна да чакат някой друг да го оправи.",
    ],
    signoff: "— Екипът на Devids",
    promise: "АКО НЯКОГА ГО НАГЛАСИМ — ИЗГОРЕТЕ НИ. ВСИЧКИ ДАННИ ЩЕ СА ПУБЛИЧНИ, ТАКА ЧЕ ЩЕ РАЗБЕРЕТЕ.",
    cta: "ЗАПИШИ СЕ В ЛИСТАТА",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "bg" ? "Манифест" : "Manifesto" };
}

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale as Locale];

  return (
    <article className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-acid">
        {t.kicker}
      </p>
      <h1 className="display mt-4 text-[13vw] leading-none md:text-8xl">{t.title}</h1>

      <div className="mt-12 max-w-4xl space-y-8">
        {t.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === 3
                ? "border-l-4 border-acid pl-5 font-mono text-base leading-relaxed text-paper md:text-lg"
                : "font-mono text-base leading-relaxed text-paper/80 md:text-lg"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-10 font-mono text-base font-bold uppercase tracking-widest text-paper/60">
        {t.signoff}
      </p>

      <div className="stamp mx-auto mt-16 max-w-xl text-center text-base md:text-xl">
        {t.promise}
      </div>

      <div className="mt-16 text-center">
        <Link
          href={`/${locale}/register`}
          className="display inline-block border-4 border-acid bg-acid px-8 py-4 text-lg text-ink transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-paper)]"
        >
          {t.cta} →
        </Link>
      </div>
    </article>
  );
}
