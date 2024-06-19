import { NavItemType } from "components/Navigation/NavigationItem";
import { Route } from "routers/types";
import _ from "lodash";

const randomId = _.uniqueId;

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  // Pages d'accueil ---------
  {
    id: randomId(),
    href: "",
    name: "Page d'accueil",
    children: [
      { id: randomId(), href: "/", name: "Accueil 1" },
      { id: randomId(), href: "/home-2", name: "Accueil 2" },
      { id: randomId(), href: "/home-3", name: "Accueil 3" },
      { id: randomId(), href: "/home-4", name: "Accueil 4" },
      { id: randomId(), href: "/home-6", name: "Accueil 5" },
      { id: randomId(), href: "/", name: "Style de l'en-tête 1", isNew: true },
      {
        id: randomId(),
        href: "/home-2",
        name: "Style de l'en-tête 2",
        isNew: true,
      },
    ],
  },

  // Pages individuelles ---------
  {
    id: randomId(),
    href: "/single/demo-slug" as Route,
    name: "Pages individuelles",
    children: [
      {
        id: randomId(),
        href: "/single/demo-slug" as Route,
        name: "Page individuelle 1",
      },
      {
        id: randomId(),
        href: "/single-2/demo-slug" as Route,
        name: "Page individuelle 2",
      },
      {
        id: randomId(),
        href: "/single-3/demo-slug" as Route,
        name: "Page individuelle 3",
      },
      {
        id: randomId(),
        href: "/single-4/demo-slug" as Route,
        name: "Page individuelle 4",
      },

      {
        id: randomId(),
        href: "/single-audio/demo-slug" as Route,
        name: "Audio individuel",
      },
      {
        id: randomId(),
        href: "/single-video/demo-slug" as Route,
        name: "Vidéo individuelle",
      },
      {
        id: randomId(),
        href: "/single-gallery/demo-slug" as Route,
        name: "Galerie individuelle",
        isNew: true,
      },
    ],
  },

  // Pages d'archive ---------
  {
    id: randomId(),
    href: "",
    name: "Pages d'archive",
    children: [
      {
        id: randomId(),
        href: "/archive/demo-slug" as Route,
        name: "Page de catégorie",
      },
      {
        id: randomId(),
        href: "/archive-2/demo-slug" as Route,
        name: "Catégorie audio",
      },
      {
        id: randomId(),
        href: "/archive-3/demo-slug" as Route,
        name: "Catégorie vidéo",
      },
      {
        id: randomId(),
        href: "/search",
        name: "Page de recherche",
      },
      {
        id: randomId(),
        href: "/search-2",
        name: "Page de recherche 2",
      },
      {
        id: randomId(),
        href: "/author/demo-slug" as Route,
        name: "Page auteur",
      },
    ],
  },

  // Autres pages ----------------
  {
    id: randomId(),
    href: "",
    name: "Autres pages",
    children: [
      { id: randomId(), href: "/dashboard", name: "Tableau de bord" },
      { id: randomId(), href: "/about", name: "À propos" },
      { id: randomId(), href: "/contact", name: "Contactez-nous" },
      {
        id: randomId(),
        href: "/login",
        name: "Connexion",
      },
      {
        id: randomId(),
        href: "/signup",
        name: "Inscription",
      },
      {
        id: randomId(),
        href: "/forgot-pass",
        name: "Mot de passe oublié",
      },
      {
        id: randomId(),
        href: "/subscription",
        name: "Abonnement",
      },
    ],
  },
];

