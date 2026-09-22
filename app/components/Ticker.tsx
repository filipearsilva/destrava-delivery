import type { Icon } from "@phosphor-icons/react";

type TickerItem = {
  label: string;
  icon: Icon;
};

export default function Ticker({ items }: { items: TickerItem[] }) {
  const loop = [...items, ...items];

  return (
    <div className="-mx-6 overflow-hidden py-2 sm:-mx-10">
      <div className="-rotate-2">
        <div className="ticker-track gap-10 border-y border-gold/20 bg-panel/60 py-4">
          {loop.map(({ label, icon: Icon }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap"
            >
              <Icon weight="fill" className="h-5 w-5 text-gold" />
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                {label}
              </p>
              <span className="ml-8 text-gold/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
