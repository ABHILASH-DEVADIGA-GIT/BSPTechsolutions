import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SERVICES } from "@/lib/products";
import { Code2, Workflow, LayoutDashboard, CalendarCheck, MapPin, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ICONS = [Code2, Workflow, LayoutDashboard, CalendarCheck, MapPin, Cloud, Smartphone];

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services — Web, Software, Automation & ERP | BSP Tech Solutions",
      description:
        "Custom websites, business automation, management software, booking systems, tracking platforms, SaaS development and mobile-friendly apps. Karnataka & all-India delivery.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <span className="chip">Services</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          Software services for every stage of your business.
        </h1>
        <p className="mt-4 text-foreground/75 text-lg">
          From your first website to a multi-location SaaS — we cover the full stack.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={s.title} className="card-flat p-6">
              <div className="h-11 w-11 rounded-xl bg-secondary text-[color:var(--navy)] grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-medium text-[color:var(--navy)]">{s.title}</h2>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 card-flat p-8 text-center">
        <h3 className="text-2xl text-[color:var(--navy)]">Need something custom?</h3>
        <p className="mt-2 text-foreground/70">
          Tell us your workflow — we'll design software that fits.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link to="/contact"><Button size="lg">Start a Project</Button></Link>
          <Link to="/products"><Button size="lg" variant="outline">See Live Products</Button></Link>
        </div>
      </div>
    </div>
  );
}
