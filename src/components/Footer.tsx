import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";
import shield from "@/assets/bsp-shield.png";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--navy)] text-white">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={shield} alt="" className="h-10 w-10" />
            <div className="font-medium text-lg">BSP Tech Solutions</div>
          </div>
          <p className="mt-4 text-sm text-white/75 leading-relaxed">
            Smart, scalable software for real-world businesses. Built in Udupi, deployed across India.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3 text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                {SITE.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-white">{e}</a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Social</h4>
          <div className="flex gap-3">
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/60">
            A unit of Amratheshwari Group · Founded {SITE.founded}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-4 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} BSP Tech Solutions. All rights reserved.</span>
          <span>Built with care in Udupi, Karnataka.</span>
        </div>
      </div>
    </footer>
  );
}
