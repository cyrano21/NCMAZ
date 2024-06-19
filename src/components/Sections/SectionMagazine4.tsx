import React, { FC } from "react";
import Card8 from "components/Card8/Card8";
import { SectionMagazine1Props } from "./SectionMagazine1";
import HeaderFilter from "./HeaderFilter";
import Card9 from "components/Card9/Card9";

// Pas besoin de déclarer une nouvelle interface vide ici
const SectionMagazine4: FC<SectionMagazine1Props> = ({
  posts,
  className = "",
  heading = "Derniers articles🎈",
}) => {
  return (
    <div className={`nc-SectionMagazine4 ${className}`}>
      <HeaderFilter heading={heading} />

      {!posts?.length && <span>Nous n&apos;avons rien trouvé !</span>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        {posts[0] && <Card8 className="sm:col-span-2" post={posts[0]} />}
        {posts
          .filter((_, i) => i < 3 && i >= 1)
          .map((item, index) => (
            <Card9 key={index} post={item} />
          ))}
        {posts
          .filter((_, i) => i < 5 && i >= 3)
          .map((item, index) => (
            <Card9 key={index} post={item} />
          ))}
        {posts[5] && <Card8 className="sm:col-span-2" post={posts[5]} />}
      </div>
    </div>
  );
};

export default SectionMagazine4;