const OTHER_PAGE_CHILD: NavItemType[] = [
  // Pages d'archive ----------------
  {
    id: randomId(),
    href: "/archive/demo-slug" as Route,
    name: "Pages de catégories",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/archive/demo-slug" as Route,
        name: "Catégorie 1",
      },
      {
        id: randomId(),
        href: "/archive-2/demo-slug" as Route,
        name: "Catégorie 2",
      },
      {
        id: randomId(),
        href: "/archive-3/demo-slug" as Route,
        name: "Catégorie 3",
      },
    ],
  },

  // Pages individuelles ----------------
  {
    id: randomId(),
    href: "/single/demo-slug" as Route,
    name: "Pages individuelles",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/single/demo-slug" as Route,
        name: "Individuelle 1",
      },
      {
        id: randomId(),
        href: "/single-2/demo-slug" as Route,
        name: "Individuelle 2",
      },
      {
        id: randomId(),
        href: "/single-3/demo-slug" as Route,
        name: "Individuelle 3",
      },
      {
        id: randomId(),
        href: "/single-4/demo-slug" as Route,
        name: "Individuelle 4",
      },
      {
        id: randomId(),
        href: "/single-5/demo-slug" as Route,
        name: "Individuelle 5",
      },
      {
        id: randomId(),
        href: "/single-audio/demo-slug" as Route,
        name: "Audio individuel",
      },
      {
        id: randomId(),
        href: "/single-video/demo-slug" as Route,
        name: "Vidéo individuelle",
      },
      {
        id: randomId(),
        href: "/single-gallery/demo-slug" as Route,
        name: "Galerie individuelle",
      },
    ],
  },

  // Pages de recherche ----------------
  {
    id: randomId(),
    href: "/search",
    name: "Page de recherche",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/search",
        name: "Page de recherche",
      },
      {
        id: randomId(),
        href: "/search-2",
        name: "Page de recherche 2",
      },
    ],
  },

  // Pages d'auteur ----------------
  {
    id: randomId(),
    href: "/author/demo-slug" as Route,
    name: "Page auteur",
  },

  // Pages du tableau de bord ----------------
  {
    id: randomId(),
    href: "/dashboard",
    name: "Page du tableau de bord",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/dashboard/edit-profile",
        name: "Page de modification du profil",
      },
      {
        id: randomId(),
        href: "/dashboard/posts",
        name: "Page des publications",
      },
      {
        id: randomId(),
        href: "/dashboard/submit-post",
        name: "Page de soumission",
      },
      {
        id: randomId(),
        href: "/dashboard/subscription",
        name: "Abonnement",
      },
      {
        id: randomId(),
        href: "/dashboard/billing-address",
        name: "Adresse de facturation",
      },
    ],
  },

  // Pages d'informations ----------------
  {
    id: randomId(),
    href: "/about",
    name: "Autres pages",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/about",
        name: "À propos",
      },
      {
        id: randomId(),
        href: "/contact",
        name: "Contactez-nous",
      },
      {
        id: randomId(),
        href: "/login",
        name: "Connexion",
      },
      {
        id: randomId(),
        href: "/signup",
        name: "Inscription",
      },
      {
        id: randomId(),
        href: "/forgot-pass",
        name: "Mot de passe oublié",
      },
      {
        id: randomId(),
        href: "/subscription",
        name: "Abonnement",
      },
    ],
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: randomId(),
    href: "/",
    name: "Accueil",
    type: "dropdown",
    children: [
      { id: randomId(), href: "/", name: "Accueil 1" },
      { id: randomId(), href: "/home-2", name: "Accueil 2" },
      { id: randomId(), href: "/home-3", name: "Accueil 3" },
      { id: randomId(), href: "/home-4", name: "Accueil 4" },
      { id: randomId(), href: "/home-6", name: "Accueil 5" },
      { id: randomId(), href: "/", name: "Style de l'en-tête 1", isNew: true },
      {
        id: randomId(),
        href: "/home-2",
        name: "Style de l'en-tête 2",
        isNew: true,
      },
      { id: randomId(), href: "/home-3", name: "Style de l'en-tête 3" },
    ],
  },

  // Pages individuelles ----------------
  {
    id: randomId(),
    href: "/single/demo-slug" as Route,
    name: "Individuelles",
    type: "dropdown",
    children: [
      {
        id: randomId(),
        href: "/single/demo-slug" as Route,
        name: "Page individuelle 1",
      },
      {
        id: randomId(),
        href: "/single-2/demo-slug" as Route,
        name: "Page individuelle 2",
      },
      {
        id: randomId(),
        href: "/single-3/demo-slug" as Route,
        name: "Page individuelle 3",
      },
      {
        id: randomId(),
        href: "/single-4/demo-slug" as Route,
        name: "Page individuelle 4",
      },

      {
        id: randomId(),
        href: "/single-audio/demo-slug" as Route,
        name: "Audio individuel",
      },
      {
        id: randomId(),
        href: "/single-video/demo-slug" as Route,
        name: "Vidéo individuelle",
      },
      {
        id: randomId(),
        href: "/single-gallery/demo-slug" as Route,
        name: "Galerie individuelle",
        isNew: true,
      },
    ],
  },

  {
    id: randomId(),
    href: "/archive/demo-slug" as Route,
    name: "Beauté",
  },

  {
    id: randomId(),
    href: "/archive/demo-slug" as Route,
    name: "Sport",
  },
  {
    id: randomId(),
    href: "/search",
    name: "Templates",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
  {
    id: randomId(),
    href: "/search",
    name: "Explorer",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];
