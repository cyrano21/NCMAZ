import React, { FC } from "react";
import { TaxonomyType } from "data/types";
import CardCategory1 from "components/CardCategory1/CardCategory1";
import NcModal from "components/NcModal/NcModal";
import Button from "components/Button/Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export interface ModalCategoriesProps {
  categories: TaxonomyType[];
}

const ModalCategories: FC<ModalCategoriesProps> = ({ categories = [] }) => {
  const renderModalContent = () => {
    if (!categories || categories.length === 0) {
      return <p>Aucune catégorie disponible</p>;
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {categories.map((cat) => (
          <CardCategory1 key={cat.id} taxonomy={cat} size="normal" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalCategories">
      <NcModal
        renderTrigger={(openModal) => (
          <Button
            pattern="third"
            fontSize="text-sm font-medium"
            onClick={openModal}
          >
            <div>
              <span className="hidden sm:inline">Autres</span> Catégories
            </div>
            <ChevronDownIcon
              className="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Button>
        )}
        modalTitle="Découvrez d'autres catégories"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
