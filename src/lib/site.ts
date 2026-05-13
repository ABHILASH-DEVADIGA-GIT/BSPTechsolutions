export const SITE = {
  name: "BSP Tech Solutions",
  tagline: "Smart Solutions for Smart Businesses",
  phone: "7349215966",
  phoneIntl: "+917349215966",
  whatsapp: "917349215966",
  emails: ["info@bsptechsolutions.in", "sales@bsptechsolutions.in"],
  location: "Thekkatte, Udupi, Karnataka, India",
  founder: "Abhilash B Devadiga",
  founded: "April 2026",
  url: "https://bsptechsolutions.in",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
