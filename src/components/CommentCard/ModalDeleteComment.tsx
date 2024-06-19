import React, { FC, useEffect, useRef } from "react";
import NcModal from "components/NcModal/NcModal";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonThird from "../Button/ButtonThird";

export interface ModalDeleteCommentProps {
  show: boolean;
  onCloseModalDeleteComment: () => void;
}

const ModalDeleteComment: FC<ModalDeleteCommentProps> = ({
  show,
  onCloseModalDeleteComment,
}) => {
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    // Fournir une implémentation vide pour éviter l'erreur d'ESLint
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Supprimer le commentaire
        </h3>
        <span className="text-sm">
          êtes-vous sûr de vouloir supprimer ce commentaire ? Vous ne pouvez pas
          annuler cette action.
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary
            className="!bg-red-500"
            onClick={handleClickSubmitForm}
            type="submit"
          >
            Supprimer
          </ButtonPrimary>
          <ButtonThird type="button" onClick={onCloseModalDeleteComment}>
            Annuler
          </ButtonThird>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalDeleteComment}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalDeleteComment;
