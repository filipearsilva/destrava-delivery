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
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import Countdown from "./components/Countdown";
import VideoCarousel from "./components/VideoCarousel";
import Faq from "./components/Faq";
import Reveal from "./components/Reveal";
import Ticker from "./components/Ticker";
import CardTicker from "./components/CardTicker";

const CHECKOUT_URL =
  "https://www.sympla.com.br/evento/destrava-delivery-2-0/3571158";
const LOTE_DEADLINE = "2026-11-10T23:59:59-03:00";

const PILARES = [
  {
    label: "Estratégia",
    text: "Pare de operar no escuro e enxergue os gargalos que travam o negócio.",
    icon: ChartLineUp,
  },
  {
    label: "Operação",
    text: "Monte processos pra o delivery funcionar sem depender de você o tempo todo.",
    icon: GearSix,
  },
  {
    label: "Financeiro",
    text: "Faturamento não é lucro. Entenda margem, custo e pra onde o dinheiro vai.",
    icon: Wallet,
  },
  {
    label: "Marketing",
    text: "Pare de depender só de cupom e plataforma pra aparecer.",
    icon: Megaphone,
  },
  {
    label: "Vendas",
    text: "Transforme mais oportunidades em pedidos, além do que a plataforma entrega.",
    icon: TrendUp,
  },
  {
    label: "Networking",
    text: "Converse com quem vive os mesmos desafios que você todo dia.",
    icon: Handshake,
  },
];

const DORES = [
  { label: "Estratégia", text: "Você vende, compra, resolve funcionário, responde cliente e decide tudo no achismo.", icon: Question },
  { label: "Operação", text: "Cada dia é apagar incêndio, sem processo que rode sem você por perto.", icon: Fire },
  { label: "Financeiro", text: "Fatura tudo isso e no fim do mês se pergunta por que o dinheiro não sobra.", icon: ChartLineDown },
  { label: "Marketing", text: "Depende de cupom e impulsionamento só pra continuar aparecendo.", icon: Ticket },
  { label: "Vendas", text: "Não sabe criar oportunidade além do que a plataforma entrega.", icon: ShieldWarning },
  { label: "Networking", text: "Toca o negócio sozinho, sem trocar com quem já passou por isso.", icon: HandCoins },
];

const VIRADA = [
  { label: "Estratégia", before: "Decisão no achismo", after: "Decisão baseada no negócio", icon: Compass },
  { label: "Operação", before: "Apagar incêndio", after: "Processo que funciona", icon: Gauge },
  { label: "Financeiro", before: "Faturamento sem clareza", after: "Visão real de margem e lucro", icon: PiggyBank },
  { label: "Marketing", before: "Depender de cupom", after: "Construir demanda própria", icon: Megaphone },
  { label: "Vendas", before: "Esperar pedido", after: "Criar oportunidade nova", icon: TrendUp },
  { label: "Networking", before: "Resolver tudo sozinho", after: "Trocar com quem também está no jogo", icon: UsersFour },
];

const CREDIBILIDADE = [
  { label: "Estratégia prática pro delivery", icon: Target },
  { label: "Empresários trocando experiência real", icon: UsersThree },
  { label: "Conteúdo direto da operação", icon: Lightbulb },
  { label: "2 dias fora do escritório", icon: TrendUp },
];

const VIDEOS = [
  { src: "/video/ultima-edicao.mp4", label: "Vídeo oficial da 1ª edição do Destrava Delivery" },
  { src: "/video/depoimento-1.mp4", label: "Recado do Vini Pires sobre o Destrava Delivery" },
  { src: "/video/depoimento-2.mp4", label: "Recado do Vini Pires sobre o Destrava Delivery" },
];

const E_PARA_VOCE = [
  "Seu delivery fatura, mas o lucro não acompanha.",
  "Você ainda precisa estar em tudo pro negócio funcionar.",
  "Sua operação vive apagando incêndio.",
  "Você depende demais das plataformas pra gerar venda.",
  "Você trabalha muito, mas sente que não cresce com previsibilidade.",
  "Você quer deixar de ser só operador e agir como empresário.",
];

