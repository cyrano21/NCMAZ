import twFocusClass from "utils/twFocusClass";
import React, { ButtonHTMLAttributes, FC } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const PrevBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "w-10 h-10 text-lg",
  ...args
}) => {
  return (
    <button
      className={`PrevBtn ${className} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
      {...args}
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
  );
};

export default PrevBtn;
