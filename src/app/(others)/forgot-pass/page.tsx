import React from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import Heading2 from "components/Heading/Heading2";
import Layout from "../layout";

const PageForgotPass = () => {
  return (
    <Layout>
      <header className="max-w-2xl mx-auto text-center - mb-14 sm:mb-16 lg:mb-20">
        <Heading2>Mot de passe oublié</Heading2>
        <span className="block mt-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-200">
          Bienvenue dans notre communauté de blog magazine
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        {/* FORMULAIRE */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Adresse email
            </span>
            <Input
              type="email"
              placeholder="exemple@exemple.com"
              className="mt-1"
            />
          </label>
          <ButtonPrimary type="submit">Continuer</ButtonPrimary>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Retourner pour {` `}
          <NcLink href="/login">Se connecter</NcLink>
          {` / `}
          <NcLink href="/signup">S&#39;inscrire</NcLink>
        </span>
      </div>
    </Layout>
  );
};

export default PageForgotPass;
