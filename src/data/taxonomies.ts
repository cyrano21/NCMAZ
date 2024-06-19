import { Route } from "routers/types";
import __taxonomies from "./jsons/__taxonomies.json";
import { TaxonomyType } from "./types";

const DEMO_CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  href: item.href as Route,
  slug: item.slug, // Assurez-vous que chaque item a un slug
}));

const DEMO_TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
  href: item.href as Route,
  slug: item.slug, // Assurez-vous que chaque item a un slug
}));

export { DEMO_CATEGORIES, DEMO_TAGS };
