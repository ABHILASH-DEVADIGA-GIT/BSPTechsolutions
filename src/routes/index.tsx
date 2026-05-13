import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Sparkles, Zap, MapPin, IndianRupee, LifeBuoy, Smartphone } from "lucide-react";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import { Button } from "@/components/ui/button";
import { SERVICES, PRODUCTS, TESTIMONIALS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "BSP Tech Solutions — Smart Software for Smart Businesses",
      description:
        "Custom websites, business automation, booking systems and SaaS products for clinics, contractors, transport and enterprises. Built in Udupi, Karnataka.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  const completed = PRODUCTS.filter((p) => p.status === "completed");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-14 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fade-up_0.7s_ease-out]">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" /> Founded {SITE.founded} · Udupi
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-[color:var(--navy)]">
              Smart Solutions for{" "}
              <span className="text-[color:var(--sky)]">Smart Business</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/75 max-w-xl">
              Transforming businesses with powerful digital platforms, automation
              systems, and custom software solutions designed for real-world business needs.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">
              Founded by {SITE.founder}, we help businesses move from manual operations
              to smart digital systems — websites, ERPs, booking, tracking and more.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/products">
                <Button size="lg" className="gap-2">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
              <WhatsAppDialog
                trigger={
                  <Button size="lg" variant="ghost" className="gap-2">
                    <MessageCircle className="h-4 w-4" /> Get Custom Website
                  </Button>
                }
              />
            </div>

            <div className="mt-10 grid grid-cols-3 max-w-md gap-4 text-center">
              {[
                ["3+", "Live Products"],
                ["7+", "Services"],
                ["100%", "WhatsApp Support"],
              ].map(([n, l]) => (
                <div key={l} className="card-flat py-3 px-2">
                  <div className="text-xl font-medium text-[color:var(--navy)]">{n}</div>
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated logo */}
          <div className="relative">
            <div className="card-flat p-10 lg:p-14 grid place-items-center">
              <AnimatedLogo size={360} />
              <div className="mt-6 text-center">
                <div className="text-[color:var(--navy)] font-medium text-lg">BSP Tech Solutions</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Smart Solutions for Smart Businesses
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Why BSP</span>
          <h2 className="mt-3 text-3xl sm:text-4xl text-[color:var(--navy)]">
            Built for Businesses That Need Real Support
          </h2>
          <p className="mt-3 text-foreground/70">
            We don't just build software — we build long-term business relationships.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { i: MapPin, t: "Local & Accessible", d: "Based in Thekkatte, Udupi — meet us in person any time." },
            { i: MessageCircle, t: "WhatsApp-First Support", d: "No tickets. Direct chat for fast resolution." },
            { i: CheckCircle2, t: "Built for Indian Businesses", d: "GST billing, mobile-first, regional workflows." },
            { i: IndianRupee, t: "Affordable Pricing", d: "Cost-effective plans without enterprise pricing." },
            { i: Zap, t: "Fast Delivery", d: "Most websites live in 5–7 days; software in 2–4 weeks." },
            { i: LifeBuoy, t: "Post-Launch Support", d: "Updates, training, and improvements after go-live." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="card-flat p-6 hover:bg-secondary/40 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-secondary text-[color:var(--navy)] grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[color:var(--navy)]">{t}</h3>
              <p className="mt-1.5 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white border-y border-border">
        <div className="container-page py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="chip">Services</span>
              <h2 className="mt-3 text-3xl sm:text-4xl text-[color:var(--navy)]">What We Build</h2>
            </div>
            <Link to="/services" className="text-sm text-[color:var(--navy)] hover:underline">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.title} className="card-flat p-5">
                <div className="flex items-center gap-2 text-[color:var(--sky)]">
                  <Smartphone className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wide">Service</span>
                </div>
                <h3 className="mt-2 text-base font-medium text-[color:var(--navy)]">{s.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="chip">Products</span>
            <h2 className="mt-3 text-3xl sm:text-4xl text-[color:var(--navy)]">Our Live Platforms</h2>
          </div>
          <Link to="/products" className="text-sm text-[color:var(--navy)] hover:underline">
            All products →
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {completed.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="card-flat p-6 group hover:-translate-y-0.5 transition-transform"
            >
              {p.image && (
                <div className="aspect-[4/3] grid place-items-center bg-secondary rounded-xl overflow-hidden">
                  <img src={p.image} alt={p.name} className="max-h-[80%] object-contain" />
                </div>
              )}
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-[color:var(--navy)]">{p.name}</h3>
                <span className="text-xs text-[color:var(--sky)]">Live</span>
              </div>
              <p className="mt-1.5 text-sm text-foreground/70">{p.tagline}</p>
              <div className="mt-3 text-sm text-[color:var(--navy)] group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="bg-white border-y border-border">
        <div className="container-page py-16">
          <div className="text-center max-w-xl mx-auto">
            <span className="chip">Reviews</span>
            <h2 className="mt-3 text-3xl text-[color:var(--navy)]">What Customers Say</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card-flat p-6">
                <div className="text-[color:var(--sky)] text-sm">{"★".repeat(t.rating)}</div>
                <blockquote className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-medium text-[color:var(--navy)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.business} · {t.product}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div
          className="rounded-2xl p-10 sm:p-14 text-center text-white border-0 shadow-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--navy) 0%, color-mix(in oklch, var(--navy) 70%, var(--sky)) 100%)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-white">Ready to Take Your Business Digital?</h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">
            From websites to complete business management platforms — let's simplify your operations
            with smart technology solutions.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[color:var(--navy)] hover:bg-white/90">
                Get Free Consultation
              </Button>
            </Link>
            <WhatsAppDialog
              trigger={
                <Button size="lg" className="gap-2 bg-[color:var(--sky)] text-white hover:bg-[color:var(--sky)]/90">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </Button>
              }
            />
            <a href={`tel:${SITE.phoneIntl}`}>
              <Button size="lg" variant="outline" className="gap-2 border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
