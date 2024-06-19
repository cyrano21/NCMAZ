import React from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import Heading2 from "components/Heading/Heading2";
import Image from "components/Image";
import Layout from "../layout";

const loginSocials = [
  {
    name: "Continuer avec Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continuer avec Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continuer avec Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp = () => {
  return (
    <Layout>
      <header className="max-w-2xl mx-auto text-center - mb-14 sm:mb-16 lg:mb-20">
        <Heading2>S&#39;inscrire</Heading2>
        <span className="block mt-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-200">
          Bienvenue dans notre communauté de blog magazine
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        <div className="grid gap-3">
          {loginSocials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <Image
                className="flex-shrink-0"
                src={item.icon}
                alt={item.name}
              />
              <h3 className="flex-grow text-sm font-medium text-center text-neutral-700 dark:text-neutral-300 sm:text-sm">
                {item.name}
              </h3>
            </a>
          ))}
        </div>
        {/* OU */}
        <div className="relative text-center">
          <span className="relative z-10 inline-block px-4 text-sm font-medium bg-white dark:text-neutral-400 dark:bg-neutral-900">
            OU
          </span>
          <div className="absolute left-0 w-full transform -translate-y-1/2 border top-1/2 border-neutral-100 dark:border-neutral-800"></div>
        </div>
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
          <label className="block">
            <span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
              Mot de passe
            </span>
            <Input type="password" className="mt-1" />
          </label>
          <ButtonPrimary type="submit">Continuer</ButtonPrimary>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Vous avez déjà un compte ? {` `}
          <NcLink href="/login">Se connecter</NcLink>
        </span>
      </div>
    </Layout>
  );
};

export default PageSignUp;
