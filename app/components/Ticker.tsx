import type { Icon } from "@phosphor-icons/react";

type TickerItem = {
  label: string;
  icon?: Icon;
};

export default function Ticker({
  items,
  diagonal = true,
  direction = "left",
  durationSeconds = 22,
  tone = "gold",
}: {
  items: TickerItem[];
  diagonal?: boolean;
  direction?: "left" | "right";
  durationSeconds?: number;
  tone?: "gold" | "red";
}) {
  const loop = [...items, ...items];
  const accent = tone === "red" ? "text-red-400" : "text-gold";
  const dotAccent = tone === "red" ? "text-red-400/40" : "text-gold/40";
  const border = tone === "red" ? "border-red-400/20" : "border-gold/20";

  return (
    <div
      className="-mx-6 overflow-hidden"
    >
      <div className={diagonal ? "-rotate-2" : ""}>
        <div
          className={`ticker-track gap-10 border-y ${border} bg-panel/60 py-4`}
          style={{
            animationDuration: `${durationSeconds}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {loop.map(({ label, icon: ItemIcon }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap"
            >
              {ItemIcon && (
                <ItemIcon weight="fill" className={`h-5 w-5 ${accent}`} />
              )}
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                {label}
              </p>
              <span className={`ml-8 ${dotAccent}`}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
