import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PRODUCTS } from "@/lib/products";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () =>
    pageHead({
      title: "Products — NirmanBook, QuickClinic, SmartLekka & More | BSP Tech",
      description:
        "Live SaaS products: NirmanBook (construction), QuickClinic (clinic appointments), SmartLekka (JCB finance). Upcoming: VibeBus, BSP Yatra, FieldTrack.",
      path: "/products",
    }),
  component: Products,
});

const STATUS_LABEL: Record<string, string> = {
  completed: "Live",
  upcoming: "Coming Soon",
  "in-development": "In Development",
};

function Products() {
  const completed = PRODUCTS.filter((p) => p.status === "completed");
  const upcoming = PRODUCTS.filter((p) => p.status !== "completed");

  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <span className="chip">Our Products</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          Software you can launch with today.
        </h1>
        <p className="mt-4 text-foreground/75 text-lg">
          Three live SaaS platforms in production, with three more on the way.
        </p>
      </div>

      <h2 className="mt-12 text-sm uppercase tracking-wider text-muted-foreground">Completed Products</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-5">
        {completed.map((p) => (
          <Link
            key={p.slug}
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="card-flat p-6 group hover:-translate-y-0.5 transition-transform"
          >
            {p.image && (
              <div className="aspect-[4/3] bg-secondary rounded-xl grid place-items-center overflow-hidden">
                <img src={p.image} alt={p.name} className="max-h-[80%] object-contain" />
              </div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-[color:var(--navy)]">{p.name}</h3>
              <span className="text-xs text-[color:var(--sky)]">Live</span>
            </div>
            <p className="mt-1.5 text-sm text-foreground/70">{p.tagline}</p>
            <p className="mt-3 text-sm text-foreground/60 line-clamp-2">{p.short}</p>
            <div className="mt-4 text-sm text-[color:var(--navy)] group-hover:underline">View details →</div>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 text-sm uppercase tracking-wider text-muted-foreground">Upcoming</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-5">
        {upcoming.map((p) => (
          <Link
            key={p.slug}
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="card-flat p-6 hover:-translate-y-0.5 transition-transform"
          >
            <span className="chip">
              <Sparkles className="h-3 w-3" /> {STATUS_LABEL[p.status]}
            </span>
            <h3 className="mt-3 text-lg font-medium text-[color:var(--navy)]">{p.name}</h3>
            <p className="mt-1 text-sm text-foreground/70">{p.tagline}</p>
            <p className="mt-3 text-sm text-foreground/60 line-clamp-2">{p.short}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
