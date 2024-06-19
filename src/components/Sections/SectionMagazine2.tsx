import React, { FC } from "react";
import Card2 from "components/Card2/Card2";
import { SectionMagazine1Props } from "./SectionMagazine1";
import HeaderFilter from "./HeaderFilter";
import Card11 from "components/Card11/Card11";

// Pas besoin de déclarer une nouvelle interface vide ici
const SectionMagazine2: FC<SectionMagazine1Props> = ({
  posts,
  heading = "🎈 Derniers articles",
  className,
}) => {
  return (
    <div className={`nc-SectionMagazine2 ${className}`}>
      <HeaderFilter heading={heading} />

      {!posts.length && <span>Nous n&apos;avons rien trouvé !</span>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="grid gap-6">
          {posts
            .filter((_, i) => i < 3 && i > 0)
            .map((item, index) => {
              return (
                <Card11 ratio="aspect-w-5 aspect-h-3" key={index} post={item} />
              );
            })}
        </div>
        <div className="lg:col-span-2">
          {posts[0] && <Card2 size="large" post={posts[0]} />}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
          {posts
            .filter((_, i) => i < 5 && i >= 3)
            .map((item, index) => {
              return (
                <Card11 ratio="aspect-w-5 aspect-h-3" key={index} post={item} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine2;
