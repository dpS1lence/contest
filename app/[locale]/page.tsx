import Link from "next/link";
import type { Metadata } from "next";
import { Marquee } from "@/components/brutal/marquee";
import { AIImage } from "@/components/brutal/ai-image";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const copy = {
  en: {
    ticker: [
      "THE BEST PROJECT WINS. FOR REAL.",
      "SPRING 2027 · BULGARIA",
      "EVERY SCORE PUBLIC",
      "NO INSIDERS",
      "2-DAY FESTIVAL",
    ],
    heroKicker: "BULGARIA'S FIRST IT COMPETITION-FESTIVAL",
    heroSub:
      "Months of building. Two days of festival. Every score public. We got tired of competitions where the jury is a black box and insiders take the trophies — so we're building the one we always wanted to enter.",
    stamp: "100% PUBLIC SCORES",
    ctaRegister: "JOIN THE WAITLIST",
    ctaManifesto: "READ THE MANIFESTO",
    heroImageAlt: "NOT RIGGED festival main stage",
    problemTitle: "WE'VE ALL SEEN IT",
    problems: [
      "Black-box juries. No feedback. Ever.",
      "The insider kid wins. Again.",
      "Rules written in 2009.",
      "Months of work → 5 minutes on stage → silence.",
    ],
    problemPunch: "So we stopped complaining and started building NOT RIGGED.",
    howTitle: "HOW IT WORKS",
    steps: [
      {
        title: "REGISTER",
        text: "Solo or a team of up to 3. Students and everyone under 25. Any stack, any idea — as long as it's yours.",
      },
      {
        title: "BUILD",
        text: "Three months of development. Office hours with mentors along the way. Ship something real.",
      },
      {
        title: "THE BLIND ROUND",
        text: "No names. No schools. 3+ independent engineers score you against a public rubric. Every project gets written feedback.",
      },
      {
        title: "THE FESTIVAL",
        text: "Finalists demo live on the main stage. Scores hit the screen in real time. In front of everyone.",
      },
    ],
    rigTitle: "ANTI-RIG SYSTEMS",
    rigSub: "Fairness is not a promise here. It's an architecture.",
    rigs: [
      {
        title: "PUBLIC RUBRIC",
        text: "Criteria and weights published before registration even opens. No 'overall impression' points.",
      },
      {
        title: "BLIND JUDGING",
        text: "Round one is fully anonymized. Judges see the project — not your name, school or city.",
      },
      {
        title: "3+ SCORERS, NORMALIZED",
        text: "Every project is scored by at least three independent judges. Z-score normalization kills harsh-judge and buddy-judge bias. The formula is public.",
      },
      {
        title: "CONFLICTS DECLARED",
        text: "Every judge signs a public conflict-of-interest declaration. Any overlap — automatic reassignment.",
      },
      {
        title: "FEEDBACK FOR ALL",
        text: "Every single project receives written feedback. Including the eliminated ones. Especially the eliminated ones.",
      },
      {
        title: "FULL SCORE DUMP",
        text: "After the final: every score, every criterion, every project — published on this site. Forever.",
      },
    ],
    festTitle: "TWO DAYS. ONE STAGE. ZERO BORING SPEECHES.",
    festSub:
      "NOT RIGGED is not a hall with chairs. It's a festival: live demos, an expo zone full of IT companies, games, merch, shows and the loudest award ceremony this country's IT scene has seen.",
    zones: [
      { slot: "zone-main-stage", title: "MAIN STAGE", text: "Live finals, real-time scoring, award show." },
      { slot: "zone-project-alley", title: "PROJECT ALLEY", text: "Every finalist gets a booth. Touch the demos. Grill the builders." },
      { slot: "zone-expo", title: "EXPO ZONE", text: "IT companies, booths, internships, swag wars." },
      { slot: "zone-arcade", title: "ARCADE", text: "Typing races, debug duels, retro games. Prizes all day." },
      { slot: "zone-merch", title: "MERCH SHOP", text: "NOT RIGGED tees, hoodies, stickers. Wear the statement." },
      { slot: "zone-showcase", title: "SHOWCASE", text: "Live performances by schools & studios, powered by Classes." },
    ],
    festCta: "SEE THE FULL FESTIVAL",
    juryTitle: "THE JURY",
    jurySub:
      "Builders, founders, operators. People who ship — not bureaucrats who attend. Announced one by one. Every judge comes with a public conflict-of-interest declaration.",
    juryCard: "CLASSIFIED",
    jurySoon: "ANNOUNCEMENTS START SOON",
    numbers: [
      { n: "2", label: "DAYS OF FESTIVAL" },
      { n: "3+", label: "JUDGES PER PROJECT" },
      { n: "100%", label: "SCORES PUBLIC" },
      { n: "0", label: "SPEECHES BY OFFICIALS" },
    ],
    partnersTitle: "YOUR BOOTH. THEIR TALENT.",
    partnersText:
      "The sharpest young builders in the country. One hall. Two days. If your company hires engineers, this is the room you want a booth in.",
    partnersCta: "BECOME A PARTNER",
    finalTitle: "STOP READING.",
    finalTitle2: "START BUILDING.",
    finalCta: "JOIN THE WAITLIST",
  },
  bg: {
    ticker: [
      "ПЕЧЕЛИ НАЙ-ДОБРИЯТ ПРОЕКТ. НАИСТИНА.",
      "ПРОЛЕТ 2027 · БЪЛГАРИЯ",
      "ВСЯКА ОЦЕНКА Е ПУБЛИЧНА",
      "БЕЗ ВЪТРЕШНИ ХОРА",
      "2-ДНЕВЕН ФЕСТИВАЛ",
    ],
    heroKicker: "ПЪРВОТО ИТ СЪСТЕЗАНИЕ-ФЕСТИВАЛ В БЪЛГАРИЯ",
    heroSub:
      "Месеци разработка. Два дни фестивал. Всяка оценка — публична. Писна ни от състезания, в които журито е черна кутия, а вътрешните хора вземат купите — затова правим състезанието, в което винаги сме искали да участваме.",
    stamp: "100% ПУБЛИЧНИ ОЦЕНКИ",
    ctaRegister: "ЗАПИШИ СЕ В ЛИСТАТА",
    ctaManifesto: "ПРОЧЕТИ МАНИФЕСТА",
    heroImageAlt: "Главната сцена на фестивала NOT RIGGED",
    problemTitle: "ВСИЧКИ СМЕ ГО ВИЖДАЛИ",
    problems: [
      "Жури-черна кутия. Обратна връзка — никаква. Никога.",
      "Печели «вътрешното» дете. Пак.",
      "Правила, писани през 2009-а.",
      "Месеци труд → 5 минути на сцена → тишина.",
    ],
    problemPunch: "Затова спряхме да се оплакваме и започнахме да строим NOT RIGGED.",
    howTitle: "КАК РАБОТИ",
    steps: [
      {
        title: "РЕГИСТРАЦИЯ",
        text: "Сам или в отбор до 3-ма. Ученици и всички до 25 г. Всякакъв стек, всякаква идея — стига да е твоя.",
      },
      {
        title: "РАЗРАБОТКА",
        text: "Три месеца разработка. Office hours с ментори по пътя. Направи нещо истинско.",
      },
      {
        title: "СЛЕПИЯТ КРЪГ",
        text: "Без имена. Без училища. 3+ независими инженери те оценяват по публична рубрика. Всеки проект получава писмена обратна връзка.",
      },
      {
        title: "ФЕСТИВАЛЪТ",
        text: "Финалистите демонстрират на живо на главната сцена. Оценките излизат на екрана в реално време. Пред всички.",
      },
    ],
    rigTitle: "АНТИ-RIG СИСТЕМИ",
    rigSub: "Честността тук не е обещание. Тя е архитектура.",
    rigs: [
      {
        title: "ПУБЛИЧНА РУБРИКА",
        text: "Критерии и тежести, публикувани преди още да е отворила регистрацията. Никакви точки за «общо впечатление».",
      },
      {
        title: "СЛЯПО ОЦЕНЯВАНЕ",
        text: "Първият кръг е напълно анонимизиран. Журито вижда проекта — не името, училището или града ти.",
      },
      {
        title: "3+ ОЦЕНИТЕЛИ, НОРМАЛИЗИРАНИ",
        text: "Всеки проект се оценява от поне трима независими журьори. Z-score нормализация убива ефекта на «строгия» и «приятелския» журьор. Формулата е публична.",
      },
      {
        title: "ДЕКЛАРИРАНИ КОНФЛИКТИ",
        text: "Всеки журьор подписва публична декларация за конфликт на интереси. При всяко засичане — автоматично преразпределение.",
      },
      {
        title: "FEEDBACK ЗА ВСИЧКИ",
        text: "Всеки един проект получава писмена обратна връзка. Включително отпадналите. Особено отпадналите.",
      },
      {
        title: "ПЪЛНО ПУБЛИКУВАНЕ",
        text: "След финала: всяка оценка, всеки критерий, всеки проект — публикувани на този сайт. Завинаги.",
      },
    ],
    festTitle: "ДВА ДНИ. ЕДНА СЦЕНА. НУЛА СКУЧНИ РЕЧИ.",
    festSub:
      "NOT RIGGED не е зала със столове. Това е фестивал: демота на живо, експо зона с ИТ компании, игри, мърч, представления и най-шумната церемония по награждаване, която ИТ сцената у нас е виждала.",
    zones: [
      { slot: "zone-main-stage", title: "ГЛАВНА СЦЕНА", text: "Финали на живо, оценки в реално време, награждаване." },
      { slot: "zone-project-alley", title: "АЛЕЯ НА ПРОЕКТИТЕ", text: "Всеки финалист има щанд. Пипни демотата. Разпитай създателите." },
      { slot: "zone-expo", title: "ЕКСПО ЗОНА", text: "ИТ компании, щандове, стажове, войни за суваги." },
      { slot: "zone-arcade", title: "АРКАДА", text: "Typing надпревари, debug дуели, ретро игри. Награди цял ден." },
      { slot: "zone-merch", title: "МЪРЧ МАГАЗИН", text: "Тениски, худита, стикери NOT RIGGED. Носи позицията." },
      { slot: "zone-showcase", title: "ШОУКЕЙС", text: "Представления на школи и студиа, с подкрепата на Classes." },
    ],
    festCta: "ВИЖ ЦЕЛИЯ ФЕСТИВАЛ",
    juryTitle: "ЖУРИТО",
    jurySub:
      "Строители, фаундъри, оператори. Хора, които правят — не бюрократи, които присъстват. Обявяваме ги един по един. Всеки журьор идва с публична декларация за конфликт на интереси.",
    juryCard: "ЗАСЕКРЕТЕНО",
    jurySoon: "ОБЯВЯВАНЕТО ЗАПОЧВА СКОРО",
    numbers: [
      { n: "2", label: "ДНИ ФЕСТИВАЛ" },
      { n: "3+", label: "ЖУРЬОРИ НА ПРОЕКТ" },
      { n: "100%", label: "ПУБЛИЧНИ ОЦЕНКИ" },
      { n: "0", label: "РЕЧИ НА ОФИЦИАЛНИ ЛИЦА" },
    ],
    partnersTitle: "ВАШИЯТ ЩАНД. ТЕХНИЯТ ТАЛАНТ.",
    partnersText:
      "Най-острите млади разработчици в страната. Една зала. Два дни. Ако компанията ви наема инженери, това е залата, в която искате щанд.",
    partnersCta: "СТАНИ ПАРТНЬОР",
    finalTitle: "СПРИ ДА ЧЕТЕШ.",
    finalTitle2: "ПОЧНИ ДА СТРОИШ.",
    finalCta: "ЗАПИШИ СЕ В ЛИСТАТА",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "bg"
        ? "NOT RIGGED — Печели най-добрият проект. Наистина."
        : "NOT RIGGED — The best project wins. For real.",
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale as Locale];

  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden">
        <Marquee items={[...t.ticker]} className="bg-acid text-ink border-y-0 border-b-2 border-ink" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-acid md:text-sm">
            {t.heroKicker} — EST. 2026
          </p>

          <h1 className="display mt-4 text-[16.5vw] leading-[0.85] md:text-[12.5vw]">
            <span className="block glitch" data-text="NOT">NOT</span>
            <span className="block text-outline glitch" data-text="RIGGED">
              RIGGED
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl font-mono text-sm leading-relaxed text-paper/80 md:text-base">
              {t.heroSub}
            </p>
            <div className="stamp shrink-0 self-start text-lg md:self-auto md:text-2xl">
              {t.stamp}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/register`}
              className="display border-4 border-acid bg-acid px-6 py-4 text-lg text-ink transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-paper)] md:text-xl"
            >
              {t.ctaRegister} →
            </Link>
            <Link
              href={`/${locale}/manifesto`}
              className="display border-4 border-paper px-6 py-4 text-lg text-paper transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-acid)] md:text-xl"
            >
              {t.ctaManifesto}
            </Link>
          </div>
        </div>

        <AIImage
          slot="hero-crowd"
          alt={t.heroImageAlt}
          className="mx-auto aspect-[21/9] max-w-7xl border-x-0 md:border-x-2"
        />
      </section>

      {/* ======= THE PROBLEM ======= */}
      <section className="mt-16 bg-paper text-ink md:mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <h2 className="display text-[9vw] leading-none md:text-7xl">
            {t.problemTitle}
          </h2>
          <ul className="mt-10 space-y-0">
            {t.problems.map((problem, i) => (
              <li
                key={i}
                className="flex items-baseline gap-4 border-t-2 border-ink/15 py-5 font-mono text-base font-bold uppercase md:text-2xl"
              >
                <span className="font-mono text-sm text-blood">0{i + 1}</span>
                <span className="line-through decoration-blood decoration-4">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
          <p className="display mt-10 max-w-4xl text-2xl leading-tight md:text-4xl">
            <span className="bg-ink px-2 text-acid">{t.problemPunch}</span>
          </p>
        </div>
      </section>

      {/* ======= HOW IT WORKS ======= */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="display text-[9vw] leading-none text-outline md:text-7xl">
          {t.howTitle}
        </h2>
        <div className="mt-10 grid gap-px bg-paper/20 md:grid-cols-4">
          {t.steps.map((step, i) => (
            <div key={i} className="group bg-ink p-6 transition-colors hover:bg-acid hover:text-ink md:p-8">
              <p className="display text-5xl text-acid group-hover:text-ink md:text-6xl">
                0{i + 1}
              </p>
              <h3 className="display mt-4 text-xl md:text-2xl">{step.title}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-paper/70 group-hover:text-ink/80">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======= ANTI-RIG ======= */}
      <section className="border-y-2 border-paper/20 bg-ink-2">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-[9vw] leading-none md:text-7xl">
              <span className="text-blood">{t.rigTitle}</span>
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-paper/60">
              {t.rigSub}
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-paper/20 sm:grid-cols-2 lg:grid-cols-3">
            {t.rigs.map((rig, i) => (
              <div key={i} className="bg-ink-2 p-6 md:p-8">
                <p className="font-mono text-xs font-bold tracking-widest text-blood">
                  [SYS_0{i + 1}]
                </p>
                <h3 className="display mt-2 text-lg text-acid md:text-xl">{rig.title}</h3>
                <p className="mt-3 font-mono text-sm leading-relaxed text-paper/70">
                  {rig.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FESTIVAL ======= */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="display max-w-5xl text-[9vw] leading-[0.95] md:text-6xl lg:text-7xl">
          {t.festTitle}
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-paper/80 md:text-base">
          {t.festSub}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.zones.map((zone) => (
            <div key={zone.slot} className="group">
              <AIImage slot={zone.slot} alt={zone.title} className="aspect-[4/3]" />
              <h3 className="display mt-3 text-lg group-hover:text-acid md:text-xl">
                {zone.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-paper/60">{zone.text}</p>
            </div>
          ))}
        </div>
        <Link
          href={`/${locale}/festival`}
          className="link-brutal mt-10 inline-block font-mono text-sm font-bold uppercase tracking-widest text-acid"
        >
          {t.festCta} →
        </Link>
      </section>

      {/* ======= JURY ======= */}
      <section className="border-y-2 border-paper/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <h2 className="display text-[9vw] leading-none text-outline-acid md:text-7xl">
            {t.juryTitle}
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-paper/80">
            {t.jurySub}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex aspect-[3/4] items-center justify-center border-2 border-dashed border-paper/30 bg-ink-2"
              >
                <span className="stamp text-sm md:text-base">{t.juryCard}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-paper/40">
            ▓▓▓ {t.jurySoon} ▓▓▓
          </p>
        </div>
      </section>

      {/* ======= NUMBERS ======= */}
      <section className="bg-acid text-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4 md:px-8">
          {t.numbers.map((item, i) => (
            <div key={i} className="text-center">
              <p className="display text-6xl md:text-7xl">{item.n}</p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======= PARTNERS ======= */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-[9vw] leading-none md:text-6xl">
              {t.partnersTitle}
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-paper/80 md:text-base">
              {t.partnersText}
            </p>
            <Link
              href={`/${locale}/partners`}
              className="display mt-8 inline-block border-4 border-paper px-6 py-4 text-lg transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-acid)]"
            >
              {t.partnersCta} →
            </Link>
          </div>
          <AIImage slot="expo-hall" alt="Expo zone" className="aspect-[4/3]" />
        </div>
      </section>

      {/* ======= FINAL CTA ======= */}
      <section className="border-t-2 border-paper/20">
        <Marquee
          items={[...t.ticker]}
          duration="20s"
          className="border-y-0 border-b-2 border-paper/20"
        />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-28">
          <p className="display text-[11vw] leading-[0.9] md:text-8xl">
            {t.finalTitle}
            <br />
            <span className="text-acid">{t.finalTitle2}</span>
          </p>
          <Link
            href={`/${locale}/register`}
            className="display mt-12 inline-block border-4 border-acid bg-acid px-10 py-5 text-xl text-ink transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-paper)] md:text-2xl"
          >
            {t.finalCta} →
          </Link>
        </div>
      </section>
    </>
  );
}
