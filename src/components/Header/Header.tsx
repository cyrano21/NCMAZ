import React, { FC } from "react";
import MainNav2 from "./MainNav2";

// Vous pouvez soit supprimer l'interface vide
// export interface HeaderProps {}

const Header: FC = () => {
  // ou l'utiliser directement comme ça
  return (
    <div className="sticky top-0 z-40 w-full nc-Header">
      <MainNav2 />
    </div>
  );
};

export default Header;
