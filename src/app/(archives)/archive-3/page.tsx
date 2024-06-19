import React, { useState } from "react";
import ModalCategories from "../ModalCategories";
import ModalTags from "../ModalTags";
import { DEMO_POSTS_VIDEO } from "data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Card10V2 from "components/Card10/Card10V2";

const PageArchiveVideo = () => {
  const FILTERS = [
    { name: "Les plus récents" },
    { name: "Sélectionnés par l'administrateur" },
    { name: "Les plus appréciés" },
    { name: "Les plus discutés" },
    { name: "Les plus vus" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  return (
    <div className={`nc-PageArchiveVideo`}>
      <div className="text-white dark bg-neutral-900/95">
        <div className="container py-16 lg:py-28 ">
          {/* EN-TÊTE */}
          <h2 className="inline-block text-5xl font-semibold align-middle md:text-6xl ">
            Vidéos
          </h2>
          <span className="block mt-4 text-neutral-300">1100 Vidéos</span>
          {/* ====================== FIN EN-TÊTE ====================== */}
          <div className="flex flex-col mt-16 sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block w-full my-4 border-b border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                selected={selectedFilter}
                onChange={setSelectedFilter}
              />
            </div>
          </div>

          {/* BOUCLE DES ARTICLES */}
          <div className="grid mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 lg:mt-10">
            {DEMO_POSTS_VIDEO.map((post) => (
              <Card10V2 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 space-y-5 lg:mt-16 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Montrez-moi plus</ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="container py-16 space-y-16 lg:py-28 lg:space-y-28">
        {/* SECTIONS SUPPLÉMENTAIRES */}
        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Meilleurs auteurs d'élite"
          subHeading="Découvrez nos écrivains d'élite"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

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

        {/* ABONNEMENTS */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchiveVideo;
