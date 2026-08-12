import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";

const EXTENSIONS = ["webp", "png", "jpg", "jpeg"];

interface AIImageProps {
  slot: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Server component for AI-generated imagery. Drop a file named
 * `public/images/<slot>.(webp|png|jpg)` and it renders automatically;
 * until then it shows a brutalist placeholder with the slot name.
 * Prompts for every slot live in IMAGE_PROMPTS.md at the repo root.
 */
export function AIImage({ slot, alt, className, imgClassName }: AIImageProps) {
  const dir = path.join(process.cwd(), "public", "images");
  const ext = EXTENSIONS.find((e) => fs.existsSync(path.join(dir, `${slot}.${e}`)));

  if (ext) {
    return (
      <div className={cn("relative overflow-hidden border-2 border-paper/20", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${slot}.${ext}`}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-2 border-dashed border-acid/50 bg-ink-2",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, var(--color-acid) 0 2px, transparent 2px 14px)",
        }}
      />
      <div className="relative p-4 text-center font-mono text-[10px] uppercase tracking-widest text-acid/80 md:text-xs">
        <span className="block text-2xl">▚</span>
        [IMG_SLOT: {slot}]
        <span className="mt-1 block text-paper/40">/public/images/{slot}.webp</span>
      </div>
    </div>
  );
}
