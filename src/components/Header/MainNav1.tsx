import React, { FC } from "react";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import MenuBar from "components/MenuBar/MenuBar";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";
import SearchModal from "./SearchModal";
import Button from "../Button/Button";

// Supprimez l'interface vide
// export interface MainNav1Props {}

const MainNav1: FC = () => {
  // ou l'utiliser directement comme ça
  return (
    <div className="relative z-10 bg-white nc-MainNav1 dark:bg-slate-900 ">
      <div className="container">
        <div className="flex items-center justify-between h-20 py-5">
          <div className="flex items-center flex-1 lg:hidden">
            <MenuBar />
          </div>

          <div className="flex items-center justify-center flex-1 space-x-4 lg:justify-start sm:space-x-10 2xl:space-x-14">
            <Logo />
            <Navigation className="hidden lg:flex" />
          </div>

          <div className="flex items-center justify-end flex-1 space-x-1 text-neutral-700 dark:text-neutral-100">
            <div className="items-center hidden lg:flex">
              <SwitchDarkMode />
              <SearchModal />
              <div className="px-1"></div>
              <Button
                sizeClass="py-3 px-4 sm:px-6"
                href="/login"
                pattern="primary"
              >
                S&apos;inscrire
              </Button>
            </div>
            <div className="flex items-center lg:hidden">
              <SwitchDarkMode />
              <SearchModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
