import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  isCenter?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = "Découvrez les articles les plus marquants sur tous les sujets de la vie. ",
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto " : "max-w-2xl"
        }
      >
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold`}
          {...args}
        >
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span className="block mt-2 text-base font-normal md:mt-3 sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
    </div>
  );
};

export default Heading;
