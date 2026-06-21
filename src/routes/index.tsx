import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Wand2, GraduationCap, Palette, Star, Instagram, Mail, Heart, Play, Clapperboard } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aegx Creatives — AI-powered content, courses & creatives for serious brands" },
      { name: "description", content: "Aegx Creatives is a sister-run studio crafting AI content, bulk course builds for coaches, and high-end creatives for ambitious brands. Creativity meets operations." },
      { property: "og:title", content: "Aegx Creatives — Creativity × Operations" },
      { property: "og:description", content: "AI content creation, bulk course production for coaches, and luxe creatives for high-end brands. Built by two sisters." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Sticker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-3 py-1 text-xs font-medium tracking-wide uppercase shadow-[2px_2px_0_0_var(--ink)] ${className}`}>
      {children}
    </span>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Sisters />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream font-display text-lg">A</span>
          <span className="font-display text-2xl leading-none">Aegx <span className="italic text-coral">Creatives</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="hover:text-coral transition-colors">Services</a>
          <a href="#sisters" className="hover:text-coral transition-colors">The Sisters</a>
          <a href="#process" className="hover:text-coral transition-colors">Process</a>
          <a href="#portfolio" className="hover:text-coral transition-colors">Work</a>
          <a href="#testimonials" className="hover:text-coral transition-colors">Words</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream shadow-[3px_3px_0_0_var(--lime)] transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s talk <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative grain">
      {/* floaty stuff */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 bg-lime blob opacity-80" aria-hidden />
      <div className="pointer-events-none absolute right-[-6rem] top-44 h-80 w-80 bg-lilac blob opacity-70" aria-hidden />
      <div className="pointer-events-none absolute left-1/3 top-[28rem] h-40 w-40 bg-sky blob opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="flex flex-wrap items-center gap-3">
          <Sticker><Sparkles className="h-3.5 w-3.5" /> AI-native creative studio</Sticker>
          <Sticker className="rotate-[-2deg] bg-lime">Est. by two sisters</Sticker>
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-tight">
          Creativity that <span className="italic text-coral">flirts</span>,
          <br />
          operations that <span className="underline-squiggle">deliver</span>.
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="md:col-span-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Aegx Creatives is a tiny powerhouse studio building AI-driven content,
            bulk course production for coaches, and unreasonably good creatives for
            high-end brands. Serious craft, with a wink.
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-cream font-medium shadow-[4px_4px_0_0_var(--coral)] transition-transform hover:-translate-y-0.5">
              Book a vibe call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-4 font-medium hover:bg-ink hover:text-cream transition-colors">
              Peek the services
            </a>

            {/* spinning badge */}
            <div className="relative ml-2 hidden h-24 w-24 md:block">
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="10" fontFamily="DM Sans" fill="currentColor" letterSpacing="2">
                  <textPath href="#circle">CREATIVITY × OPERATIONS · BY SISTERS · </textPath>
                </text>
              </svg>
              <Star className="absolute inset-0 m-auto h-6 w-6 fill-coral text-coral" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "AI Content Engines", "Bulk Course Builds", "Luxe Brand Creatives",
    "Engagement that Sticks", "Made by Sisters", "Strategy + Sparkle",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y-2 border-ink bg-ink text-cream py-5 overflow-hidden">
      <div className="flex w-max gap-12 ticker whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl flex items-center gap-12">
            {t} <Heart className="h-5 w-5 fill-coral text-coral" />
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    icon: Wand2,
    tag: "01",
    title: "AI Content Creation",
    desc: "Scroll-stopping content built with curated AI workflows — short-form scripts, carousels, captions, blogs and brand voice systems that actually sound like you.",
    bullets: ["Brand voice training", "30/60/90-day content engines", "Static + motion creatives"],
    color: "bg-lime",
  },
  {
    icon: GraduationCap,
    tag: "02",
    title: "Bulk Course Creation for Coaches",
    desc: "From a single voice note to a polished, modular cohort. We turn your IP into beautifully structured lessons, worksheets and visuals — at the speed coaches actually need.",
    bullets: ["Curriculum + module mapping", "Slides, scripts, workbooks", "AI-assisted, human-finished"],
    color: "bg-lilac",
  },
  {
    icon: Palette,
    tag: "03",
    title: "Creatives for High-End Brands",
    desc: "Editorial campaigns, luxe product visuals and concept-driven creatives using advanced AI tools — without losing the taste, craft or restraint your brand demands.",
    bullets: ["Campaign concepts", "AI-generated visuals", "Art direction + finishing"],
    color: "bg-coral",
  },
];

function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Sticker>What we do</Sticker>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Three services. <span className="italic text-coral">Zero</span> fluff.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Each engagement blends strategy, AI fluency and obsessive taste —
          shipped on operational rails so nothing slips.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative flex flex-col rounded-3xl border-2 border-ink bg-card p-7 shadow-[6px_6px_0_0_var(--ink)] transition-transform hover:-translate-y-1 hover:rotate-[-0.5deg]"
          >
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink ${s.color}`}>
              <s.icon className="h-7 w-7 text-ink" />
            </div>
            <div className="font-mono text-xs text-muted-foreground">{s.tag} / service</div>
            <h3 className="mt-1 font-display text-3xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-coral" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sisters() {
  return (
    <section id="sisters" className="relative bg-ink text-cream py-24 md:py-32">
      <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute left-10 bottom-10 h-40 w-40 rounded-full bg-lime/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Sticker className="border-cream/30 bg-transparent text-cream shadow-[2px_2px_0_0_var(--lime)]">
            Two sisters, one studio
          </Sticker>
          <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95]">
            One brings the <span className="italic text-lime">spark</span>.
            <br />
            The other makes it <span className="italic text-coral">ship</span>.
          </h2>
        </div>

        <div className="md:col-span-7 grid gap-6 sm:grid-cols-2 self-end">
          <SisterCard
            role="The Creative"
            badge="Concepts · Art Direction · Voice"
            color="bg-lime"
            quote="If it doesn't make you stop scrolling, we didn't ship it."
          />
          <SisterCard
            role="The Operator"
            badge="Systems · Delivery · Engagement"
            color="bg-coral"
            quote="Beautiful work that misses a deadline is just expensive art."
            tilt
          />
        </div>

        <div className="md:col-span-12 mt-6 grid gap-8 sm:grid-cols-3 text-cream/80">
          <Stat n="48h" label="From brief to first concepts" />
          <Stat n="12+" label="Brands & coaches served" />
          <Stat n="2x" label="Average engagement lift" />
        </div>
      </div>
    </section>
  );
}

