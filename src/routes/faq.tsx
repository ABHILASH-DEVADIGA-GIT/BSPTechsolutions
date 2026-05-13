import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { FAQS } from "@/lib/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => {
    const base = pageHead({
      title: "FAQ — BSP Tech Solutions",
      description:
        "Answers to common questions about our software, custom development, pricing, support, and delivery timelines.",
      path: "/faq",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: Faq,
});

function Faq() {
  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <span className="chip">FAQ</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          Frequently asked questions.
        </h1>
        <p className="mt-4 text-foreground/75 text-lg">
          Can't find what you're looking for? Just message us on WhatsApp.
        </p>
      </div>

      <div className="mt-10 max-w-3xl card-flat p-2">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-4">
              <AccordionTrigger className="text-left text-[color:var(--navy)] font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
