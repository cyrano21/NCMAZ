import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import React from "react";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const DashboardEditProfile = () => {
  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form className="grid gap-6 md:grid-cols-2" action="#" method="post">
            <label className="block">
              <Label>Prénom</Label>
              <Input placeholder="Jean Dupont" type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Nom</Label>
              <Input placeholder="Dupont" type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Mot de passe actuel</Label>
              <Input placeholder="***" type="password" className="mt-1" />
            </label>
            <label className="block">
              <Label>Nouveau mot de passe</Label>
              <Input type="password" className="mt-1" />
            </label>
            <label className="block md:col-span-2">
              <Label>Adresse email</Label>
              <Input
                type="email"
                placeholder="exemple@exemple.com"
                className="mt-1"
              />
            </label>
            <ButtonPrimary className="md:col-span-2" type="submit">
              Mettre à jour le profil
            </ButtonPrimary>
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardEditProfile;
