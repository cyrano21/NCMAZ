import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import Heading from "components/Heading/Heading";
import { PostAuthorType } from "data/types";
import React, { FC } from "react";

export interface SectionGridAuthorBoxProps {
  className?: string;
  authors: PostAuthorType[];
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authors,
}) => {
  return (
    <div className={`nc-SectionGridAuthorBox relative ${className}`}>
      <Heading desc="Note basée sur les avis clients" isCenter>
        Top 10 des auteurs du mois
      </Heading>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8 ">
        {authors.map((author) => (
          <CardAuthorBox key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
