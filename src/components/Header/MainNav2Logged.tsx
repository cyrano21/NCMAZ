import React, { FC } from "react";
import Logo from "components/Logo/Logo";
import MenuBar from "components/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "components/Navigation/Navigation";
import SearchModal from "./SearchModal";
import NotifyDropdown from "./NotifyDropdown";

// Supprimez l'interface vide
// export interface MainNav2LoggedProps {}

const MainNav2Logged: FC = () => {
  // ou l'utiliser directement comme ça
  const renderContent = () => {
    return (
      <div className="flex justify-between h-20">
        <div className="flex items-center flex-1 lg:hidden">
          <MenuBar />
        </div>

        <div className="flex items-center lg:flex-1">
          <Logo />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          <Navigation />
        </div>

        <div className="flex items-center justify-end flex-1 text-slate-700 dark:text-slate-100">
          <SearchModal />
          <NotifyDropdown />
          <AvatarDropdown />
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10 bg-white border-b nc-MainNav2Logged dark:bg-neutral-900 border-slate-100 dark:border-slate-700">
      <div className="container ">{renderContent()}</div>
    </div>
  );
};

export default MainNav2Logged;
