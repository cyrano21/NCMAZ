import React, { FC } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CommentCard from "components/CommentCard/CommentCard";

const SingleCommentLists: FC = () => {
  return (
    <ul className="space-y-5 nc-SingleCommentLists">
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />

      <ButtonPrimary className="w-full dark:bg-primary-700">
        Voir les commentaires complets (+117 commentaires)
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
