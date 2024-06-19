import React from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import SocialsList from "components/SocialsList/SocialsList";
import Textarea from "components/Textarea/Textarea";
import Heading2 from "components/Heading/Heading2";
import Layout from "../layout";

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    title: "💌 EMAIL",
    desc: "nc.example@example.com",
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const PageContact = () => {
  return (
    <Layout>
      <header className="max-w-2xl mx-auto text-center - mb-14 sm:mb-16 lg:mb-28 ">
        <Heading2>Contactez-nous</Heading2>
        <span className="block mt-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-200">
          Envoyez-nous un message et nous vous répondrons.
        </span>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="max-w-sm space-y-6">
          {info.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
                {item.title}
              </h3>
              <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
              🌏 SOCIALS
            </h3>
            <SocialsList className="mt-2" />
          </div>
        </div>
        <div className="border border-neutral-100 dark:border-neutral-700 lg:hidden"></div>
        <div>
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <Label>Nom et prénom</Label>

              <Input placeholder="Example Doe" type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Adresse e-mail</Label>

              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <Label>Message</Label>

              <Textarea className="mt-1" rows={6} />
            </label>
            <ButtonPrimary type="submit">Envoyer le message</ButtonPrimary>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PageContact;
