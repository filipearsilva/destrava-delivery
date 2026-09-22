import type { Icon } from "@phosphor-icons/react";

type CardTickerItem = {
  label: string;
  icon: Icon;
};

export default function CardTicker({ items }: { items: CardTickerItem[] }) {
  return (
    <div className="-mx-6 flex flex-col gap-4">
      {[0, 1].map((linha) => (
        <div key={linha} className="relative overflow-x-clip">
          <div
            className="ticker-cards flex w-max gap-4"
            style={{ animationDirection: linha === 1 ? "reverse" : "normal" }}
          >
            {[...items, ...items].map((_, i) => {
              const index = (i + (linha === 1 ? Math.floor(items.length / 2) : 0)) % items.length;
              const item = items[index];
              return (
                <div
                  key={`${linha}-${i}`}
                  className="flex w-[19rem] shrink-0 items-center gap-4 rounded-2xl border border-panel-border bg-panel px-6 py-5 sm:w-[23rem] sm:gap-5 sm:px-8 sm:py-7"
                >
                  <item.icon
                    weight="duotone"
                    className="h-6 w-6 shrink-0 text-red-400"
                  />
                  <p className="text-[0.9375rem] leading-snug text-foreground/75 sm:text-base">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
