"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";

const copy = {
  en: {
    name: "NAME / TEAM NAME",
    email: "EMAIL",
    division: "DIVISION",
    divisions: ["SCHOOL (UP TO 12TH GRADE)", "OPEN (UNDER 25)", "JUST VISITING", "COMPANY / PARTNER"],
    submit: "PUT ME ON THE LIST",
    note: "Opens your email client — the waitlist backend ships with the season announcement.",
  },
  bg: {
    name: "ИМЕ / ИМЕ НА ОТБОР",
    email: "ИМЕЙЛ",
    division: "ДИВИЗИЯ",
    divisions: ["УЧЕНИЧЕСКА (ДО 12 КЛАС)", "ОТВОРЕНА (ДО 25 Г.)", "САМО ПОСЕТИТЕЛ", "КОМПАНИЯ / ПАРТНЬОР"],
    submit: "ЗАПИШИ МЕ В ЛИСТАТА",
    note: "Отваря имейл клиента ти — бекендът на листата идва с обявяването на сезона.",
  },
} as const;

export function WaitlistForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [name, setName] = useState("");
  const [division, setDivision] = useState<string>(t.divisions[0]);

  const inputClass =
    "w-full border-2 border-paper/30 bg-transparent p-4 font-mono text-sm text-paper placeholder:text-paper/30 focus:border-acid focus:outline-none";

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent("NOT RIGGED Waitlist");
    const body = encodeURIComponent(`Name: ${name}\nDivision: ${division}`);
    window.location.href = `mailto:contact@devids.eu?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-4xl border-2 border-acid p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-acid">
            {t.name}
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Ada L."
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-acid">
            {t.division}
          </span>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className={`${inputClass} appearance-none bg-ink`}
          >
            {t.divisions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="display mt-8 w-full border-4 border-acid bg-acid px-6 py-4 text-lg text-ink transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-paper)] md:text-xl"
      >
        {t.submit} →
      </button>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-paper/40">
        {t.note}
      </p>
    </form>
  );
}
