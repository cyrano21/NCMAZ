import ButtonPrimary from "components/Button/ButtonPrimary";
import React from "react";

const Page404: React.FC = () => (
  <div className="nc-Page404">
    <div className="container relative py-16 lg:py-20">
      {/* EN-TÊTE */}
      <header className="max-w-2xl mx-auto text-center space-y-7">
        <h2 className="text-7xl md:text-8xl">🪔</h2>
        <h1 className="font-semibold tracking-widest text-8xl md:text-9xl">
          404
        </h1>
        <span className="block text-sm font-medium tracking-wider text-neutral-800 sm:text-base dark:text-neutral-200">
          {`LA PAGE QUE VOUS CHERCHEZ N'EXISTE PAS.`}
        </span>
        <ButtonPrimary href="/" className="mt-4">
          Retour à la page d&apos;accueil
        </ButtonPrimary>
      </header>
    </div>
  </div>
);

export default Page404;
