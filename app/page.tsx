import Image from "next/image";
import {
  CalendarBlank,
  MapPin,
  ChartLineUp,
  GearSix,
  Wallet,
  Megaphone,
  Handshake,
  UsersThree,
  Target,
  Lightbulb,
  TrendUp,
  LockSimple,
  CheckCircle,
  ArrowRight,
  InstagramLogo,
  Fire,
  ChartLineDown,
  Ticket,
  ShieldWarning,
  Question,
  HandCoins,
  ShieldCheck,
  UsersFour,
  Gauge,
  Compass,
  PiggyBank,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import Countdown from "./components/Countdown";
import Faq from "./components/Faq";
import Reveal from "./components/Reveal";
import Ticker from "./components/Ticker";

const CHECKOUT_URL =
  "https://www.sympla.com.br/evento/destrava-delivery-2-0/3571158";
const LOTE_DEADLINE = "2026-11-10T23:59:59-03:00";

const PILARES = [
  {
    label: "Estratégia",
    text: "Pare de tomar decisões no achismo.",
    icon: ChartLineUp,
  },
  {
    label: "Operação",
    text: "Organize o negócio para crescer com mais eficiência.",
    icon: GearSix,
  },
  {
    label: "Financeiro",
    text: "Entenda onde está o seu lucro e onde ele está indo embora.",
    icon: Wallet,
  },
  {
    label: "Marketing",
    text: "Posicione seu delivery para atrair mais clientes.",
    icon: Megaphone,
  },
  {
    label: "Vendas",
    text: "Aprenda a criar oportunidades para vender mais.",
    icon: TrendUp,
  },
  {
    label: "Networking",
    text: "Conecte-se com quem também está no jogo.",
    icon: Handshake,
  },
];

const DORES = [
  { label: "Estratégia", text: "Toma decisão no achismo, sem enxergar o todo do negócio.", icon: Question },
  { label: "Operação", text: "Cada dia é apagar incêndio, sem processo que se repita.", icon: Fire },
  { label: "Financeiro", text: "Fatura, mas no fim do mês não sabe pra onde foi o lucro.", icon: ChartLineDown },
  { label: "Marketing", text: "Depende de cupom e impulsionamento só pra aparecer.", icon: Ticket },
  { label: "Vendas", text: "Não sabe criar oportunidade além do que a plataforma entrega.", icon: ShieldWarning },
  { label: "Networking", text: "Toca o negócio sozinho, sem trocar com quem já passou por isso.", icon: HandCoins },
];

const VIRADA = [
  { label: "Estratégia", text: "Decide com clareza, enxergando o negócio como um todo.", icon: Compass },
  { label: "Operação", text: "Tem processo que roda com ou sem você por perto.", icon: Gauge },
  { label: "Financeiro", text: "Sabe exatamente onde está o lucro, e onde ele escapa.", icon: PiggyBank },
  { label: "Marketing", text: "Constrói posicionamento próprio, não depende só de cupom.", icon: Megaphone },
  { label: "Vendas", text: "Cria oportunidade de venda além do que a plataforma entrega.", icon: TrendUp },
  { label: "Networking", text: "Tem uma rede de donos de delivery pra trocar experiência.", icon: UsersFour },
];

const CREDIBILIDADE = [
  { label: "Estratégias práticas", icon: Target },
  { label: "Network de alto nível", icon: UsersThree },
  { label: "Conteúdo aplicável", icon: Lightbulb },
  { label: "Resultados reais", icon: TrendUp },
];

const TICKETS = [
  {
    name: "Standard",
    price: "397",
    installment: "12x R$ 45,16",
    features: [
      "Acesso aos 2 dias de evento",
      "Conteúdo completo da imersão",
      "Kit participante",
    ],
  },
  {
    name: "Duplo",
    price: "597",
    installment: "12x R$ 67,92",
    highlight: true,
    features: [
      "2 ingressos",
      "Acesso aos 2 dias de evento",
      "Conteúdo completo da imersão",
      "Kit participante",
    ],
  },
  {
    name: "VIP Premium",
    price: "1.497",
    installment: "12x R$ 170,31",
    features: [
      "Assento privilegiado na frente do palco",
      "Acesso à área VIP",
      "Kit exclusivo",
      "Networking exclusivo",
      "Jantar exclusivo após o 1º dia",
      "Refeição exclusiva nos 2 dias",
    ],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
      <span className="h-px w-6 bg-gold/60" />
      {children}
      <span className="h-px w-6 bg-gold/60" />
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* HERO */}
      <section className="bg-noise relative overflow-hidden border-b border-panel-border px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* LEFT: content */}
          <div className="text-left">
            <Reveal>
              <Image
                src="/brand/logo.png"
                alt="Destrava Delivery"
                width={934}
                height={787}
                className="mb-8 h-[174px] w-auto"
                priority
              />
            </Reveal>
            <Reveal delay={60}>
              <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                <span className="h-px w-6 bg-gold/60" />
                São Paulo
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display max-w-xl text-4xl leading-[1.05] tracking-wide text-foreground sm:text-5xl">
                CONHECIMENTO, ESTRATÉGIA E CONEXÕES{" "}
                <span className="text-gold">
                  PARA TRANSFORMAR SEU DELIVERY!
                </span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-lg text-base text-foreground/70 sm:text-lg">
                Quem vive de delivery precisa{" "}
                <span className="text-gold">estar aqui</span>. Em 2 dias de
                imersão presencial, destrave seu delivery, aumente seus lucros
                e dependa menos da operação, ao lado de Vini Pires, mentor de
                Delivery e iFood que já ajudou mais de 1.000 empreendedores.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex w-fit flex-col gap-4 rounded-2xl border border-panel-border bg-panel px-8 py-5 sm:flex-row sm:gap-8">
                <div className="flex items-center gap-3 text-left">
                  <CalendarBlank weight="fill" className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50">
                      Data
                    </p>
                    <p className="font-semibold text-foreground">
                      16 e 17 de novembro de 2026
                    </p>
                  </div>
                </div>
                <div className="hidden h-8 w-px bg-panel-border sm:block" />
                <div className="flex items-center gap-3 text-left">
                  <MapPin weight="fill" className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50">
                      Local
                    </p>
                    <p className="font-semibold text-foreground">
                      Espaço Vitta Eventos, São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold uppercase tracking-wide text-black"
                >
                  Garanta seu ingresso
                  <ArrowRight weight="bold" className="h-5 w-5" />
                </a>
              </div>
            </Reveal>

          </div>

          {/* RIGHT: placeholder para imagem/manipulação que o Filipe vai subir */}
          <Reveal delay={160} className="hidden lg:block">
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-dashed border-panel-border bg-panel/40">
              <p className="px-8 text-center text-xs font-semibold uppercase tracking-widest text-foreground/30">
                Espaço reservado: imagem/manipulação a ser inserida
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TICKER — faixa diagonal entre hero e mentor, por cima das duas seções */}
      <div className="relative z-20 -mt-8 mb-[-2rem] sm:-mt-10">
        <Reveal delay={420}>
          <Ticker items={CREDIBILIDADE} />
        </Reveal>
      </div>

      {/* MENTOR */}
      <section className="relative border-b border-panel-border px-6 pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
          <Reveal>
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-2 border-gold/60 bg-panel font-display text-4xl text-gold">
              VP
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Eyebrow>Quem está por trás</Eyebrow>
              <h2 className="font-display text-3xl text-foreground">
                Vini Pires
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/70">
                Mentor de Delivery e iFood, Vini Pires já ajudou mais de 1.000
                empreendedores a enxergarem seus negócios com mais estratégia,
                lucro e clareza. Foi dessa vivência no mercado e da vontade de
                compartilhar conhecimento que nasceu o Destrava Delivery: um
                evento para quem quer sair do improviso e alcançar um novo
                nível.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>O que você vai destravar</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            Você não vai sair do Destrava do mesmo jeito que entrou
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className="card-soft h-full rounded-2xl border border-panel-border bg-panel p-8">
                <p.icon weight="duotone" className="h-8 w-8 text-gold" />
                <p className="font-display mt-3 text-xl text-gold">
                  {p.label}
                </p>
                <p className="mt-2 text-sm text-foreground/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOR */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>A verdade</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            Quem toca o delivery sozinho, sempre esbarra no mesmo roteiro
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col gap-3">
            <Ticker
              items={DORES.map((d) => ({ label: d.text, icon: d.icon }))}
              diagonal={false}
              direction="left"
              durationSeconds={48}
              tone="red"
            />
            <Ticker
              items={DORES.map((d) => ({ label: d.label }))}
              diagonal={false}
              direction="right"
              durationSeconds={40}
              tone="red"
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DORES.map((d, i) => (
            <Reveal key={d.label} delay={i * 70}>
              <div className="card-soft flex h-full flex-col gap-3 rounded-2xl border border-panel-border bg-panel p-6">
                <d.icon weight="duotone" className="h-7 w-7 text-red-400" />
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
                  {d.label}
                </p>
                <p className="text-sm text-foreground/70">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIRADA */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>A virada</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            É isso que o Destrava Delivery entrega em 2 dias
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VIRADA.map((v, i) => (
            <Reveal key={v.label} delay={i * 70}>
              <div className="card-soft flex h-full flex-col gap-3 rounded-2xl border border-panel-border bg-panel p-6">
                <v.icon weight="duotone" className="h-7 w-7 text-gold" />
                <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                  {v.label}
                </p>
                <p className="text-sm text-foreground/80">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESULTADOS / DEPOIMENTOS */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <Eyebrow>Resultados reais</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-3xl text-foreground sm:text-4xl">
            O que quem já passou pelo Destrava está dizendo
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-panel-border bg-panel/60 p-8">
                <Quotes weight="fill" className="h-7 w-7 text-gold/70" />
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                  Depoimento em breve
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PALESTRANTES */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <Eyebrow>Grandes nomes, grandes insights</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-3xl text-foreground sm:text-4xl">
            Vini Pires e o time de convidados
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-panel-border">
            <Image
              src="/brand/palestrantes.jpg"
              alt="Vini Pires e os palestrantes convidados do Destrava Delivery 2.0"
              width={900}
              height={664}
              className="w-full h-auto"
            />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/40">
            <LockSimple weight="fill" className="h-4 w-4 text-gold/70" />
            Nomes e credenciais de cada convidado confirmados em breve
          </p>
        </Reveal>
      </section>

      {/* INGRESSOS */}
      <section
        className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32"
        id="ingressos"
      >
        <Reveal>
          <Eyebrow>1º lote</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            Garanta o seu antes da virada de lote
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-foreground/60">
            Lote atual encerra em <Countdown target={LOTE_DEADLINE} />
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {TICKETS.map((ticket, i) => (
            <Reveal key={ticket.name} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-panel p-8 ${
                  ticket.highlight
                    ? "card-glow-primary border-gold/50"
                    : "card-soft border-panel-border"
                }`}
              >
                {ticket.highlight && (
                  <span className="btn-gold mb-4 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase text-black">
                    Mais escolhido
                  </span>
                )}
                <p className="font-display text-xl text-foreground">
                  {ticket.name}
                </p>
                <p className="mt-4">
                  <span className="text-sm text-foreground/50">R$ </span>
                  <span className="font-display text-4xl text-gold">
                    {ticket.price}
                  </span>
                </p>
                <p className="text-xs text-foreground/50">
                  em {ticket.installment}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground/70">
                  {ticket.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle
                        weight="fill"
                        className="h-5 w-5 shrink-0 text-gold"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wide ${
                    ticket.highlight ? "btn-gold text-black" : "btn-gold-outline text-gold"
                  }`}
                >
                  Garantir vaga
                  <ArrowRight weight="bold" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCAL */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Onde será</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            Espaço Vitta Eventos, em São Paulo
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={140}>
            <div className="flex h-full flex-col justify-center gap-6 rounded-2xl border border-panel-border bg-panel p-8">
              <div className="flex items-start gap-3">
                <MapPin weight="fill" className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">
                    Endereço
                  </p>
                  <p className="font-semibold text-foreground">
                    Av. Armando Ferrentini, 159, Aclimação, São Paulo/SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarBlank weight="fill" className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">
                    Data e horário
                  </p>
                  <p className="font-semibold text-foreground">
                    16 e 17 de novembro de 2026, das 9h às 18h
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Armando+Ferrentini%2C+159%2C+Aclima%C3%A7%C3%A3o%2C+S%C3%A3o+Paulo+-+SP"
                target="_blank"
                rel="noreferrer"
                className="btn-gold-outline mt-2 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-gold"
              >
                Como chegar
                <ArrowRight weight="bold" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="h-80 w-full overflow-hidden rounded-2xl border border-panel-border lg:h-full">
              <iframe
                title="Mapa: Espaço Vitta Eventos"
                src="https://www.google.com/maps?q=Av.+Armando+Ferrentini,+159,+Aclima%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Dúvidas</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto max-w-2xl text-center text-3xl text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={160} className="mt-12">
          <Faq />
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="bg-noise border-t border-panel-border px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl text-foreground sm:text-4xl">
            O conhecimento muda o jogo.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            16 e 17 de novembro, em São Paulo. Vagas limitadas.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold uppercase tracking-wide text-black"
          >
            Garanta seu ingresso
            <ArrowRight weight="bold" className="h-5 w-5" />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-panel-border px-6 py-16 text-center text-xs text-foreground/40">
        <Image
          src="/brand/logo.png"
          alt="Destrava Delivery"
          width={934}
          height={787}
          className="mx-auto mb-4 h-20 w-auto"
        />
        <a
          href="https://www.instagram.com/vinipiresoficial"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:underline"
        >
          <InstagramLogo weight="fill" className="h-4 w-4" />
          @vinipiresoficial
        </a>
        <p className="mt-4">
          Ingressos processados pela plataforma oficial Sympla.
        </p>
      </footer>
    </div>
  );
}