function SisterCard({ role, badge, color, quote, tilt }: { role: string; badge: string; color: string; quote: string; tilt?: boolean }) {
  return (
    <div className={`relative rounded-3xl border-2 border-cream/20 bg-cream/5 p-6 backdrop-blur ${tilt ? "rotate-[1.5deg]" : "-rotate-[1deg]"}`}>
      <div className={`mb-4 inline-block rounded-full border-2 border-ink px-3 py-1 text-xs font-semibold text-ink ${color}`}>
        {role}
      </div>
      <p className="font-display text-2xl leading-snug">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-cream/60">{badge}</p>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-cream/15 pt-5">
      <div className="font-display text-5xl text-cream">{n}</div>
      <div className="mt-1 text-sm">{label}</div>
    </div>
  );
}

const steps = [
  { n: "01", t: "Vibe call", d: "We meet, we listen, we sketch the universe of what's possible." },
  { n: "02", t: "Strategy + System", d: "A clear plan: what we make, on what cadence, on which rails." },
  { n: "03", t: "Make + Refine", d: "AI-accelerated production with a human eye on every frame." },
  { n: "04", t: "Ship + Grow", d: "We track engagement, iterate weekly, and keep momentum loud." },
];

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Sticker className="bg-lilac">How it works</Sticker>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            A process you can <span className="italic text-coral">actually</span> trust.
          </h2>
        </div>
      </div>

      <ol className="mt-14 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.n}
            className="group relative rounded-3xl border-2 border-ink bg-card p-6 transition-colors hover:bg-lime wiggle"
            style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 0.6}deg` }}
          >
            <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
            <div className="mt-1 font-display text-3xl">{s.t}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-ink">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// =============================================================================
// HOW TO ADD YOUR OWN YOUTUBE VIDEOS:
// 1. Go to any YouTube video → Click "Share" → Click "Embed"
// 2. Copy the video ID from the embed URL (the part after /embed/)
//    Example: https://www.youtube.com/embed/AbCdEfGhIjK → ID is AbCdEfGhIjK
// 3. Replace the id below with your video ID
// 4. Update the title and category fields
// =============================================================================
const portfolioVideos = [
  {
    id: "M7lc1UVf-VE",
    title: "Brand Campaign — Luxury Skincare Launch",
    category: "Brand Creative",
    color: "bg-lime",
  },
  {
    id: "jfKfPfyJRdk",
    title: "Course Trailer — Mindset Mastery",
    category: "Course Build",
    color: "bg-lilac",
  },
  {
    id: "LXb3EKWsInQ",
    title: "AI Content Engine — DTC Brand",
    category: "Content Creation",
    color: "bg-coral",
  },
  {
    id: "9bZkp7q19f0",
    title: "Motion Reel — High-End Fashion Collab",
    category: "Brand Creative",
    color: "bg-sky",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Sticker className="bg-lime">
            <Clapperboard className="h-3.5 w-3.5" /> The work
          </Sticker>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Proof in <span className="italic text-coral">motion</span>.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Scroll through our latest campaigns, course launches and brand worlds —
          all made with AI fluency and human taste.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {portfolioVideos.map((v, i) => (
          <article
            key={v.id}
            className="group relative flex flex-col rounded-3xl border-2 border-ink bg-card p-5 shadow-[6px_6px_0_0_var(--ink)] transition-transform hover:-translate-y-1"
            style={{ rotate: `${i % 2 === 0 ? -0.4 : 0.4}deg` }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              {/* play overlay hint on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-lg">
                  <Play className="h-6 w-6 fill-ink text-ink ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className={`inline-block rounded-full border-2 border-ink px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink ${v.color}`}>
                {v.category}
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl leading-tight">{v.title}</h3>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border-2 border-dashed border-ink/30 bg-lime/30 p-6 text-center">
        <p className="text-sm font-medium text-ink/80">
          Want to see more? We update this reel weekly. Book a call and we&apos;ll send you a private link to our full portfolio.
        </p>
      </div>
    </section>
  );
}

const quotes = [
  { q: "They turned six months of voice notes into a course I actually want to sell. Wild.", a: "Coach, 7-figure mindset brand" },
  { q: "Our feed finally looks like the brand we describe in pitch decks.", a: "Founder, luxury skincare" },
  { q: "Half studio, half operations team. All taste.", a: "Head of Brand, DTC" },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Sticker className="bg-sky">Kind words</Sticker>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            People say <span className="italic text-coral">things</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((qt, i) => (
            <figure
              key={qt.q}
              className="rounded-3xl border-2 border-ink bg-card p-7 shadow-[6px_6px_0_0_var(--coral)]"
              style={{ rotate: `${i === 1 ? 1 : -1}deg` }}
            >
              <div className="flex gap-1 text-coral">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-coral" />)}
              </div>
              <blockquote className="mt-4 font-display text-2xl leading-snug">&ldquo;{qt.q}&rdquo;</blockquote>
              <figcaption className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">— {qt.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-lime p-10 md:p-16 shadow-[10px_10px_0_0_var(--ink)]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/70 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-lilac/70 blur-2xl" />

        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Sticker className="bg-card">Let&apos;s make something loud</Sticker>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Ready when you are, <span className="italic">darling</span>.
            </h2>
            <p className="mt-5 max-w-xl text-ink/80">
              Tell us about your brand or your course. We&apos;ll send back a tiny plan,
              a delivery cadence, and the kind of energy you&apos;ve been missing.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <a
              href="mailto:hello@aegxcreatives.com"
              className="group inline-flex items-center justify-between gap-2 rounded-full bg-ink px-7 py-4 text-cream font-medium transition-transform hover:-translate-y-0.5"
            >
              hello@aegxcreatives.com
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-between gap-2 rounded-full border-2 border-ink px-7 py-4 font-medium hover:bg-ink hover:text-cream transition-colors"
            >
              Book a vibe call
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream font-display">A</span>
          <span className="font-display text-xl">Aegx Creatives</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aegx Creatives. Made by sisters, powered by good taste.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="rounded-full border-2 border-ink p-2 hover:bg-lime transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href="mailto:hello@aegxcreatives.com" aria-label="Email" className="rounded-full border-2 border-ink p-2 hover:bg-lime transition-colors"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
