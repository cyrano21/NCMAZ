import React from "react";
import Logo from "components/Logo/Logo";
import SocialsList1 from "components/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Commencer",
    menus: [
      { href: "/", label: "Installation" },
      { href: "/", label: "Notes de version" },
      { href: "/", label: "Guide de mise à niveau" },
      { href: "/", label: "Support du navigateur" },
      { href: "/", label: "Support éditeur" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "/", label: "Caractéristiques de conception" },
      { href: "/", label: "Prototypage" },
      { href: "/", label: "Systèmes de conception" },
      { href: "/", label: "Prix" },
      { href: "/", label: "Clients" },
    ],
  },
  {
    id: "2",
    title: "Ressources",
    menus: [
      { href: "/", label: "Bonnes pratiques" },
      { href: "/", label: "Support" },
      { href: "/", label: "Développeurs" },
      { href: "/", label: "Apprendre le design" },
      { href: "/", label: "Quoi de neuf" },
    ],
  },
  {
    id: "4",
    title: "Communauté",
    menus: [
      { href: "/", label: "Forums de discussion" },
      { href: "/", label: "Code de conduite" },
      { href: "/", label: "Ressources communautaires" },
      { href: "/", label: "Contributeur" },
      { href: "/", label: "Mode simultané" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative py-16 border-t nc-Footer lg:py-28 border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 col-span-2 gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="flex items-center col-span-2 md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
