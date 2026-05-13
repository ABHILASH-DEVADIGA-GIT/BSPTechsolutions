import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PRODUCTS, type Product } from "@/lib/products";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageHead({ title: "Product — BSP Tech Solutions", description: "", path: "/products" });
    }
    const p = loaderData.product;
    return pageHead({
      title: `${p.name} — ${p.tagline} | BSP Tech Solutions`,
      description: p.short,
      path: `/products/${p.slug}`,
    });
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl text-[color:var(--navy)]">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-[color:var(--sky)] hover:underline">
        ← Back to products
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl">Couldn't load this product</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

const STATUS_BADGE: Record<string, { label: string; cls: string }> = {
  completed: { label: "Live", cls: "bg-[color:var(--sky)] text-white" },
  upcoming: { label: "Coming Soon", cls: "bg-[color:var(--navy)] text-white" },
  "in-development": { label: "In Development", cls: "bg-secondary text-[color:var(--navy)]" },
};

function ProductDetail() {
  const data = Route.useLoaderData() as { product: Product };
  const p = data.product;
  const badge = STATUS_BADGE[p.status];

  return (
    <article className="container-page py-12">
      <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--navy)] hover:underline">
        <ArrowLeft className="h-4 w-4" /> All products
      </Link>

      {/* Hero */}
      <div className="relative mt-6 overflow-hidden rounded-[28px] card-glass p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--sky) 60%, transparent), transparent 70%)" }}
        />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium shadow-sm ${badge.cls}`}>
              {badge.label}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight">
              <span className="gradient-text">{p.name}</span>
            </h1>
            <p className="mt-2 text-lg text-[color:var(--sky)] font-medium">{p.tagline}</p>
            <p className="mt-5 text-foreground/75 leading-relaxed">{p.full}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppDialog
                defaultProduct={p.name}
                trigger={<Button size="lg" className="shadow-lg shadow-[color:var(--sky)]/30">Request Demo</Button>}
              />
              <Link to="/contact"><Button size="lg" variant="outline">Get Pricing</Button></Link>
            </div>
          </div>
          <div className="relative grid place-items-center min-h-[300px] rounded-[22px] p-10 glow-ring"
               style={{ background: "linear-gradient(160deg, white 0%, var(--surface) 100%)" }}>
            {p.image ? (
              <img src={p.image} alt={p.name} className="max-h-72 object-contain drop-shadow-xl" />
            ) : (
              <div className="text-7xl font-medium gradient-text">{p.name[0]}</div>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="mt-16">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <span className="chip">Features</span>
            <h2 className="mt-3 text-3xl text-[color:var(--navy)]">Key Features</h2>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.features.map((f: string) => (
            <div key={f} className="card-flat p-5 flex items-start gap-3 hover:-translate-y-0.5">
              <div className="h-8 w-8 rounded-lg grid place-items-center shrink-0"
                   style={{ background: "linear-gradient(135deg, var(--sky), var(--navy))" }}>
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm text-foreground/80 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      {p.modules && (
        <section className="mt-14">
          <span className="chip">Modules</span>
          <h2 className="mt-3 text-3xl text-[color:var(--navy)]">Everything in one place</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {p.modules.map((m: string) => (
              <div key={m} className="card-flat p-5 text-center text-sm font-medium text-[color:var(--navy)] hover:-translate-y-0.5">
                {m}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits — DARK section, light text */}
      <section className="mt-16 card-dark p-10 sm:p-12 relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--sky) 80%, transparent), transparent 70%)" }} />
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/25 backdrop-blur">
            Why teams pick {p.name}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl text-white font-medium">Built for real-world business needs</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              ["Easy to use", "Designed for non-technical staff. Mobile-first."],
              ["Affordable", "Plans for solo operators to multi-location teams."],
              ["Real support", "WhatsApp-first onboarding, training and updates."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="font-medium text-white text-lg">{t}</div>
                <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-14 card-glass p-10 text-center">
        <h3 className="text-2xl sm:text-3xl text-[color:var(--navy)]">
          Want to see <span className="gradient-text">{p.name}</span> in action?
        </h3>
        <p className="mt-2 text-foreground/70">Book a free demo or chat with us on WhatsApp.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppDialog
            defaultProduct={p.name}
            trigger={<Button size="lg" className="shadow-lg shadow-[color:var(--sky)]/30">Chat on WhatsApp</Button>}
          />
          <Link to="/contact"><Button size="lg" variant="outline">Contact Sales</Button></Link>
        </div>
      </section>
    </article>
  );
}
