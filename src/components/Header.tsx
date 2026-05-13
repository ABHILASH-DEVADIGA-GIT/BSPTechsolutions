import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import shield from "@/assets/bsp-shield.png";
import { WhatsAppDialog } from "./WhatsAppDialog";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={shield} alt="" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-[15px] font-medium text-[color:var(--navy)]">BSP Tech Solutions</div>
            <div className="text-[10.5px] text-muted-foreground tracking-wide uppercase">
              Smart Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => {
            const active = location.pathname === n.to ||
              (n.to !== "/" && location.pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "text-[color:var(--navy)] bg-secondary font-medium"
                    : "text-foreground/80 hover:text-[color:var(--navy)] hover:bg-secondary"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${SITE.phoneIntl}`}>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </Button>
          </a>
          <WhatsAppDialog />
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={`tel:${SITE.phoneIntl}`} className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" /> Call
                </Button>
              </a>
              <WhatsAppDialog
                trigger={<Button className="flex-1">WhatsApp</Button>}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
