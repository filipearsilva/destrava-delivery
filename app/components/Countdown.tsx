"use client";

import { useEffect, useState } from "react";

function getRemaining(target: Date) {
  const total = target.getTime() - Date.now();
  const clamped = Math.max(total, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const targetDate = new Date(target);
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(
    null
  );

  useEffect(() => {
    setRemaining(getRemaining(targetDate));
    const id = setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!remaining) {
    return <span className="text-gold font-semibold">carregando…</span>;
  }

  if (remaining.total <= 0) {
    return <span className="text-gold font-semibold">Lote encerrado</span>;
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="font-semibold text-gold tabular-nums">
      {remaining.days}d {pad(remaining.hours)}h {pad(remaining.minutes)}m {pad(remaining.seconds)}s
    </span>
  );
}
