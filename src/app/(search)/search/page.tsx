import React, { useState } from "react";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import { DEMO_AUTHORS } from "data/authors";
import { DEMO_CATEGORIES } from "data/taxonomies";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import Input from "components/Input/Input";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "components/NcImage/NcImage";
import NcLink from "components/NcLink/NcLink";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Card11 from "components/Card11/Card11";
import ButtonCircle from "components/Button/ButtonCircle";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import Tag from "components/Tag/Tag";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12);
const cats = DEMO_CATEGORIES.filter((_, i) => i < 15);
const tags = DEMO_CATEGORIES.filter((_, i) => i < 32);
const authors = DEMO_AUTHORS.filter((_, i) => i < 12);

const FILTERS = [
  { name: "Les plus récents" },
  { name: "Sélectionnés par l'administrateur" },
  { name: "Les plus appréciés" },
  { name: "Les plus discutés" },
  { name: "Les plus vus" },
];

const TABS = ["Articles", "Catégories", "Tags", "Auteurs"];

const PageSearch = () => {
  const s = "Technologie";

  const [tabActive, setTabActive] = useState(TABS[0]);
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-PageSearch`}>
      {/* EN-TÊTE */}
      <div className="w-screen px-2 mx-auto xl:max-w-screen-2xl">
        <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-9 lg:aspect-h-5 overflow-hidden z-0">
          <NcImage
            alt="search"
            fill
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
        </div>
        {/* CONTENU */}
        <div className="container relative -mt-20 lg:-mt-48">
          <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center">
            <header className="flex flex-col items-center w-full max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold sm:text-4xl">{s}</h2>
              <span className="block mt-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-300">
                Nous avons trouvé{" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                  1135
                </strong>{" "}
                résultats pour{" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                  {s}
                </strong>
              </span>
              <form
                className="relative w-full mt-8 text-left sm:mt-11"
                method="post"
              >
                <label
                  htmlFor="search-input"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  <span className="sr-only">Rechercher toutes les icônes</span>
                  <Input
                    id="search-input"
                    type="search"
                    placeholder="Tapez et appuyez sur Entrée"
                    sizeClass="pl-14 py-5 pr-5 md:pl-16"
                    defaultValue={s}
                  />
                  <ButtonCircle
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                    size=" w-11 h-11"
                    type="submit"
                  >
                    <ArrowSmallRightIcon className="w-6 h-6" />
                  </ButtonCircle>
                  <span className="absolute text-2xl transform -translate-y-1/2 left-5 top-1/2 md:left-6">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                      ></path>
                    </svg>
                  </span>
                </label>
              </form>
              <div className="w-full mt-4 text-sm text-left text-neutral-500 dark:text-neutral-300">
                <div className="inline-block space-x-1.5 sm:space-x-2.5">
                  <span className="">Lié :</span>
                  <NcLink className="inline-block font-normal" href="/search">
                    Design
                  </NcLink>
                  <NcLink className="inline-block font-normal" href="/search">
                    Photo
                  </NcLink>
                  <NcLink className="inline-block font-normal" href="/search">
                    Vector
                  </NcLink>
                  <NcLink className="inline-block font-normal" href="/search">
                    Frontend
                  </NcLink>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      {/* ====================== FIN EN-TÊTE ====================== */}

      <div className="container py-16 space-y-16 lg:pb-28 lg:pt-20 lg:space-y-28">
        <main>
          {/* FILTRE D'ONGLETS */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav
              containerClassName="w-full overflow-x-auto hiddenScrollbar"
              className="sm:space-x-2"
            >
              {TABS.map((item, index) => (
                <NavItem
                  isActive={item === tabActive}
                  key={index}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
            <div className="block w-full my-4 border-b border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                selected={selectedFilter}
                onChange={setSelectedFilter}
              />
            </div>
          </div>

          {/* BOUCLE D'ARTICLES */}
          {tabActive === "Articles" && (
            <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:mt-10">
              {posts.map((post) => (
                <Card11 key={post.id} post={post} />
              ))}
            </div>
          )}
          {/* BOUCLE DE CATÉGORIES */}
          {tabActive === "Catégories" && (
            <div className="grid grid-cols-2 gap-5 mt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8 lg:mt-10">
              {cats.map((cat) => (
                <CardCategory2 key={cat.id} taxonomy={cat} />
              ))}
            </div>
          )}
          {/* BOUCLE DE TAGS */}
          {tabActive === "Tags" && (
            <div className="flex flex-wrap mt-12 ">
              {tags.map((tag) => (
                <Tag className="mb-3 mr-3" key={tag.id} tag={tag} />
              ))}
            </div>
          )}
          {/* BOUCLE D'AUTEURS */}
          {tabActive === "Auteurs" && (
            <div className="grid grid-cols-2 gap-5 mt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8 lg:mt-10">
              {authors.map((author) => (
                <CardAuthorBox2 key={author.id} author={author} />
              ))}
            </div>
          )}

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 space-y-5 lg:mt-16 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Montrez-moi plus</ButtonPrimary>
          </div>
        </main>

        {/* PLUS DE SECTIONS */}
        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="mx-auto mt-10 text-center md:mt-16">
            <ButtonSecondary>Montrez-moi plus</ButtonSecondary>
          </div>
        </div>

        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Auteurs d'élite"
          subHeading="Découvrez nos écrivains d'élite"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        {/* ABONNEMENTS */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageSearch;
