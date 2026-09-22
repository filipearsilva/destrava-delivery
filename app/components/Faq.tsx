"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Quando e onde é o Destrava Delivery 2.0?",
    a: "Nos dias 16 e 17 de novembro de 2026, das 9h às 18h, no Espaço Vitta Eventos, Av. Armando Ferrentini 159, Aclimação, São Paulo/SP.",
  },
  {
    q: "O que está incluso no meu ingresso?",
    a: "Acesso presencial aos 2 dias de imersão, conteúdo completo e kit do participante. O ingresso VIP Premium inclui também assento na frente do palco, área VIP, kit exclusivo, networking exclusivo e refeições exclusivas nos 2 dias.",
  },
  {
    q: "Os valores mudam conforme o tempo passa?",
    a: "Sim. Os ingressos são vendidos por lote: o valor sobe conforme os lotes se esgotam. Quanto antes você garantir sua vaga, mais barato paga.",
  },
  {
    q: "Posso ir acompanhado?",
    a: "Sim, o ingresso Duplo já inclui 2 acessos aos 2 dias de evento, ideal para levar um sócio ou gerente.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Cancelamentos são aceitos até 7 dias após a compra, desde que solicitados até 48 horas antes do início do evento.",
  },
  {
    q: "Posso editar os dados do participante depois da compra?",
    a: "Sim, uma vez, até 24 horas antes do início do evento.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-panel-border bg-panel"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-foreground">{item.q}</span>
              <span
                className={`shrink-0 text-2xl leading-none text-gold transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/70">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