const NAO_E_PARA = [
  "Você não tem delivery nem trabalha com gestão de restaurante.",
  "Não está disposto a rever como opera o próprio negócio.",
  "Está plenamente satisfeito com o lucro que tem hoje.",
];

const TODOS_BENEFICIOS = [
  "Acesso aos 2 dias de evento",
  "Conteúdo completo da imersão",
  "Kit participante",
  "2 ingressos",
  "Assento privilegiado na frente do palco",
  "Acesso à área VIP",
  "Kit exclusivo",
  "Networking exclusivo",
  "Jantar exclusivo após o 1º dia",
  "Refeição exclusiva nos 2 dias",
];

const TICKETS = [
  {
    name: "Standard",
    tagline: "Para quem quer dominar o conteúdo.",
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
    tagline: "Para quem não quer voltar pra operação sozinho.",
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
    tagline: "Para quem quer estar mais perto do palco, dos especialistas e das conexões certas.",
    price: "1.497",
    installment: "12x R$ 170,31",
    features: [
      "Acesso aos 2 dias de evento",
      "Conteúdo completo da imersão",
      "Assento privilegiado na frente do palco",
      "Acesso à área VIP",
      "Kit exclusivo",
      "Networking exclusivo",
      "Jantar exclusivo após o 1º dia",
      "Refeição exclusiva nos 2 dias",
    ],
  },
];

