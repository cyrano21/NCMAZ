import React, { FC, useState } from "react";
import Heading from "components/Heading/Heading";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import Button from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface HeaderFilterProps {
  tabs?: string[];
  heading: string;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  tabs = ["Tous les articles", "Jardin", "Fitness", "Design"],
  heading = "🎈 Derniers articles",
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className="relative flex flex-col mb-8">
      <Heading>{heading}</Heading>
      <div className="flex justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base"
        >
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActive === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        <Button className="!hidden md:!flex" pattern="white" sizeClass="px-6">
          <span>Voir tout</span>
          <ArrowRightIcon className="w-6 h-6 ml-3" />
        </Button>
      </div>
    </div>
  );
};

export default HeaderFilter;
