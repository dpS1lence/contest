"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  items: { href: string; label: string }[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="border-2 border-paper/30 px-2 py-1 font-mono text-xs font-bold uppercase text-paper"
      >
        {open ? "[X]" : "[=]"}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-14 z-50 border-b-2 border-paper/20 bg-ink">
          <nav className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-t-2 border-paper/10 px-6 py-4 text-xl text-paper hover:bg-acid hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
