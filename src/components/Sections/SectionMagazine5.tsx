import React, { FC } from "react";
import { PostDataType } from "data/types";
import HeaderFilter from "./HeaderFilter";
import Card12 from "components/Card12/Card12";
import Card13 from "components/Card13/Card13";

export interface SectionMagazine5Props {
  posts: PostDataType[];
  heading?: string;
}

const SectionMagazine5: FC<SectionMagazine5Props> = ({
  posts,
  heading = "Derniers articles🎈 ",
}) => {
  return (
    <div className="nc-SectionMagazine5">
      <HeaderFilter heading={heading} />
      {!posts.length && <span>Nous n&apos;avons rien trouvé !</span>}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 md:gap-7">
        {posts[0] && <Card12 post={posts[0]} />}
        <div className="flex flex-col gap-5 md:gap-7">
          {posts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card13 className="flex-1" key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
