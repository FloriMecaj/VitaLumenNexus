"use client";

import { useState } from "react";
import {
  ArrowRight,
  Binary,
  Bot,
  ChevronRight,
  Compass,
  Cpu,
  Mail,
  Menu,
  MessageCircle,
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import type { HomePageContent, IconName } from "@/sanity/types";

const iconMap: Record<IconName, LucideIcon> = {
  orbit: Orbit,
  sparkles: Sparkles,
  workflow: Workflow,
  bot: Bot,
  cpu: Cpu,
  radar: Radar,
  compass: Compass,
  shieldCheck: ShieldCheck,
  binary: Binary,
  rocket: Rocket,
  mail: Mail,
  messageCircle: MessageCircle,
};

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

export function HomePage({ content }: { content: HomePageContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const openContactDialog = () => {
    setMenuOpen(false);
    setContactDialogOpen(true);
  };

  const StoryIcon = iconMap[content.hero.storyIcon];

  return (
    <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
      <main className="relative overflow-x-hidden">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a href="#" className="space-y-1">
              <p className="font-display text-2xl tracking-[-0.05em] text-[color:var(--foreground)]">
                {content.brand.siteTitle}
              </p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
                {content.brand.tagline}
              </p>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {content.navigation.map((item) =>
                item.action === "contactDialog" ? (
                  <button
                    key={`${item.label}-${item.href}`}
                    type="button"
                    onClick={openContactDialog}
                    className="text-sm font-medium text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    className="text-sm font-medium text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>

            <div className="hidden md:block">
              <button
                type="button"
                onClick={openContactDialog}
                className={buttonVariants()}
              >
                Contact
              </button>
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
                  {content.navigation.map((item) =>
                    item.action === "contactDialog" ? (
                      <button
                        key={`${item.label}-${item.href}`}
                        type="button"
                        onClick={openContactDialog}
                        className="rounded-2xl border border-transparent px-4 py-3 text-left text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--border)] hover:bg-white/60"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <SheetClose asChild key={`${item.label}-${item.href}`}>
                        <a
                          href={item.href}
                          className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--border)] hover:bg-white/60"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ),
                  )}

                  <button
                    type="button"
                    onClick={openContactDialog}
                    className={cn(buttonVariants(), "mt-3 flex w-full")}
                  >
                    Contact
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <section className="section-shell px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-36">
          <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-9">
              <Badge className="border-[color:var(--border-strong)] bg-white/70 text-[color:var(--primary)]">
                {content.hero.badge}
              </Badge>
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
                  {content.hero.eyebrow}
                </p>
                <h1 className="font-display max-w-5xl text-5xl leading-[0.9] tracking-[-0.065em] text-[color:var(--foreground)] md:text-7xl xl:text-[6.2rem]">
                  {content.hero.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)] md:text-xl">
                  {content.hero.description}
                </p>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)]">
                  {content.hero.supportingText}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={content.hero.primaryCtaHref}
                  className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
                >
                  {content.hero.primaryCtaLabel}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={content.hero.secondaryCtaHref}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "inline-flex",
                  )}
                >
                  {content.hero.secondaryCtaLabel}
                </a>
              </div>

              <div className="grid gap-5 pt-4 sm:grid-cols-3">
                {content.hero.stats.map((stat) => (
                  <div
                    key={`${stat.label}-${stat.value}`}
                    className="rounded-[28px] border border-[color:var(--border)] bg-white/60 p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-4xl tracking-[-0.06em] text-[color:var(--foreground)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center py-8 lg:py-12">
              <div className="hero-rings absolute inset-0 rounded-[40px]" />
              <div className="absolute left-[10%] top-[8%] size-24 rounded-full bg-[color:var(--accent)]/12 blur-2xl" />
              <div className="absolute bottom-[10%] right-[14%] size-36 rounded-full bg-[color:var(--primary)]/14 blur-3xl" />

              <Card className="story-card glass-orb relative z-10 w-full max-w-[42rem] rounded-[34px]">
                <CardHeader className="space-y-5 p-7 md:p-9">
                  <Badge className="w-fit border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--accent)]">
                    {content.hero.storyBadge}
                  </Badge>
                  <CardTitle className="font-display text-3xl tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl md:leading-[1]">
                    {content.hero.storyTitle}
                  </CardTitle>
                  <CardDescription className="text-base leading-8 md:text-lg">
                    {content.hero.storyDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 p-7 pt-0 md:p-9 md:pt-0">
                  <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                      {content.hero.storyEyebrow}
                    </span>
                    <StoryIcon className="size-4 text-[color:var(--accent)]" />
                  </div>
                  <p className="font-display text-2xl tracking-[-0.05em] text-[color:var(--foreground)] md:text-4xl md:leading-[1.08]">
                    {content.hero.storySummary}
                  </p>
                  <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                    {content.hero.storySupportingText}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="section-shell px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionIntro
              label={content.platform.label}
              title={content.platform.title}
              description={content.platform.description}
            />

            <Card className="story-card rounded-[34px]">
              <CardContent className="space-y-6 p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--accent)]">
                  {content.platform.missionLabel}
                </p>
                <p className="font-display text-3xl leading-tight tracking-[-0.045em] text-[color:var(--foreground)] md:text-4xl">
                  {content.platform.missionTitle}
                </p>
                <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
                  {content.platform.missionDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="architecture"
          className="section-shell px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl space-y-12">
            <SectionIntro
              label={content.architecture.label}
              title={content.architecture.title}
              description={content.architecture.description}
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.architecture.modules.map((module) => {
                const Icon = iconMap[module.icon];

                return (
                  <Card
                    key={module.title}
                    className="section-tint rounded-[30px] bg-white/55 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
                  >
                    <CardHeader className="space-y-5 p-7">
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-white text-[color:var(--primary)]">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-xl text-[color:var(--foreground)]">
                        {module.title}
                      </CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="section-shell px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionIntro
              label={content.capabilities.label}
              title={content.capabilities.title}
              description={content.capabilities.description}
            />

            <div className="space-y-4">
              {content.capabilities.items.map((capability, index) => (
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
                    {content.aerospaceFeature.badge}
                  </Badge>
                  <h2 className="font-display text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                    {content.aerospaceFeature.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/78">
                    {content.aerospaceFeature.description}
                  </p>
                </div>
                <div className="rounded-[30px] border border-white/15 bg-white/8 p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/68">
                    {content.aerospaceFeature.objectiveLabel}
                  </p>
                  <p className="mt-4 font-display text-3xl leading-tight tracking-[-0.05em]">
                    {content.aerospaceFeature.objective}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section-shell px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl space-y-12">
            <SectionIntro
              label={content.methodology.label}
              title={content.methodology.title}
              description={content.methodology.description}
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {content.methodology.steps.map((step) => (
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
              label={content.vision.label}
              title={content.vision.title}
              description={content.vision.description}
            />
          </div>
        </section>

        <section
          id="founder"
          className="section-shell px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <Card className="story-card h-fit rounded-[34px] self-start">
              <CardHeader className="space-y-5 p-8 md:p-10">
                <Badge className="w-fit border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--accent)]">
                  {content.founder.badge}
                </Badge>
                <CardTitle className="font-display text-4xl tracking-[-0.05em] text-[color:var(--foreground)]">
                  {content.founder.name}
                </CardTitle>
                <CardDescription className="text-base leading-8">
                  {content.founder.role}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="story-card rounded-[34px]">
              <CardContent className="space-y-6 p-8 md:p-10">
                <h3 className="font-display text-4xl tracking-[-0.05em] text-[color:var(--foreground)]">
                  {content.founder.title}
                </h3>
                <div className="space-y-5 text-base leading-8 text-[color:var(--muted-foreground)]">
                  {content.founder.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--secondary)] p-6 md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    {content.founder.quoteLabel}
                  </p>
                  <p className="mt-4 font-display text-2xl leading-10 tracking-[-0.04em] text-[color:var(--foreground)] md:text-3xl">
                    &ldquo;{content.founder.quote}&rdquo;
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
                {content.contact.badge}
              </Badge>
              <h2 className="font-display text-4xl tracking-[-0.05em] md:text-5xl">
                {content.contact.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/72">
                {content.contact.description}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-[30px] border border-white/12 bg-white/6 p-7">
              <p className="text-base leading-8 text-white/76">
                {content.contact.panelDescription}
              </p>
              <button
                type="button"
                onClick={openContactDialog}
                className="inline-flex items-center gap-2 text-left text-sm font-semibold uppercase tracking-[0.24em] text-white"
              >
                {content.contact.actionLabel}
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </section>

        <footer className="px-5 pb-10 pt-4 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[color:var(--border)] py-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-3xl tracking-[-0.05em] text-[color:var(--foreground)]">
                {content.brand.siteTitle}
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {content.brand.footerBlurb}
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
              {content.brand.tagline}
            </p>
          </div>
        </footer>
      </main>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.contactDialog.title}</DialogTitle>
          <DialogDescription>
            {content.contactDialog.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 grid gap-4">
          {content.contactDialog.options.map((option) => {
            const Icon = iconMap[option.icon];

            return (
              <a
                key={option.title}
                href={option.href}
                target={option.openInNewTab ? "_blank" : undefined}
                rel={option.openInNewTab ? "noreferrer" : undefined}
                className="rounded-[28px] border border-[color:var(--border)] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--secondary)] text-[color:var(--primary)]">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="font-display text-2xl tracking-[-0.04em] text-[color:var(--foreground)]">
                        {option.title}
                      </p>
                      <ChevronRight className="size-4 text-[color:var(--accent)]" />
                    </div>
                    <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {option.description}
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      {option.label}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
