import React from "react";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const data = [
  { name: "Nom de l'abonnement", content: " Premium" },
  { name: "Détails du forfait et de la facturation", content: " 222,00 $" },
  { name: "Articles restants", content: " 18" },
  { name: "Date d'expiration", content: " 20 octobre 2021" },
];

const DashboardSubcription = () => {
  return (
    <Layout>
      <LayoutDashboard>
        <div className="overflow-hidden bg-white shadow dark:bg-neutral-900 dark:border dark:border-neutral-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-neutral-900 dark:text-neutral-200">
              Informations sur le forfait
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {`Vous avez souscrit au forfait suivant`}
            </p>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-900">
            <dl>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-neutral-50 dark:bg-neutral-800"
                        : "bg-white dark:bg-neutral-900"
                    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                  >
                    <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-200 sm:mt-0 sm:col-span-2">
                      {item.content}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardSubcription;
