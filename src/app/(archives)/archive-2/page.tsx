import React, { useState } from "react";
import ModalCategories from "../ModalCategories";
import ModalTags from "../ModalTags";
import { DEMO_POSTS_AUDIO } from "data/posts";
import { PostDataType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "components/NcImage/NcImage";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";

const PageArchiveAudio = () => {
  const FILTERS = [
    { name: "Les plus récents" },
    { name: "Sélectionnés par l'administrateur" },
    { name: "Les plus appréciés" },
    { name: "Les plus discutés" },
    { name: "Les plus vus" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  const renderSection = (sectionPosts: PostDataType[]) => {
    const loopPosts = sectionPosts.filter((_, i) => i > 2);
    return (
      <div className="grid gap-6 mt-8 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        <Card16Podcast post={sectionPosts[0]} />
        <Card16Podcast post={sectionPosts[1]} />
        <Card16Podcast post={sectionPosts[2]} />
        <div className="md:col-span-2 lg:col-span-3">
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`}>
            {loopPosts.map((p, i) => (
              <Card15Podcast key={i} post={p} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-PageArchiveAudio `}>
      {/* EN-TÊTE */}
      <div className="w-full px-2 mx-auto xl:max-w-screen-2xl">
        <div className="relative z-0 overflow-hidden rounded-3xl aspect-w-16 aspect-h-12 sm:aspect-h-7 lg:aspect-h-6 xl:aspect-h-5 2xl:aspect-h-4">
          <NcImage
            alt="archive"
            fill
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
            <h2 className="inline-block ml-3 text-5xl font-semibold align-middle md:text-7xl ">
              Podcast
            </h2>
            <span className="block mt-4 text-neutral-300">122 Podcasts</span>
          </div>
        </div>
      </div>
      {/* ====================== FIN EN-TÊTE ====================== */}

      <div className="container py-16 space-y-16 lg:pb-28 lg:pt-20 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block w-full my-4 border-b border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                selected={selectedFilter}
                onChange={setSelectedFilter}
              />
            </div>
          </div>

          {/* BOUCLE DES ARTICLES */}
          {renderSection(DEMO_POSTS_AUDIO.filter((_, i) => i < 29))}

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 space-y-5 lg:mt-16 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Montrez-moi plus</ButtonPrimary>
          </div>
        </div>

        {/* SECTIONS SUPPLÉMENTAIRES */}
        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Meilleurs auteurs d'élite"
            subHeading="Découvrez nos écrivains d'élite"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />
        </div>

        {/* ABONNEMENTS */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchiveAudio;
