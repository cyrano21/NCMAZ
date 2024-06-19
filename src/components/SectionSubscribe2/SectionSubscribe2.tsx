import React, { FC } from "react";
import ButtonCircle from "components/Button/ButtonCircle";
import rightImg from "images/SVG-subcribe2.png";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";
import Image from "components/Image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ${className}`}
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="text-4xl font-semibold">
          Rejoignez notre newsletter 🎉
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Lisez et partagez de nouvelles perspectives sur à peu près n’importe
          quel sujet. Tout le monde accueillir.
        </span>
        <ul className="mt-10 space-y-5">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Obtenez plus de réduction
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Obtenez des magazines premium
            </span>
          </li>
        </ul>
        <form className="relative max-w-sm mt-10">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform -translate-y-1/2 top-1/2 right-1 dark:bg-neutral-300 dark:text-black"
          >
            <ArrowRightIcon className="w-5 h-5 " />
          </ButtonCircle>
        </form>
      </div>
      <div className="flex-grow">
        <Image
          alt="subsc"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={rightImg}
        />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
