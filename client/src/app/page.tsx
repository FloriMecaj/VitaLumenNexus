"use client";

import { useState } from "react";
import {
  ArrowRight,
  Binary,
  Bot,
  ChevronRight,
  Compass,
  Cpu,
  Menu,
  Orbit,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type Module = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Architecture", href: "#architecture" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const modules: Module[] = [
  {
    title: "Meta Platform Layer",
    description: "The strategic layer that aligns every module inside a coherent innovation framework.",
    icon: Orbit,
  },
  {
    title: "Genesis Core",
    description: "The origin point for concept generation, directional thinking, and early future scenarios.",
    icon: Sparkles,
  },
  {
    title: "Orchestrator Core",
    description: "The coordinating center for workflows, systems, and intelligence operations.",
    icon: Workflow,
  },
  {
    title: "AIDL",
    description: "A structured layer for applied intelligence development and system reasoning.",
    icon: Bot,
  },
  {
    title: "Technology Creation Engine",
    description: "A dedicated capability for generating concepts, architectures, and technology structures.",
    icon: Cpu,
  },
  {
    title: "Technology Discovery Engine",
    description: "A signal-seeking layer for emerging opportunities, hidden patterns, and innovation gaps.",
    icon: Radar,
  },
  {
    title: "Civilization Core",
    description: "A long-range systems perspective for future structures, societal change, and macro evolution.",
    icon: Compass,
  },
  {
    title: "Reality Core",
    description: "The validation layer that connects ideas to measurable outcomes and feedback loops.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation Meta Core",
    description: "The synthesis layer where strategy, intelligence, and execution become continuous innovation.",
    icon: Binary,
  },
  {
    title: "Aerospace Core",
    description: "The engineering-focused research module for propulsion, analysis, and aerospace exploration.",
    icon: Rocket,
  },
];

const capabilities = [
  "Generate new concepts, architectures, and technology frameworks.",
  "Identify emerging trends, hidden opportunities, and innovation gaps.",
  "Coordinate multiple intelligent processes within a unified environment.",
  "Connect ideas with measurable outcomes and real-world feedback.",
  "Support long-term innovation through adaptive learning and strategic intelligence.",
];

