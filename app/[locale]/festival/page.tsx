import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AIImage } from "@/components/brutal/ai-image";
import { Marquee } from "@/components/brutal/marquee";
import { isLocale, type Locale } from "@/lib/i18n/config";

const copy = {
  en: {
    title: "THE FESTIVAL",
    kicker: "TWO DAYS · SPRING 2027 · CITY: TBA",
    intro:
      "The final of NOT RIGGED is not a ceremony — it's a festival. Free entry for visitors. Loud, live and public, because judging done in front of a full hall is judging that can't hide.",
    ticker: ["DAY 1 — THE PROJECTS", "DAY 2 — THE FINAL", "FREE ENTRY", "LIVE SCORING", "EXPO · ARCADE · MERCH · SHOWS"],
    day1Title: "DAY 1 — THE PROJECTS",
    day1: [
      { time: "10:00", item: "Doors open. Expo zone, arcade and merch shop go live." },
      { time: "10:30", item: "Opening. Short. We promise." },
      { time: "11:00", item: "PROJECT ALLEY — every finalist team at its own booth. Live demos all day. The jury and the audience walk, touch, ask." },
      { time: "15:00", item: "Semifinal stage demos — 6 minutes per team on the main stage." },
      { time: "18:00", item: "Finalists for Day 2 announced — with scores shown on screen." },
      { time: "19:00", item: "Evening block: lightning talks from the jury, music, networking. No ties allowed." },
    ],
    day2Title: "DAY 2 — THE FINAL",
    day2: [
      { time: "10:00", item: "Doors open. Zones live all day." },
      { time: "11:00", item: "Showcase block — performances by schools and studios from the Classes network." },
      { time: "13:00", item: "THE FINAL — top teams demo on the main stage. Panel scores appear on screen after every defense. Livestreamed." },
      { time: "17:00", item: "Audience award voting closes (via the site, QR on every screen)." },
      { time: "18:00", item: "Award ceremony. Confetti budget: irresponsible." },
      { time: "19:00", item: "Closing party." },
    ],
    zonesTitle: "THE ZONES",
    zones: [
      { slot: "zone-main-stage", title: "MAIN STAGE", text: "Demos, live scoring, awards, shows. The heart of the two days." },
      { slot: "zone-project-alley", title: "PROJECT ALLEY", text: "Science-fair energy: every finalist has a booth, every demo is touchable." },
      { slot: "zone-expo", title: "EXPO ZONE", text: "IT companies with booths, internship offers and recruiters who actually write code." },
      { slot: "zone-arcade", title: "ARCADE", text: "Typing races, debug duels, retro cabinets. Small prizes all day long." },
      { slot: "zone-merch", title: "MERCH SHOP", text: "Official NOT RIGGED drops. Quantities limited, statement unlimited." },
      { slot: "zone-showcase", title: "SHOWCASE", text: "Dance and music schools from the Classes platform performing between blocks." },
    ],
    visitTitle: "VISITING",
    visit: [
      "Free entry with online registration.",
      "Location: Sofia or Varna — announced with the season details.",
      "The final is livestreamed. The scores are public either way.",
    ],
  },
  bg: {
    title: "ФЕСТИВАЛЪТ",
    kicker: "ДВА ДНИ · ПРОЛЕТ 2027 · ГРАД: ОЧАКВАЙТЕ",
    intro:
      "Финалът на NOT RIGGED не е церемония — а фестивал. Свободен вход за посетители. Шумен, на живо и публичен, защото журиране пред пълна зала е журиране, което не може да се скрие.",
    ticker: ["ДЕН 1 — ПРОЕКТИТЕ", "ДЕН 2 — ФИНАЛЪТ", "СВОБОДЕН ВХОД", "ОЦЕНКИ НА ЖИВО", "ЕКСПО · АРКАДА · МЪРЧ · ШОУ"],
    day1Title: "ДЕН 1 — ПРОЕКТИТЕ",
    day1: [
      { time: "10:00", item: "Отваряне. Експо зоната, аркадата и мърч магазинът тръгват." },
      { time: "10:30", item: "Откриване. Кратко. Обещаваме." },
      { time: "11:00", item: "АЛЕЯ НА ПРОЕКТИТЕ — всеки финалист на собствен щанд. Демота на живо цял ден. Журито и публиката обикалят, пипат, питат." },
      { time: "15:00", item: "Полуфинални демота на сцена — 6 минути на отбор на главната сцена." },
      { time: "18:00", item: "Обявяване на финалистите за Ден 2 — с оценки, показани на екрана." },
      { time: "19:00", item: "Вечерен блок: lightning talks от журито, музика, нетуъркинг. Вратовръзки — забранени." },
    ],
    day2Title: "ДЕН 2 — ФИНАЛЪТ",
    day2: [
      { time: "10:00", item: "Отваряне. Зоните работят цял ден." },
      { time: "11:00", item: "Шоукейс блок — представления на школи и студиа от мрежата на Classes." },
      { time: "13:00", item: "ФИНАЛЪТ — топ отборите демонстрират на главната сцена. Оценките на панела излизат на екрана след всяка защита. На живо и в стрийм." },
      { time: "17:00", item: "Затваря гласуването за наградата на публиката (през сайта, QR на всеки екран)." },
      { time: "18:00", item: "Награждаване. Бюджет за конфети: безотговорен." },
      { time: "19:00", item: "Закриващо парти." },
    ],
    zonesTitle: "ЗОНИТЕ",
    zones: [
      { slot: "zone-main-stage", title: "ГЛАВНА СЦЕНА", text: "Демота, оценки на живо, награди, шоу. Сърцето на двата дни." },
      { slot: "zone-project-alley", title: "АЛЕЯ НА ПРОЕКТИТЕ", text: "Science-fair енергия: всеки финалист има щанд, всяко демо се пипа." },
      { slot: "zone-expo", title: "ЕКСПО ЗОНА", text: "ИТ компании с щандове, предложения за стажове и рекрутери, които реално пишат код." },
      { slot: "zone-arcade", title: "АРКАДА", text: "Typing надпревари, debug дуели, ретро машини. Малки награди цял ден." },
      { slot: "zone-merch", title: "МЪРЧ МАГАЗИН", text: "Официални NOT RIGGED дропове. Количества — лимитирани, позиция — безлимитна." },
      { slot: "zone-showcase", title: "ШОУКЕЙС", text: "Танцови и музикални школи от платформата Classes между блоковете." },
    ],
    visitTitle: "ЗА ПОСЕТИТЕЛИ",
    visit: [
      "Свободен вход с онлайн регистрация.",
      "Локация: София или Варна — обявява се с детайлите за сезона.",
      "Финалът се стриймва. Оценките са публични така или иначе.",
    ],
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "bg" ? "Фестивалът" : "The Festival" };
}

