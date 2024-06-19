import React from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "10 millions",
    subHeading: "Articles ont été publiés dans le monde (au 30 septembre 2021)",
  },
  {
    id: "2",
    heading: "100 000",
    subHeading: "Utilisateurs enregistrés (au 30 septembre 2021)",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Pays et régions où nous sommes présents (au 30 septembre 2021)",
  },
];

const SectionStatistic = () => {
  return (
    <div className={`nc-SectionStatistic relative`}>
      <Heading desc="Nous sommes impartiaux et indépendants, et chaque jour, nous créons des programmes et des contenus distinctifs de classe mondiale.">
        🚀 Chiffres Clés
      </Heading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block mt-3 text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
