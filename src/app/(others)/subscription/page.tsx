import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Heading2 from "components/Heading/Heading2";
import Layout from "../layout";

export interface PricingItem {
  isPopular: boolean;
  name: string;
  pricing: string;
  desc: string;
  per: string;
  features: string[];
}

const pricings: PricingItem[] = [
  {
    isPopular: false,
    name: "Débutant",
    pricing: "5€",
    per: "/mois",
    features: [
      "Rapports automatisés",
      "Traitement plus rapide",
      "Personnalisations",
    ],
    desc: ` Littéralement, vous n'en avez probablement jamais entendu parler des shorts en jean.`,
  },
  {
    isPopular: true,
    name: "Basique",
    pricing: "15€",
    per: "/mois",
    features: [
      "Tout dans Débutant",
      "100 builds",
      "Rapports d'avancement",
      "Support premium",
    ],
    desc: ` Littéralement, vous n'en avez probablement jamais entendu parler des shorts en jean.`,
  },
  {
    isPopular: false,
    name: "Plus",
    pricing: "25€",
    per: "/mois",
    features: [
      "Tout dans Basique",
      "Builds illimités",
      "Analyses avancées",
      "Évaluations d'entreprise",
    ],
    desc: ` Littéralement, vous n'en avez probablement jamais entendu parler des shorts en jean.`,
  },
];

const PageSubscription = () => {
  const renderPricingItem = (pricing: PricingItem, index: number) => {
    return (
      <div
        key={index}
        className={`h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
          pricing.isPopular
            ? "border-primary-500"
            : "border-neutral-100 dark:border-neutral-700"
        }`}
      >
        {pricing.isPopular && (
          <span className="absolute z-10 px-3 py-1 text-xs tracking-widest text-white rounded-full bg-primary-500 right-3 top-3">
            POPULAIRE
          </span>
        )}
        <div className="mb-8">
          <h3 className="block mb-2 text-sm font-medium tracking-widest uppercase text-neutral-6000 dark:text-neutral-300">
            {pricing.name}
          </h3>
          <h2 className="flex items-center text-5xl leading-none text-neutral-700 dark:text-neutral-300">
            <span>{pricing.pricing}</span>
            <span className="ml-1 text-lg font-normal text-neutral-500 dark:text-neutral-300">
              {pricing.per}
            </span>
          </h2>
        </div>
        <nav className="mb-8 space-y-4">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="inline-flex flex-shrink-0 mr-4 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {item}
              </span>
            </li>
          ))}
        </nav>
        <div className="flex flex-col mt-auto">
          {pricing.isPopular ? (
            <ButtonPrimary>Souscrire</ButtonPrimary>
          ) : (
            <ButtonSecondary>
              <span className="font-medium">Souscrire</span>
            </ButtonSecondary>
          )}
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
            {pricing.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <header className="max-w-2xl mx-auto text-center - mb-14 sm:mb-16 lg:mb-20">
        <Heading2 emoji="💎">Abonnement</Heading2>
        <span className="block mt-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-200">
          Des prix adaptés aux besoins de toutes les tailles d&#39;entreprise.
        </span>
      </header>

      <section className="overflow-hidden text-sm text-neutral-600 md:text-base">
        <div className="grid gap-5 lg:grid-cols-3 xl:gap-8">
          {pricings.map(renderPricingItem)}
        </div>
      </section>
    </Layout>
  );
};

export default PageSubscription;
