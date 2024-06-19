import React from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const people = [
  {
    id: 1,
    title: "La Fashion Week de Tokyo redevient formidable",
    image:
      "https://images.unsplash.com/photo-1617059063772-34532796cdb5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "Non applicable",
  },
  {
    id: 2,
    title: "Voyager a tendance à amplifier toutes les émotions humaines",
    image:
      "https://images.unsplash.com/photo-1622987437805-5c6f7c2609d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "Non applicable",
  },
  {
    id: 3,
    title: "Design d'intérieur : Hexagon est le nouveau cercle en 2018",
    image:
      "https://images.unsplash.com/photo-1617201277988-f0efcc14e626?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "Non applicable",
  },
  {
    id: 4,
    title:
      "Les musées et jardins du patrimoine ouvriront avec un nouveau paysage",
    image:
      "https://images.unsplash.com/photo-1622960748096-1983e5f17824?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "Non applicable",
  },
  {
    id: 5,
    title:
      "L'homme accepte de terminer un travail de peinture du phare de Hereford Inlet d'une valeur de 5 000 €",
    image:
      "https://images.unsplash.com/photo-1617202227468-7597afc7046d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: false,
    payment: "Non applicable",
  },
  {
    id: 6,
    title:
      "Denton Corker Marshall la mystérieuse boîte noire est le pavillon de la biennale",
    image:
      "https://images.unsplash.com/photo-1622978147823-33d5e241e976?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
    liveStatus: true,
    payment: "Non applicable",
  },
];

const DashboardPosts = () => {
  return (
    <Layout>
      <LayoutDashboard>
        <div className="flex flex-col space-y-8">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full px-1 py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow dark:border dark:border-neutral-800 sm:rounded-lg">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                  <thead className="bg-neutral-50 dark:bg-neutral-800">
                    <tr className="text-xs font-medium tracking-wider text-left uppercase text-neutral-500 dark:text-neutral-300">
                      <th scope="col" className="px-6 py-3">
                        Article
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Statut
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Paiement
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Éditer</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:bg-neutral-900 divide-neutral-200 dark:divide-neutral-800">
                    {people.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center max-w-md overflow-hidden w-96 lg:w-auto">
                            <NcImage
                              containerClassName="flex-shrink-0 h-12 w-12 rounded-lg relative z-0 overflow-hidden lg:h-14 lg:w-14"
                              src={item.image}
                              fill
                              sizes="80px"
                              alt="post"
                            />
                            <div className="flex-grow ml-4">
                              <h2 className="inline-flex text-sm font-semibold line-clamp-2 dark:text-neutral-300">
                                {item.title}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.liveStatus ? (
                            <span className="inline-flex px-2 text-xs font-medium leading-5 text-teal-900 bg-teal-100 rounded-full lg:text-sm">
                              Actif
                            </span>
                          ) : (
                            <span className="inline-flex px-2 text-sm rounded-full text-neutral-500 dark:text-neutral-400">
                              Hors ligne
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-neutral-500 dark:text-neutral-400">
                          <span> {item.payment}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-neutral-300">
                          <a
                            href="/#"
                            className="text-primary-800 dark:text-primary-500 hover:text-primary-900"
                          >
                            Éditer
                          </a>
                          {` | `}
                          <a
                            href="/#"
                            className="text-rose-600 hover:text-rose-900"
                          >
                            Supprimer
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardPosts;
