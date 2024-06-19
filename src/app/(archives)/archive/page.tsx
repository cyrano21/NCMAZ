import React, { useState, useEffect } from "react";
import ModalCategories from "../ModalCategories";
import ModalTags from "../ModalTags";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "components/Card11/Card11";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Image from "components/Image";

// Tag and category have same data type - we will use one demo data
const allPosts: PostDataType[] = DEMO_POSTS;

const PageArchive = () => {
  const FILTERS = [
    { name: "Les plus récents" },
    { name: "Sélectionnés par l'administrateur" },
    { name: "Les plus appréciés" },
    { name: "Les plus discutés" },
    { name: "Les plus vus" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  const [filteredPosts, setFilteredPosts] = useState<PostDataType[]>(allPosts);

  useEffect(() => {
    let sortedPosts = [...allPosts];
    switch (selectedFilter.name) {
      case "Les plus récents":
        sortedPosts = sortedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "Sélectionnés par l'administrateur":
        // Implement admin selected logic here
        break;
      case "Les plus appréciés":
        sortedPosts = sortedPosts.sort((a, b) => b.like.count - a.like.count);
        break;
      case "Les plus discutés":
        sortedPosts = sortedPosts.sort(
          (a, b) => b.commentCount - a.commentCount
        );
        break;
      case "Les plus vus":
        sortedPosts = sortedPosts.sort((a, b) => b.viewdCount - a.viewdCount);
        break;
      default:
        break;
    }
    setFilteredPosts(sortedPosts);
  }, [selectedFilter]);

  return (
    <div className={`nc-PageArchive`}>
      {/* EN-TÊTE */}
      <div className="w-full px-2 mx-auto xl:max-w-screen-2xl">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
            <h2 className="inline-block text-5xl font-semibold align-middle md:text-7xl ">
              Jardin
            </h2>
            <span className="block mt-4 text-neutral-300">115 Articles</span>
          </div>
        </div>
      </div>
      {/* ====================== FIN EN-TÊTE ====================== */}

      <div className="container pt-10 pb-16 space-y-16 lg:pb-28 lg:pt-20 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
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
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:mt-10">
            {filteredPosts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

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
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="mx-auto mt-10 text-center md:mt-16">
            <ButtonSecondary loading>Montrez-moi plus</ButtonSecondary>
          </div>
        </div>

        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="Meilleurs auteurs d'élite"
          subHeading="Découvrez nos écrivains d'élite"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        {/* ABONNEMENTS */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchive;
