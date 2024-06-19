import React, { FC, useEffect, useRef } from "react";
import NcModal from "components/NcModal/NcModal";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PostAuthorType } from "data/types";
import { DEMO_AUTHORS } from "data/authors";
import ButtonThird from "../Button/ButtonThird";

const authorDemo = DEMO_AUTHORS[0];
export interface ModalHideAuthorProps {
  auhthor?: PostAuthorType;
  show: boolean;
  onCloseModalHideAuthor: () => void;
}

const ModalHideAuthor: FC<ModalHideAuthorProps> = ({
  auhthor = authorDemo,
  show,
  onCloseModalHideAuthor,
}) => {
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    console.log({ auhthor: auhthor.id });
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
        <h3 className="text-lg font-semibold">
          Masquer les histoires de {auhthor.displayName}
        </h3>
        <span className="text-sm">
          Nous masquerons tous les articles de{" "}
          <strong>{auhthor.displayName}</strong>. Vous ne verrez plus leurs
          articles ?
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary
            className="!bg-red-500"
            onClick={handleClickSubmitForm}
            type="submit"
          >
            Masquer cet auteur
          </ButtonPrimary>
          <ButtonThird type="button" onClick={onCloseModalHideAuthor}>
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
      onCloseModal={onCloseModalHideAuthor}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalHideAuthor;
