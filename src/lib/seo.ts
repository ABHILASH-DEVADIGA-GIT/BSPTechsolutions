import { SITE } from "@/lib/site";

interface Props {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/** Returns a TanStack `head()` meta object with full SEO + OG/Twitter tags. */
export function pageHead({ title, description, path, image }: Props) {
  const url = `${SITE.url}${path}`;
  const og = image ?? `${SITE.url}/og-bsp.png`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: og },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: og },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
