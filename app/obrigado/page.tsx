import Image from "next/image";

const VIP_GROUP_URL = process.env.NEXT_PUBLIC_VIP_GROUP_URL ?? "#grupo-vip";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0b07] text-[#f7f2e9]">
      <header className="border-b border-[#3b2d1b] bg-[#0d0b07]/95 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Image src="/brand/logo-horizontal.png" alt="Destrava Delivery" width={190} height={45} className="h-auto w-[150px] sm:w-[190px]" priority />
          <span className="hidden items-center gap-2 rounded-full border border-[#5a431d] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7a72b] sm:flex"><span className="grid size-5 place-items-center rounded-full bg-[#f4b82b] text-[11px] font-black text-[#151006]">✓</span>Compra confirmada</span>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-[#f4b82b]"><span className="grid size-8 place-items-center rounded-full bg-[#f4b82b] text-lg font-black text-[#151006] shadow-[0_0_24px_rgba(244,184,43,0.35)]">✓</span><span>Sua vaga está garantida</span></div>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Parabéns pela sua compra.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#bdb5a8] sm:text-xl">Bem-vindo ao Destrava Delivery 2.0. Você acaba de confirmar sua presença em uma experiência criada para destravar o próximo nível do seu negócio.</p>
          <a href={VIP_GROUP_URL} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f4b82b] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#151006] transition hover:bg-[#ffd15a]">Acessar grupo VIP <span aria-hidden="true">→</span></a>
          <p className="mt-4 text-sm text-[#877e70]">É dentro do grupo que você recebe os próximos avisos, orientações e suporte.</p>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-8 rounded-full bg-[#d96a1d]/20 blur-3xl" />
          <Image src="/brand/thank-you-vip.png" alt="Comunidade VIP Destrava Delivery" width={1400} height={1400} className="relative h-auto w-full rounded-[2rem] border border-[#5a431d] shadow-[0_30px_100px_rgba(217,106,29,0.25)]" priority />
        </div>
      </section>

      <section className="border-y border-[#3b2d1b] bg-[#151109] px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Image src="/brand/thank-you-kit.png" alt="Kit do participante Destrava Delivery" width={2200} height={1200} className="h-auto w-full rounded-[1.5rem] border border-[#4e3a1e]" />
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#f4b82b]">Kit do participante</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Você vai viver essa experiência por inteiro.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#bdb5a8]">Preparamos um kit especial para acompanhar você durante o evento e deixar essa jornada ainda mais marcante.</p>
            <ul className="mt-8 space-y-4 text-[#eee6d8]">
              {["Caderno para suas ideias e decisões", "Garrafa para acompanhar os dois dias", "Ingresso e credencial do evento", "Materiais exclusivos do Destrava Delivery"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-[#f4b82b] text-[#151006]"><span aria-hidden="true">✓</span></span><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="grupo-vip" className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-[#5a431d] bg-gradient-to-br from-[#241707] to-[#120e08] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[#f4b82b]"><span className="grid size-8 place-items-center rounded-full border border-[#f4b82b] text-lg font-black">✓</span><span className="text-sm font-bold uppercase tracking-[0.24em]">Comunidade VIP</span></div>
            <h2 className="text-3xl font-black sm:text-4xl">Ficou com alguma dúvida?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#bdb5a8]">Entre no grupo VIP. Nosso suporte vai acompanhar você por lá e ajudar com qualquer dúvida sobre acesso, programação e tudo o que você precisa saber antes do evento.</p>
          </div>
          <a href={VIP_GROUP_URL} className="inline-flex items-center justify-center gap-3 rounded-full border border-[#f4b82b] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#f4b82b] transition hover:bg-[#f4b82b] hover:text-[#151006]">Entrar no grupo <span aria-hidden="true">→</span></a>
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-2 text-sm text-[#877e70]"><span aria-hidden="true">?</span> Se precisar, fale com o suporte dentro do grupo VIP.</div>
      </section>

      <footer className="border-t border-[#3b2d1b] px-6 py-8 text-center text-sm text-[#877e70]">Destrava Delivery 2.0 · Nos vemos no evento.</footer>
    </main>
  );
}
