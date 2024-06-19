import React, { useState } from "react";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { DEMO_AUTHORS } from "data/authors";
import { DEMO_CATEGORIES } from "data/taxonomies";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import SocialsList from "components/SocialsList/SocialsList";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "components/Card11/Card11";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import NcImage from "components/NcImage/NcImage";
import { GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";
import { avatarImgs } from "contains/fakeData";
import VerifyIcon from "components/VerifyIcon";
import FollowButton from "components/FollowButton";
import NcDropDown from "components/NcDropDown/NcDropDown";
import { SOCIALS_DATA } from "components/SocialsShare/SocialsShare";
import AccountActionDropdown from "components/AccountActionDropdown/AccountActionDropdown";
import Image from "components/Image";

const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12);
const FILTERS = [
  { name: "Les plus récents" },
  { name: "Sélectionnés par l'admin" },
  { name: "Les plus appréciés" },
  { name: "Les plus discutés" },
  { name: "Les plus vus" },
];
const TABS = ["Articles", "Favoris", "Enregistrés"];

const PageAuthor = () => {
  const [tabActive, setTabActive] = useState<string>(TABS[0]);
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-PageAuthor `}>
      {/* EN-TÊTE */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            alt=""
            containerClassName="absolute inset-0"
            sizes="(max-width: 1280px) 100vw, 1536px"
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            <div className="flex-shrink-0 w-32 mt-12 lg:w-40 sm:mt-0">
              <div className="relative z-0 inline-flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden text-xl font-semibold uppercase rounded-full shadow-2xl wil-avatar text-neutral-100 lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0">
                <Image
                  alt="Avatar"
                  src={avatarImgs[3]}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/*  */}
            <div className="flex-grow pt-5 md:pt-1 lg:ml-6 xl:ml-12">
              <div className="max-w-screen-sm space-y-3.5 ">
                <h2 className="inline-flex items-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
                  <span>Dony Herrera</span>
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </h2>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro autem totam iure quibusdam asperiores numquam quae animi
                  assumenda necessitatibus consectetur.
                </span>
                <a
                  href="##"
                  className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                >
                  <GlobeAltIcon className="flex-shrink-0 w-4 h-4" />
                  <span className="truncate text-neutral-700 dark:text-neutral-300">
                    https://example.com/me
                  </span>
                </a>
                <SocialsList itemClass="block w-7 h-7" />
              </div>
            </div>

            {/*  */}
            <div className="absolute flex justify-end md:static left-5 right-5 top-4 sm:left-auto sm:top-5 sm:right-5">
              <FollowButton
                isFollowing={false}
                fontSize="text-sm md:text-base font-medium"
                sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
              />

              <div className="mx-2">
                <NcDropDown
                  className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full focus:outline-none bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200"
                  renderTrigger={() => <ShareIcon className="w-5 h-5" />}
                  onClick={() => {
                    // Cette fonction est intentionnellement laissée vide
                  }}
                  data={SOCIALS_DATA}
                />
              </div>

              <AccountActionDropdown containerClassName="h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" />
            </div>
          </div>
        </div>
      </div>
      {/* ====================== FIN EN-TÊTE ====================== */}

      <div className="container py-16 space-y-16 lg:pb-28 lg:pt-20 lg:space-y-28">
        <main>
          {/* FILTRES DES ONGLETS */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav className="sm:space-x-2">
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
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

          {/* BOUCLE DES ARTICLES */}
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:mt-10">
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 space-y-5 lg:mt-16 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Montrez-moi plus</ButtonPrimary>
          </div>
        </main>

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
          heading="Meilleurs auteurs"
          subHeading="Découvrez nos écrivains d'élite"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        {/* INSCRIVEZ-VOUS */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAuthor;