function Schedule({ title, rows }: { title: string; rows: readonly { time: string; item: string }[] }) {
  return (
    <div className="border-2 border-paper/30">
      <h2 className="display border-b-2 border-paper/30 bg-acid p-4 text-xl text-ink md:text-2xl">
        {title}
      </h2>
      <ul>
        {rows.map((row, i) => (
          <li key={i} className="flex gap-4 border-t border-paper/15 p-4 font-mono text-sm first:border-t-0 md:text-base">
            <span className="shrink-0 font-bold text-acid">{row.time}</span>
            <span className="text-paper/80">{row.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale as Locale];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-8 md:pt-24">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-acid">
          {t.kicker}
        </p>
        <h1 className="display mt-4 text-[13vw] leading-none md:text-8xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl font-mono text-sm leading-relaxed text-paper/80 md:text-base">
          {t.intro}
        </p>
      </div>

      <AIImage
        slot="festival-hall"
        alt="NOT RIGGED festival hall"
        className="mx-auto mt-12 aspect-[21/9] max-w-7xl"
      />

      <Marquee items={[...t.ticker]} className="mt-12 bg-acid text-ink border-y-2 border-ink" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Schedule title={t.day1Title} rows={t.day1} />
          <Schedule title={t.day2Title} rows={t.day2} />
        </div>

        <h2 className="display mt-20 text-[9vw] leading-none text-outline md:text-6xl">
          {t.zonesTitle}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.zones.map((zone) => (
            <div key={zone.slot}>
              <AIImage slot={zone.slot} alt={zone.title} className="aspect-[4/3]" />
              <h3 className="display mt-3 text-lg md:text-xl">{zone.title}</h3>
              <p className="mt-1 font-mono text-sm text-paper/60">{zone.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-2 border-acid p-6 md:p-10">
          <h2 className="display text-2xl text-acid md:text-3xl">{t.visitTitle}</h2>
          <ul className="mt-4 space-y-2">
            {t.visit.map((item, i) => (
              <li key={i} className="flex gap-3 font-mono text-sm text-paper/80 md:text-base">
                <span className="text-acid">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
