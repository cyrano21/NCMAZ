import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import { PostDataType } from "data/types";
import React, { FC } from "react";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "components/Link";

export interface CardLarge1Props {
  className?: string;
  post: PostDataType;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}

const CardLarge1: FC<CardLarge1Props> = ({
  className = "",
  post,
  onClickNext = () => {
    // Future implementation
  },
  onClickPrev = () => {
    // Future implementation
  },
}) => {
  const { featuredImage, title, date, categories, author, href } = post;

  return (
    <div
      className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end ${className}`}
    >
      <div className="z-10 w-full px-3 -mt-8 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:mt-0 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div className="p-4 space-y-3 shadow-lg nc-CardLarge1__left sm:p-8 xl:py-14 md:px-10 bg-white/40 dark:bg-neutral-900/40 backdrop-filter backdrop-blur-lg dark:shadow-2xl rounded-3xl sm:space-y-5 ">
          <CategoryBadgeList categories={categories} />

          <h2 className="text-base font-semibold nc-card-title sm:text-xl lg:text-2xl ">
            <Link href={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>

          <CardAuthor2 className="relative" author={author} date={date} />

          <div className="flex items-center justify-between mt-auto">
            <PostCardLikeAndComment />
            <PostCardSaveAction bookmarkClass="h-8 w-8 bg-neutral-50/30 hover:bg-neutral-50/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50" />
          </div>
        </div>
        <div className="p-4 sm:pt-8 sm:px-10">
          <NextPrev
            btnClassName="w-11 h-11 text-xl"
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
          />
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/3">
        <Link href={href} className="relative block nc-CardLarge1__right">
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
            className="absolute inset-0 object-cover rounded-3xl"
            src={featuredImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* META TYPE */}
          <PostTypeFeaturedIcon
            postType={post.postType}
            className="absolute w-8 h-8 md:w-10 md:h-10 right-6 top-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default CardLarge1;
