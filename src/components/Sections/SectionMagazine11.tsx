import Badge from "components/Badge/Badge";
import Card18 from "components/Card18/Card18";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS_NEWS } from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { PostDataType, TaxonomyType, TwMainColor } from "data/types";
import Link from "components/Link";
import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const postsDemo1: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 0 && i < 6
);
const postsDemo2: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 5 && i < 11
);
const postsDemo3: PostDataType[] = DEMO_POSTS_NEWS.filter(
  (_, i) => i > 11 && i < 17
);

export interface SectionMagazine11Props {
  posts?: PostDataType[][];
  className?: string;
  categories?: TaxonomyType[];
}

const SectionMagazine11: FC<SectionMagazine11Props> = ({
  posts = [postsDemo1, postsDemo2, postsDemo3],
  className = "",
  categories = [DEMO_CATEGORIES[0], DEMO_CATEGORIES[7], DEMO_CATEGORIES[4]],
}) => {
  const renderListByCat = (
    category: TaxonomyType,
    listPosts: PostDataType[]
  ) => {
    return (
      <div key={category.id} className={`flex flex-col space-y-4`}>
        <div className="flex items-center justify-between">
          <Badge
            className="uppercase tracking-wide rounded-none px-4 py-1.5"
            name={category.name}
            color={category.color as TwMainColor}
          />
          <a href="##" className="flex items-center text-xs text-neutral-500">
            <span>More Articles</span>
            <ArrowRightIcon className="w-6 h-6 ml-1.5" />
          </a>
        </div>
        {posts[0] && (
          <Card18
            ratio="aspect-w-4 aspect-h-3"
            className="flex-shrink-0"
            post={listPosts[0]}
          />
        )}
        <ul className="space-y-3">
          {listPosts
            .filter((_, i) => i > 0)
            .map((post) => (
              <li key={post.id}>
                <h2 className="flex items-start space-x-4 font-medium nc-card-title">
                  <Badge
                    className="w-2.5 h-2.5 !p-0 rounded flex-shrink-0 mt-2"
                    name={""}
                    color={category.color as TwMainColor}
                  />
                  <Link href={post.href} title={post.title} className="flex">
                    {post.title}
                  </Link>
                </h2>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`nc-SectionMagazine11 relative ${className}`}>
      <Heading
        desc={
          "Cliquez sur l'icône de musique et profitez de la musique ou du podcast"
        }
      >
        Écoutez l&apos;audio en direct
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-4 md:gap-7">
        {categories.map((cate, i) => renderListByCat(cate, posts[i]))}
      </div>
    </div>
  );
};

export default SectionMagazine11;
