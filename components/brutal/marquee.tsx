import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  duration?: string;
  separator?: string;
}

export function Marquee({
  items,
  className,
  duration = "28s",
  separator = "✦",
}: MarqueeProps) {
  const sequence = items.flatMap((item) => [item, separator]);
  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap border-y-2 border-paper/20 py-2 select-none",
        className
      )}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center">
            {sequence.map((chunk, i) => (
              <span key={`${copy}-${i}`} className="mx-4 font-mono text-sm font-bold uppercase tracking-widest md:text-base">
                {chunk}
              </span>
            ))}
          </span>
        ))}
      </div>
      <span className="sr-only">{items.join(" · ")}</span>
    </div>
  );
}
