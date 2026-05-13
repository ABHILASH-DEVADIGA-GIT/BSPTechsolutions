import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About BSP Tech Solutions — Software Company in Udupi",
      description:
        "BSP Tech Solutions is a software company in Udupi founded by Abhilash B Devadiga. We build modern digital solutions for businesses across India.",
      path: "/about",
    }),
  component: About,
});

function About() {
  const offerings = [
    "Custom Website Development",
    "Business Automation Software",
    "SaaS Product Development",
    "Booking & Appointment Systems",
    "Tracking & Monitoring Platforms",
    "ERP & Management Systems",
    "Mobile-Friendly Web Applications",
  ];

  return (
    <div className="container-page py-16">
      <div className="max-w-3xl">
        <span className="chip">About</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          Building reliable software for real-world industries.
        </h1>
        <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
          BSP Tech Solutions is a software development company based in Udupi,
          founded in {SITE.founded} by {SITE.founder}. We specialize in modern
          digital solutions that simplify business operations, improve productivity,
          and help companies grow with technology.
        </p>
        <p className="mt-4 text-foreground/75 leading-relaxed">
          As a unit of Amratheshwari Group, our vision is to build reliable and
          scalable software products for real-world industries.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="card-flat p-7">
          <h2 className="text-xl font-medium text-[color:var(--navy)]">Our Mission</h2>
          <p className="mt-3 text-foreground/75">
            To help businesses go digital with smart, scalable, and affordable
            technology solutions — built around how people actually work.
          </p>
        </div>
        <div className="card-flat p-7">
          <h2 className="text-xl font-medium text-[color:var(--navy)]">Our Vision</h2>
          <p className="mt-3 text-foreground/75">
            To be the most trusted software partner for growing Indian businesses,
            from local clinics to nationwide enterprises.
          </p>
        </div>
      </div>

      <div className="mt-12 card-flat p-7">
        <h2 className="text-xl font-medium text-[color:var(--navy)]">What We Provide</h2>
        <ul className="mt-5 grid sm:grid-cols-2 gap-3">
          {offerings.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-[color:var(--sky)]" />
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 card-flat p-7 bg-secondary/60">
        <div className="text-sm uppercase tracking-wide text-muted-foreground">Founder</div>
        <div className="mt-1 text-2xl text-[color:var(--navy)] font-medium">{SITE.founder}</div>
        <p className="mt-2 text-foreground/70 text-sm">
          Based in {SITE.location}. A unit of Amratheshwari Group.
        </p>
      </div>
    </div>
  );
}
