import React, { FC } from "react";
import MainNav2Logged from "./MainNav2Logged";

// Vous pouvez soit supprimer l'interface vide
// export interface HeaderLoggedProps {}

const HeaderLogged: FC = () => {
  // ou l'utiliser directement comme ça
  return (
    <div className="sticky top-0 z-40 w-full nc-HeaderLogged">
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