const methodology = [
  { number: "01", title: "Discover opportunities." },
  { number: "02", title: "Create solutions." },
  { number: "03", title: "Validate outcomes." },
  { number: "04", title: "Continuously improve." },
];

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <Badge className="border-[color:var(--border-strong)] bg-white/70 text-[color:var(--primary)]">
        {label}
      </Badge>
      <div className="space-y-4">
        <h2 className="font-display text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-6xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-[color:var(--muted-foreground)] md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="space-y-1">
            <p className="font-display text-2xl tracking-[-0.05em] text-[color:var(--foreground)]">
              VitaLumen Nexus
            </p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
              Intelligence • Innovation • Orchestration
            </p>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className={buttonVariants()}>
              Contact
            </a>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                className="inline-flex size-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[color:var(--foreground)] md:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>

            <SheetContent className="md:hidden">
              <SheetHeader className="border-b border-[color:var(--border)] pr-16">
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>
                  Explore VitaLumen Nexus sections from this mobile flyout.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-2 p-5">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--border)] hover:bg-white/60"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <a
                    href="#contact"
                    className={cn(buttonVariants(), "mt-3 flex w-full")}
                  >
                    Contact
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="section-shell px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-9">
            <Badge className="border-[color:var(--border-strong)] bg-white/70 text-[color:var(--primary)]">
              Presenting Website
            </Badge>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
                The Infrastructure for Next-Generation Intelligence
              </p>
              <h1 className="font-display max-w-5xl text-5xl leading-[0.9] tracking-[-0.065em] text-[color:var(--foreground)] md:text-7xl xl:text-[6.2rem]">
                A modular platform for intelligence, innovation, and execution.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)] md:text-xl">
                VitaLumen Nexus is an advanced intelligence platform designed to
                orchestrate innovation, accelerate technology creation, and connect
                complex systems through a unified architecture.
              </p>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)]">
                Built around specialized modules, it gives organizations a structured
                environment to explore opportunities, generate solutions, validate
                ideas, and transform knowledge into actionable innovation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#platform"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
              >
                Explore the Platform
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#architecture"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "inline-flex",
                )}
              >
                View Architecture
              </a>
            </div>

            <div className="grid gap-5 pt-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-[color:var(--border)] bg-white/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  Modules
                </p>
                <p className="mt-2 font-display text-4xl tracking-[-0.06em] text-[color:var(--foreground)]">
                  11
                </p>
              </div>
              <div className="rounded-[28px] border border-[color:var(--border)] bg-white/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  Method
                </p>
                <p className="mt-2 font-display text-4xl tracking-[-0.06em] text-[color:var(--foreground)]">
                  4 Steps
                </p>
              </div>
              <div className="rounded-[28px] border border-[color:var(--border)] bg-white/60 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  Direction
                </p>
                <p className="mt-2 font-display text-4xl tracking-[-0.06em] text-[color:var(--foreground)]">
                  Multi-Domain
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[500px] items-center justify-center py-8 lg:py-12">
            <div className="hero-rings absolute inset-0 rounded-[40px]" />
            <div className="absolute left-[10%] top-[8%] size-24 rounded-full bg-[color:var(--accent)]/12 blur-2xl" />
            <div className="absolute bottom-[10%] right-[14%] size-36 rounded-full bg-[color:var(--primary)]/14 blur-3xl" />

            <Card className="story-card glass-orb relative z-10 w-full max-w-[42rem] rounded-[34px]">
              <CardHeader className="space-y-5 p-7 md:p-9">
                <Badge className="w-fit border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--accent)]">
                  Unified Architecture
                </Badge>
                <CardTitle className="font-display text-3xl tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl md:leading-[1]">
                  Intelligence becomes structured, scalable, and actionable.
                </CardTitle>
                <CardDescription className="text-base leading-8 md:text-lg">
                  A single framework for strategic thinking, technology generation,
                  orchestration, and real-world validation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-7 pt-0 md:p-9 md:pt-0">
                <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                    Aerospace Core
                  </span>
                  <Rocket className="size-4 text-[color:var(--accent)]" />
                </div>
                <p className="font-display text-2xl tracking-[-0.05em] text-[color:var(--foreground)] md:text-4xl md:leading-[1.08]">
                  Applied deep-tech intelligence for engineering-focused exploration.
                </p>
                <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                  Conceptual analysis, propulsion modeling, and advanced system
                  evaluation inside structured intelligence workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="platform" className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionIntro
            label="About The Platform"
            title="What is VitaLumen Nexus?"
            description="VitaLumen Nexus is a modular intelligence ecosystem that combines strategic thinking, technology generation, system orchestration, and real-world validation into a single framework."
          />

          <Card className="story-card rounded-[34px]">
            <CardContent className="space-y-6 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--accent)]">
                Mission
              </p>
              <p className="font-display text-3xl leading-tight tracking-[-0.045em] text-[color:var(--foreground)] md:text-4xl">
                To provide a structured environment where intelligence, innovation,
                and execution work together.
              </p>
              <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                Rather than focusing on one industry, the platform is designed to
                support multiple domains, including advanced technology, aerospace,
                intelligent systems, healthcare innovation, and future-oriented
                research.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="architecture" className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionIntro
            label="Platform Architecture"
            title="A unified intelligence framework built around connected modules."
            description="Each module is responsible for a distinct layer of intelligence and innovation. Together they create a coordinated system capable of discovering opportunities, generating solutions, validating outcomes, and continuously improving performance."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map(({ title, description, icon: Icon }) => (
              <Card
                key={title}
                className="section-tint rounded-[30px] bg-white/55 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
              >
                <CardHeader className="space-y-5 p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-white text-[color:var(--primary)]">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl text-[color:var(--foreground)]">
                    {title}
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            label="Core Capabilities"
            title="What the platform enables."
            description="VitaLumen Nexus is built to move from exploration to execution through a coordinated innovation cycle."
          />

          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <Card key={capability} className="story-card rounded-[30px]">
                <CardContent className="flex gap-5 p-6 md:items-center md:p-7">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-semibold text-[color:var(--primary-foreground)]">
                    {index + 1}
                  </div>
                  <p className="text-base leading-8 text-[color:var(--foreground)]">
                    {capability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Card className="rounded-[38px] border-[color:var(--border-strong)] bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
              <div className="space-y-5">
                <Badge className="w-fit border-white/20 bg-white/10 text-white">
                  Aerospace Core
                </Badge>
                <h2 className="font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                  Applied deep-tech intelligence with an engineering-focused research layer.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/78">
                  Designed to support conceptual analysis, propulsion modeling,
                  system evaluation, and advanced aerospace exploration through
                  structured intelligence workflows.
                </p>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/8 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/68">
                  Objective
                </p>
                <p className="mt-4 font-display text-3xl leading-tight tracking-[-0.05em]">
                  Bridge visionary ideas and practical engineering thinking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionIntro
            label="Our Approach"
            title="From discovery to innovation."
            description="The VitaLumen Nexus methodology follows a self-reinforcing cycle that creates continuity between insight, generation, validation, and progress."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {methodology.map((step) => (
              <Card key={step.number} className="story-card rounded-[30px]">
                <CardContent className="space-y-10 p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    {step.number}
                  </span>
                  <p className="font-display text-3xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)]">
                    {step.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[color:var(--border)] bg-white/50 px-7 py-10 md:px-12 md:py-14">
          <SectionIntro
            label="Vision"
            title="Building the future of intelligent systems."
            description="We believe the future belongs to systems that can discover, create, adapt, and evolve. VitaLumen Nexus is designed as a foundation for that future: a platform where intelligence becomes structured, scalable, and actionable."
          />
        </div>
      </section>

      <section id="founder" className="section-shell px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Card className="story-card h-fit rounded-[34px] self-start">
            <CardHeader className="space-y-5 p-8 md:p-10">
              <Badge className="w-fit border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--accent)]">
                Themeluesi
              </Badge>
              <CardTitle className="font-display text-4xl tracking-[-0.05em] text-[color:var(--foreground)]">
                Pullumb Vathi
              </CardTitle>
              <CardDescription className="text-base leading-8">
                Founder & Vision Architect of VitaLumen Nexus
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="story-card rounded-[34px]">
            <CardContent className="space-y-6 p-8 md:p-10">
              <h3 className="font-display text-4xl tracking-[-0.05em] text-[color:var(--foreground)]">
                Founder’s Vision
              </h3>
              <div className="space-y-5 text-base leading-8 text-[color:var(--muted-foreground)]">
                <p>
                  Pullumb Vathi është themeluesi i VitaLumen Nexus, një iniciative e
                  fokusuar në eksplorimin e sistemeve inteligjente, inovacionit
                  teknologjik dhe arkitekturave të avancuara për të ardhmen.
                </p>
                <p>
                  Vizioni i tij është ndërtimi i një platforme që bashkon
                  inteligjencën, krijimin e teknologjisë dhe mendimin strategjik në
                  një ekosistem të vetëm, të aftë për të mbështetur zhvillimin e
                  ideve dhe zgjidhjeve me ndikim afatgjatë.
                </p>
                <p>
                  Puna e tij është përqendruar në konceptimin e modeleve
                  multidisiplinare që lidhin fusha të ndryshme si inteligjenca
                  artificiale, sistemet komplekse, teknologjitë e avancuara dhe
                  inovacioni i vazhdueshëm.
                </p>
                <p>
                  Përmes VitaLumen Nexus, ai synon të krijojë një mjedis ku idetë
                  transformohen në struktura të organizuara, teknologjitë zhvillohen
                  në mënyrë sistematike dhe inovacioni trajtohet si një proces i
                  vazhdueshëm.
                </p>
              </div>

              <div className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--secondary)] p-6 md:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Founder’s Vision
                </p>
                <p className="mt-4 font-display text-2xl leading-10 tracking-[-0.04em] text-[color:var(--foreground)] md:text-3xl">
                  “Teknologjia nuk duhet të kufizohet vetëm në zgjidhjen e problemeve të sotme.
                  Ajo duhet të krijojë mundësitë e së nesërmes.”
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-[color:var(--border-strong)] bg-[color:var(--foreground)] px-7 py-10 text-white md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
          <div className="space-y-5">
            <Badge className="w-fit border-white/15 bg-white/10 text-white">
              Contact & Partnerships
            </Badge>
            <h2 className="font-display text-4xl tracking-[-0.05em] md:text-5xl">
              Collaborate with us.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/72">
              We welcome discussions with researchers, innovators, technology
              companies, and organizations interested in advanced intelligence
              systems and next-generation technology development.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-[30px] border border-white/12 bg-white/6 p-7">
            <p className="text-base leading-8 text-white/76">
              For partnership opportunities, research collaborations, and platform
              inquiries, contact the VitaLumen Nexus team.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white"
            >
              Start the conversation
              <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-10 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[color:var(--border)] py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl tracking-[-0.05em] text-[color:var(--foreground)]">
              VitaLumen Nexus
            </p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
              Building the infrastructure for the next generation of intelligent systems.
            </p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
            Intelligence • Innovation • Orchestration
          </p>
        </div>
      </footer>
    </main>
  );
}
