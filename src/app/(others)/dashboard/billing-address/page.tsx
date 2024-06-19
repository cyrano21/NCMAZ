import React from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Select from "components/Select/Select";
import Label from "components/Label/Label";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const DashboardBilingAddress = () => {
  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form className="grid gap-6 md:grid-cols-2" action="#" method="post">
            <label className="block">
              <Label>Pays</Label>
              <Select className="mt-1">
                <option>États-Unis</option>
                <option>Canada</option>
                <option>Mexique</option>
                <option>Vietnam</option>
                <option>Japon</option>
              </Select>
            </label>
            <label className="block">
              <Label>État/Province/Région *</Label>

              <Select className="mt-1">
                <option value="ha'apai">{`Ha'apai`}</option>
                <option value="tongatapu">Tongatapu</option>
                <option value="vava'u">{`Vava'u`}</option>
              </Select>
            </label>
            <label className="block">
              <Label>Adresse Ligne 1 *</Label>

              <Input type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Adresse Ligne 2</Label>

              <Input type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Ville *</Label>

              <Input type="text" className="mt-1" />
            </label>
            <label className="block">
              <Label>Code postal *</Label>

              <Input type="text" className="mt-1" />
            </label>
            <ButtonPrimary className="md:col-span-2" type="submit">
              Mettre à jour l&#39;adresse de facturation
            </ButtonPrimary>
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardBilingAddress;