function Eyebrow({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`mb-4 flex w-fit items-center gap-2 text-xs font-semibold tracking-[0.3em] text-gold/70 uppercase ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      {children}
    </p>
  );
}

function Heading({
  children,
  className = "",
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <h2
      className={`font-display mx-auto max-w-2xl text-3xl leading-tight text-foreground/90 sm:text-4xl ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* FAIXA DE LOTE */}
      <div className="sticky top-0 z-30 flex items-center justify-center gap-4 bg-panel px-6 py-2.5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 sm:text-sm">
          Lote atual encerra em <Countdown target={LOTE_DEADLINE} />
        </p>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-gold hidden shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black sm:inline-flex"
        >
          Quero minha vaga
          <ArrowRight weight="bold" className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* HERO — ATENÇÃO */}
      <section className="bg-noise relative overflow-hidden px-6 py-10 sm:py-14 lg:flex lg:min-h-[calc(100svh-40px)] lg:items-center lg:py-16">
        {/* Imagem de fundo, preenchendo toda a seção */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/brand/hero-palco.jpg"
            alt="Vini Pires no palco do Destrava Delivery"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover object-[72%_28%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* LEFT: content */}
          <div className="text-left">
            <Reveal>
              <Image
                src="/brand/logo-horizontal.png"
                alt="Destrava Delivery"
                width={2000}
                height={499}
                className="mb-8 h-[56px] w-auto lg:h-[80px]"
                priority
              />
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display max-w-xl text-4xl leading-[1.05] tracking-wide text-foreground sm:text-5xl lg:text-[2.375rem]">
                Seu delivery pode faturar mais.{" "}
                <span className="text-gold">
                  Mas não pode continuar dependendo de você.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-lg text-sm text-foreground/70 sm:text-base lg:text-[0.9rem]">
                2 dias para sair do improviso, enxergar o negócio por inteiro
                e destravar as decisões que estão limitando seu crescimento.
                Ao lado de Vini Pires, mentor de Delivery e iFood que já
                ajudou mais de 1.000 empreendedores.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex w-fit flex-col gap-4 rounded-2xl border border-panel-border bg-panel px-6 py-4 sm:flex-row sm:gap-8">
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
                  className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide text-black"
                >
                  Quero destravar meu delivery
                  <ArrowRight weight="bold" className="h-5 w-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={360} className="lg:hidden">
              <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-panel-border">
                <Image
                  src="/brand/hero-palco.jpg"
                  alt="Vini Pires no palco do Destrava Delivery"
                  fill
                  sizes="100vw"
                  className="object-cover object-[72%_20%]"
                />
              </div>
            </Reveal>

          </div>

          {/* RIGHT: espaço vazio — a imagem é o fundo da seção */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* TICKER — faixa horizontal */}
      <div className="relative z-20">
        <Reveal delay={420}>
          <Ticker items={CREDIBILIDADE} diagonal={false} />
        </Reveal>
      </div>

      {/* DOR — PROBLEMA */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>A verdade</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Você fatura tudo isso.{" "}
            <span className="text-gold">Então por que o dinheiro não sobra?</span>
          </Heading>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 sm:mt-16">
            <CardTicker
              items={DORES.map((d) => ({ label: d.text, icon: d.icon }))}
            />
          </div>
        </Reveal>
      </section>

      {/* PILARES — DESENVOLVIMENTO */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>O que você vai destravar</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Não é falta de esforço.{" "}
            <span className="text-gold">É falta de clareza e estrutura</span>.
          </Heading>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className="card-soft h-full rounded-2xl border border-panel-border bg-panel p-8">
                <p.icon weight="duotone" className="h-8 w-8 text-gold" />
                <span className="mt-4 mb-2 block h-[3px] w-6 bg-gold" />
                <p className="font-display text-xl text-foreground">
                  {p.label}
                </p>
                <p className="mt-2 text-sm text-foreground/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIRADA — SOLUÇÃO */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>A virada</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            O delivery mudou.{" "}
            <span className="text-gold">Sua gestão também precisa mudar</span>.
          </Heading>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-foreground/60">
            Não basta mais abrir uma operação, entrar na plataforma, colocar
            cupom e esperar pedido. Hoje quem toca um delivery precisa
            entender de dado, margem, marca, aquisição, operação, tecnologia
            e gestão.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-panel-border">
          <div className="hidden border-b border-panel-border bg-panel/60 px-6 py-3 sm:flex">
            <p className="w-40 shrink-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
              Área
            </p>
            <div className="flex flex-1 items-center gap-3">
              <p className="flex-1 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Antes
              </p>
              <span className="w-4" />
              <p className="flex-1 text-xs font-semibold uppercase tracking-widest text-gold/70">
                Depois
              </p>
            </div>
          </div>
          {VIRADA.map((v, i) => (
            <Reveal key={v.label} delay={i * 70}>
              <div
                className={`flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 ${
                  i !== 0 ? "border-t border-panel-border" : ""
                } ${i % 2 === 1 ? "bg-panel/30" : ""}`}
              >
                <div className="flex w-40 shrink-0 items-center gap-2">
                  <v.icon weight="duotone" className="h-5 w-5 text-gold" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    {v.label}
                  </p>
                </div>
                <div className="flex flex-1 items-center gap-3">
                  <p className="flex-1 text-sm text-foreground/40 line-through decoration-foreground/25">
                    {v.before}
                  </p>
                  <ArrowRight weight="bold" className="h-4 w-4 shrink-0 text-gold" />
                  <p className="flex-1 text-sm font-semibold text-foreground">
                    {v.after}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NÚMERO GIGANTE */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl border border-panel-border bg-panel p-8 sm:flex-row sm:gap-10 sm:p-10">
            <p className="font-display shrink-0 text-6xl leading-none text-gold sm:text-7xl">
              2 DIAS
            </p>
            <div className="hidden h-16 w-px bg-panel-border sm:block" />
            <div className="text-center sm:text-left">
              <p className="font-display text-xl text-foreground sm:text-2xl">
                Pra trocar tentativa e erro por um caminho claro de ação.
              </p>
              <p className="mt-2 text-sm text-foreground/60">
                Você conecta estratégia, operação, financeiro, marketing e
                vendas, e sai sabendo onde concentrar sua atenção primeiro.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PALESTRANTES — AUTORIDADE */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Palestrantes</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Quem vive a operação de delivery todo dia{" "}
            <span className="text-gold">no palco com você</span>.
          </Heading>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Vini Pires",
              photo: "/brand/vini-portrait-hero-style.png",
              w: 490,
              h: 1103,
              pos: "object-top",
              bio: "Mentor de Delivery e iFood, já ajudou mais de 1.000 empreendedores a crescer com mais estratégia e clareza.",
            },
            {
              name: "Gabriel Viana",
              photo: "/brand/gabriel-viana-hero-style.png",
              w: 2387,
              h: 3182,
              pos: "object-top",
              bio: "Conhecido como Mago do iFood, mentor de gestores e donos de restaurante em gestão de delivery.",
            },
            {
              name: "William Flores",
              photo: "/brand/william-flores-hero-style.png",
              w: 1949,
              h: 2087,
              pos: "object-center",
              bio: "Especialista em multimarcas no delivery, foco em estratégia real e mais lucro e liberdade pro negócio.",
            },
            {
              name: "Rafael Maia",
              photo: "/brand/rafael-maia-hero-style.png",
              w: 858,
              h: 1280,
              pos: "object-top",
              bio: "Empresário, palestrante e mentor, com foco em operação que gera resultado e mentalidade empresarial.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={140 + i * 60}>
              <div className="overflow-hidden rounded-2xl border border-panel-border bg-panel">
                <Image
                  src={p.photo}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className={`h-64 w-full object-cover ${p.pos}`}
                />
                <div className="p-6">
                  <span className="mb-3 block h-[3px] w-6 bg-gold" />
                  <p className="font-display text-lg text-foreground">
                    {p.name}
                  </p>
                  <p className="mt-1 text-sm text-foreground/60">{p.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={440}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-panel-border bg-panel">
              <div className="flex h-64 w-full items-center justify-center bg-panel font-display text-4xl text-gold">
                AX
              </div>
              <div className="p-6">
                <span className="mb-3 block h-[3px] w-6 bg-gold" />
                <p className="font-display text-lg text-foreground">
                  Alecsander Xavier
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  Palestrante confirmado do Destrava Delivery 2.0 — credencial
                  completa em breve.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="overflow-hidden rounded-2xl border border-panel-border bg-panel">
              <Image
                src="/brand/glaucia-hortega-hero-style.png"
                alt="Glaucia Hortega"
                width={640}
                height={641}
                className="h-64 w-full object-cover object-top"
              />
              <div className="p-6">
                <span className="mb-3 block h-[3px] w-6 bg-gold" />
                <p className="font-display text-lg text-foreground">
                  Glaucia Hortega
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  Palestra "Quem Decide, Destrava": mentalidade e decisão para
                  quem toca o próprio negócio.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENTOR — AUTORIDADE PRINCIPAL */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow align="left">Quem está por trás</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Vini <span className="text-gold">Pires</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-foreground/70 sm:text-lg">
              Mentor de Delivery e iFood, Vini Pires já ajudou mais de 1.000
              empreendedores a sair do achismo e enxergar o próprio negócio
              com mais estratégia, lucro e clareza. Foi dessa vivência no
              mercado que nasceu o Destrava Delivery: um evento pra quem quer
              parar de apagar incêndio e voltar pra operação com outra
              cabeça.
            </p>
            <a
              href="https://www.instagram.com/vinipiresoficial"
              target="_blank"
              rel="noreferrer"
              className="btn-gold-outline mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-gold"
            >
              <InstagramLogo weight="fill" className="h-4 w-4" />
              @vinipiresoficial
            </a>
          </Reveal>
          <Reveal delay={140} className="order-1 lg:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-panel-border bg-panel">
              <Image
                src="/brand/vini-hero.jpg"
                alt="Vini Pires"
                width={1080}
                height={1080}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTADOS / PROVA SOCIAL */}
      <section className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow align="left">Última edição</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <Heading align="left">
                Quem já passou pelo Destrava{" "}
                <span className="text-gold">mostra como foi</span>.
              </Heading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                <Quotes weight="fill" className="h-4 w-4 text-gold/70" />
                Use as setas para ver mais vídeos
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black"
              >
                Quero viver o Destrava
                <ArrowRight weight="bold" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <VideoCarousel items={VIDEOS} />
          </Reveal>
        </div>
      </section>

      {/* PARA QUEM É — QUALIFICAÇÃO */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Pra quem é</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            O Destrava não é{" "}
            <span className="text-gold">para qualquer um</span>.
          </Heading>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-panel-border bg-panel p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Não é para quem
              </p>
              <ul className="space-y-4">
                {NAO_E_PARA.map((texto) => (
                  <li key={texto} className="flex items-start gap-3">
                    <XCircle weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-foreground/30" />
                    <p className="text-sm text-foreground/50">{texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-gold/30 bg-panel p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold/70">
                É para você que
              </p>
              <ul className="space-y-4">
                {E_PARA_VOCE.map((texto) => (
                  <li key={texto} className="flex items-start gap-3">
                    <CheckCircle weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <p className="text-sm text-foreground/80">{texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Como funciona</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Do ingresso ao plano claro{" "}
            <span className="text-gold">em 4 passos</span>.
          </Heading>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-4">
          {[
            {
              n: "01",
              title: "Escolha o ingresso",
              text: "Standard, Duplo ou VIP Premium. Cada um com benefícios diferentes.",
            },
            {
              n: "02",
              title: "Garanta sua vaga",
              text: "16 e 17 de novembro, no Espaço Vitta Eventos, em São Paulo.",
            },
            {
              n: "03",
              title: "Viva os 2 dias",
              text: "Estratégia, operação, financeiro, marketing e vendas, com quem vive a operação.",
            },
            {
              n: "04",
              title: "Saia com plano claro",
              text: "Volte pra operação sabendo exatamente o que precisa mudar primeiro.",
            },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative flex flex-col items-center text-center">
                {i !== 0 && (
                  <span className="absolute right-1/2 top-5 -z-10 hidden h-px w-full bg-gold/30 sm:block" />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-background text-sm font-bold text-gold">
                  {step.n}
                </span>
                <p className="font-display mt-4 text-base text-foreground">
                  {step.title}
                </p>
                <p className="mt-2 max-w-[14rem] text-sm text-foreground/60">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INGRESSOS — AÇÃO */}
      <section
        className="border-b border-panel-border bg-panel/40 px-6 py-24 sm:py-32"
        id="ingressos"
      >
        <Reveal>
          <Eyebrow>1º lote</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Escolha o ingresso{" "}
            <span className="text-gold">antes da virada de lote</span>.
          </Heading>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
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
                <p className="mt-1 text-sm text-foreground/60">
                  {ticket.tagline}
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
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {TODOS_BENEFICIOS.map((f) => {
                    const incluso = ticket.features.includes(f);
                    return (
                      <li
                        key={f}
                        className={`flex gap-2 ${incluso ? "text-foreground/70" : "text-foreground/25"}`}
                      >
                        {incluso ? (
                          <CheckCircle
                            weight="fill"
                            className="h-5 w-5 shrink-0 text-gold"
                          />
                        ) : (
                          <XCircle
                            weight="regular"
                            className="h-5 w-5 shrink-0 text-foreground/20"
                          />
                        )}
                        {f}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wide ${
                    ticket.highlight ? "btn-gold text-black" : "btn-gold-outline text-gold"
                  }`}
                >
                  Escolher meu ingresso
                  <ArrowRight weight="bold" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCAL */}
      <section className="border-b border-panel-border px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Onde será</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Espaço Vitta Eventos, em <span className="text-gold">São Paulo</span>.
          </Heading>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.3fr]">
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

      {/* FAQ — OBJEÇÕES */}
      <section className="bg-panel/40 px-6 py-24 sm:py-32">
        <Reveal>
          <Eyebrow>Dúvidas</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading>
            Perguntas <span className="text-gold">frequentes</span>.
          </Heading>
        </Reveal>
        <Reveal delay={160} className="mt-12">
          <Faq />
        </Reveal>
      </section>

      {/* CTA FINAL — AÇÃO */}
      <section className="bg-noise border-t border-panel-border px-6 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl text-foreground/90 sm:text-4xl">
            Você pode continuar apagando incêndio.{" "}
            <span className="text-gold">Ou pode destravar o negócio.</span>
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
            Quero estar no Destrava Delivery
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
