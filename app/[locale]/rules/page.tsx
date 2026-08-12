import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";

const copy = {
  en: {
    title: "THE RULES",
    kicker: "PUBLISHED BEFORE REGISTRATION. LIKE IT SHOULD BE.",
    intro:
      "Everything below is final before a single team registers. No mid-season rule changes, no 'jury discretion', no fine print. If we amend anything, the change log is public.",
    whoTitle: "WHO CAN ENTER",
    who: [
      "Solo or teams of up to 3 people.",
      "Two divisions: School (up to 12th grade) and Open (under 25).",
      "Any stack, any platform. Web, mobile, AI, games, hardware — if it runs, it competes.",
      "The project must be yours. AI tools are allowed as tools — undeclared plagiarism and purchased projects mean disqualification and a public note.",
      "Your code stays yours. We claim zero IP over your work. Ever.",
    ],
    rubricTitle: "THE RUBRIC",
    rubricSub: "100 points. Weights fixed and public. No 'overall impression'.",
    rubric: [
      { criterion: "Technical execution", weight: 25, note: "Architecture, code quality, difficulty of what was actually built" },
      { criterion: "Problem & impact", weight: 20, note: "Is this real? Does anyone need it?" },
      { criterion: "Completeness & working demo", weight: 15, note: "Does it run, end to end, in front of us?" },
      { criterion: "UX & design", weight: 15, note: "Would a stranger survive using it?" },
      { criterion: "Innovation", weight: 15, note: "What's new here — tech, approach, or angle?" },
      { criterion: "Defense", weight: 10, note: "Can you explain your own decisions?" },
    ],
    roundsTitle: "THE ROUNDS",
    rounds: [
      {
        title: "ROUND 1 — THE BLIND ROUND (ONLINE)",
        text: "You submit: repo access, a 3-minute demo video, a short write-up. Everything is anonymized — judges see no names, schools or cities. Each project is scored independently by 3+ engineers against the rubric. Scores are z-score normalized per judge, so one harsh or generous judge can't move the board. The formula is published on this page before the season starts. Every project — advancing or not — receives written feedback.",
      },
      {
        title: "ROUND 2 — THE FESTIVAL FINAL (LIVE)",
        text: "Finalists demo on the main stage in front of the audience and a panel of founders and operators. The stage panel scores product, impact and defense; your technical score from the blind round carries over with a fixed, pre-published weight. Panel scores appear on screen in real time, after every single defense.",
      },
    ],
    juryTitle: "JURY INTEGRITY",
    jury: [
      "Every judge signs a public conflict-of-interest declaration, listed on this site.",
      "A judge never scores a project connected to their company, school, or mentorship. Reassignment is automatic.",
      "Sponsors get booths and visibility. Sponsors get zero influence on scoring. This is a written rule, not a vibe.",
      "The audience award is a separate prize — audience votes never touch the main ranking.",
    ],
    transparencyTitle: "AFTER THE FINAL",
    transparency: [
      "Within 7 days: full score dump — every project, every criterion, every (anonymized) judge score — published on this site, permanently.",
      "Appeals: 72-hour window, written response to every appeal, both published.",
    ],
    disclaimer: "Season 1 details (dates, city, prize fund) will be locked and published here before registration opens.",
  },
  bg: {
    title: "ПРАВИЛАТА",
    kicker: "ПУБЛИКУВАНИ ПРЕДИ РЕГИСТРАЦИЯТА. КАКТО ТРЯБВА ДА БЪДЕ.",
    intro:
      "Всичко по-долу е финално преди първият отбор да се е регистрирал. Без промени по средата на сезона, без «по преценка на журито», без дребен шрифт. Ако променим нещо, change log-ът е публичен.",
    whoTitle: "КОЙ МОЖЕ ДА УЧАСТВА",
    who: [
      "Самостоятелно или отбори до 3-ма души.",
      "Две дивизии: Ученическа (до 12 клас) и Отворена (до 25 г.).",
      "Всякакъв стек, всякаква платформа. Web, mobile, AI, игри, хардуер — щом работи, се състезава.",
      "Проектът трябва да е твой. AI инструментите са позволени като инструменти — недекларирано плагиатство и купени проекти значат дисквалификация и публична бележка.",
      "Кодът ти остава твой. Не претендираме за никакви права върху работата ти. Никога.",
    ],
    rubricTitle: "РУБРИКАТА",
    rubricSub: "100 точки. Фиксирани и публични тежести. Без «общо впечатление».",
    rubric: [
      { criterion: "Техническо изпълнение", weight: 25, note: "Архитектура, качество на кода, трудност на реално построеното" },
      { criterion: "Проблем и стойност", weight: 20, note: "Истинско ли е? Някой има ли нужда от него?" },
      { criterion: "Завършеност и работещо демо", weight: 15, note: "Работи ли, от край до край, пред нас?" },
      { criterion: "UX и дизайн", weight: 15, note: "Би ли оцелял непознат човек, използвайки го?" },
      { criterion: "Иновативност", weight: 15, note: "Кое е новото тук — технология, подход или ъгъл?" },
      { criterion: "Защита", weight: 10, note: "Можеш ли да обясниш собствените си решения?" },
    ],
    roundsTitle: "КРЪГОВЕТЕ",
    rounds: [
      {
        title: "КРЪГ 1 — СЛЕПИЯТ КРЪГ (ОНЛАЙН)",
        text: "Подаваш: достъп до репото, 3-минутно демо видео, кратко описание. Всичко е анонимизирано — журито не вижда имена, училища или градове. Всеки проект се оценява независимо от 3+ инженери по рубриката. Оценките се нормализират (z-score) по журьор, така че един строг или щедър журьор не може да размести класирането. Формулата се публикува на тази страница преди началото на сезона. Всеки проект — продължаващ или не — получава писмена обратна връзка.",
      },
      {
        title: "КРЪГ 2 — ФЕСТИВАЛНИЯТ ФИНАЛ (НА ЖИВО)",
        text: "Финалистите демонстрират на главната сцена пред публиката и панел от фаундъри и оператори. Сценичният панел оценява продукт, стойност и защита; техническата ти оценка от слепия кръг се пренася с фиксирана, предварително публикувана тежест. Оценките на панела излизат на екрана в реално време, след всяка една защита.",
      },
    ],
    juryTitle: "ИНТЕГРИТЕТ НА ЖУРИТО",
    jury: [
      "Всеки журьор подписва публична декларация за конфликт на интереси, качена на този сайт.",
      "Журьор никога не оценява проект, свързан с неговата компания, училище или менторство. Преразпределението е автоматично.",
      "Спонсорите получават щандове и видимост. Спонсорите получават нула влияние върху оценяването. Това е писано правило, не настроение.",
      "Наградата на публиката е отделна награда — гласовете на публиката никога не докосват основното класиране.",
    ],
    transparencyTitle: "СЛЕД ФИНАЛА",
    transparency: [
      "До 7 дни: пълно публикуване — всеки проект, всеки критерий, всяка (анонимизирана) оценка на журьор — на този сайт, завинаги.",
      "Обжалвания: 72-часов прозорец, писмен отговор на всяко обжалване, като и двете се публикуват.",
    ],
    disclaimer: "Детайлите за Сезон 1 (дати, град, награден фонд) ще бъдат заключени и публикувани тук преди отварянето на регистрацията.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "bg" ? "Правила" : "Rules" };
}

export default async function RulesPage({
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

      {/* Who */}
      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.whoTitle}</h2>
      <ul className="mt-6 max-w-4xl space-y-3">
        {t.who.map((item, i) => (
          <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed text-paper/80 md:text-base">
            <span className="text-acid">▸</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Rubric */}
      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.rubricTitle}</h2>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-paper/50">
        {t.rubricSub}
      </p>
      <div className="mt-6 max-w-4xl overflow-x-auto">
        <table className="w-full border-2 border-paper/30 font-mono text-sm">
          <tbody>
            {t.rubric.map((row, i) => (
              <tr key={i} className="border-t-2 border-paper/20 first:border-t-0">
                <td className="display w-20 border-r-2 border-paper/20 bg-ink-2 p-4 text-center text-2xl text-acid md:text-3xl">
                  {row.weight}
                </td>
                <td className="p-4">
                  <span className="font-bold uppercase">{row.criterion}</span>
                  <span className="mt-1 block text-paper/50">{row.note}</span>
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-paper/30 bg-acid text-ink">
              <td className="display w-20 p-4 text-center text-2xl md:text-3xl">100</td>
              <td className="p-4 font-bold uppercase">TOTAL / ОБЩО</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Rounds */}
      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.roundsTitle}</h2>
      <div className="mt-6 max-w-4xl space-y-6">
        {t.rounds.map((round, i) => (
          <div key={i} className="border-2 border-paper/30 p-6 md:p-8">
            <h3 className="display text-lg md:text-xl">{round.title}</h3>
            <p className="mt-3 font-mono text-sm leading-relaxed text-paper/70 md:text-base">
              {round.text}
            </p>
          </div>
        ))}
      </div>

      {/* Jury integrity */}
      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.juryTitle}</h2>
      <ul className="mt-6 max-w-4xl space-y-3">
        {t.jury.map((item, i) => (
          <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed text-paper/80 md:text-base">
            <span className="text-blood">▸</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Transparency */}
      <h2 className="display mt-16 text-3xl text-acid md:text-4xl">{t.transparencyTitle}</h2>
      <ul className="mt-6 max-w-4xl space-y-3">
        {t.transparency.map((item, i) => (
          <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed text-paper/80 md:text-base">
            <span className="text-acid">▸</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="dashed-y mt-16 pt-6 font-mono text-xs uppercase tracking-widest text-paper/40">
        {t.disclaimer}
      </p>
    </div>
  );
}
