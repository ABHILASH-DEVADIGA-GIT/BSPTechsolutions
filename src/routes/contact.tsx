import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact BSP Tech Solutions — Udupi, Karnataka",
      description:
        "Call, WhatsApp or email BSP Tech Solutions. Located in Thekkatte, Udupi. We respond fast and serve all of Karnataka and India.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Tell us a bit more").max(800),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const { name, phone, message } = parsed.data;
    const text = `Hi BSP Tech Solutions,\n\nName: ${name}\nPhone: ${phone}\n\n${message}`;
    window.open(waLink(text), "_blank", "noopener");
    toast.success("Opening WhatsApp…");
  };

  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <span className="chip">Contact</span>
        <h1 className="mt-3 text-4xl sm:text-5xl text-[color:var(--navy)]">
          Let's build your business digitally.
        </h1>
        <p className="mt-4 text-foreground/75 text-lg">
          Whether you need a custom website, business software, or one of our ready-made platforms — we're here to help.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-4">
          <a href={`tel:${SITE.phoneIntl}`} className="card-flat p-5 flex items-center gap-4 hover:bg-secondary/40 transition-colors">
            <div className="h-11 w-11 rounded-xl bg-[color:var(--sky)] text-white grid place-items-center">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us</div>
              <div className="font-medium text-[color:var(--navy)]">{SITE.phone}</div>
            </div>
          </a>

          <div className="card-flat p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-[#25D366] text-white grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
              <div className="font-medium text-[color:var(--navy)]">Chat for demos & quick replies</div>
            </div>
            <WhatsAppDialog trigger={<Button size="sm">Chat</Button>} />
          </div>

          <div className="card-flat p-5 flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-secondary text-[color:var(--navy)] grid place-items-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              {SITE.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block text-[color:var(--navy)] hover:underline">
                  {e}
                </a>
              ))}
            </div>
          </div>

          <div className="card-flat p-5 flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-secondary text-[color:var(--navy)] grid place-items-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Office</div>
              <div className="font-medium text-[color:var(--navy)]">{SITE.location}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="card-flat p-7 space-y-4">
          <h2 className="text-xl font-medium text-[color:var(--navy)]">Send a message</h2>
          <p className="text-sm text-muted-foreground">We'll route it straight to WhatsApp for the fastest reply.</p>
          <div>
            <label className="text-sm font-medium text-[color:var(--navy)]">Your name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[color:var(--sky)]"
              placeholder="e.g. Rohan Shetty"
              maxLength={80}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[color:var(--navy)]">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[color:var(--sky)]"
              placeholder="+91 ..."
              maxLength={20}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[color:var(--navy)]">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[color:var(--sky)] resize-none"
              placeholder="Tell us what you're looking for"
              maxLength={800}
            />
          </div>
          <Button type="submit" size="lg" className="w-full gap-2">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}
