import twFocusClass from "utils/twFocusClass";
import React, { ButtonHTMLAttributes, FC } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const NextBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "w-10 h-10 text-lg",
  ...args
}) => {
  return (
    <button
      className={`NextBtn ${className} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${twFocusClass()}`}
      {...args}
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  );
};

export default NextBtn;
