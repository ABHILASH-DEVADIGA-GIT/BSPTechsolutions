import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { TESTIMONIALS } from "@/lib/products";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews & Testimonials | BSP Tech Solutions",
      description:
        "Real reviews from contractors, clinics and equipment owners using NirmanBook, QuickClinic and SmartLekka.",
      path: "/reviews",
    }),
  component: Reviews,
});

function Reviews() {
  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <span className="chip">Reviews</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          What our customers say.
        </h1>
        <p className="mt-4 text-foreground/75 text-lg">
          Honest feedback from real businesses we work with every day.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="card-flat p-6">
            <div className="text-[color:var(--sky)]">{"★".repeat(t.rating)}</div>
            <blockquote className="mt-3 text-foreground/80 leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-medium text-[color:var(--navy)]">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.business}</div>
              <div className="mt-2 chip">{t.product}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
