"use client";

import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import AutoplayVideo from "./AutoplayVideo";

type VideoItem = {
  src: string;
  label: string;
};

export default function VideoCarousel({ items }: { items: VideoItem[] }) {
  const [index, setIndex] = useState(0);
  const active = items[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + items.length) % items.length);
  };

  return (
    <div>
      <div className="relative mx-auto w-full max-w-[288px]">
        <div className="card-soft rounded-[2.5rem] border-4 border-panel-border bg-black p-2">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
            <div className="absolute top-0 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-black" />
            <AutoplayVideo
              key={active.src}
              src={active.src}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vídeo anterior"
              className="absolute top-1/2 -left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-panel-border bg-panel text-gold shadow-lg transition hover:bg-gold hover:text-black"
            >
              <CaretLeft weight="bold" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo vídeo"
              className="absolute top-1/2 -right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-panel-border bg-panel text-gold shadow-lg transition hover:bg-gold hover:text-black"
            >
              <CaretRight weight="bold" className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.label}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-panel-border"
              }`}
            />
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-foreground/40">
        {active.label}
      </p>
    </div>
  );
}
