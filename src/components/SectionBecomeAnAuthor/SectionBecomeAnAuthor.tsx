import React, { FC } from "react";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Image from "../Image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs font-medium tracking-wider uppercase text-neutral-400">
          le dîner change tes pouvoirs de planification
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Devenez auteur et partagez vos belles histoires
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          Devenez auteur, vous pouvez gagner un revenu supplémentaire en
          écrivant des articles. Lire et partagez de nouvelles perspectives sur
          à peu près n’importe quel sujet. Tout le monde accueillir.
        </span>
        <ButtonPrimary className="mt-8">Devenez auteur</ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image
          alt="hero"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={rightImg}
        />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
