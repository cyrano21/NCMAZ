import React, { FC } from "react";
import { SectionMagazine1Props } from "./SectionMagazine1";
import Card19 from "components/Card19/Card19";
import Card18 from "components/Card18/Card18";

const SectionMagazine10: FC<SectionMagazine1Props> = ({
  posts,
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine10 ${className}`}>
      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:grid-rows-5">
          {posts
            .filter((_, i) => i < 3 && i >= 1)
            .map((item, index) => (
              <Card18
                showCategories={false}
                className="col-span-1 sm:row-span-3"
                key={index}
                post={item}
              />
            ))}

          {posts[3] && (
            <Card19
              ratio="aspect-w-4 aspect-h-3 sm:aspect-h-1 sm:aspect-w-16 "
              className="sm:col-span-2 sm:row-span-2"
              titleClass="text-xl sm:text-2xl xl:text-2xl"
              post={posts[3]}
              showCategories={false}
            />
          )}
        </div>

        {posts[0] && <Card19 className="" post={posts[0]} />}
      </div>
    </div>
  );
};

export default SectionMagazine10;
