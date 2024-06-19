import React from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Label from "components/Label/Label";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const DashboardSubmitPost = () => {
  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form className="grid gap-6 md:grid-cols-2" action="#" method="post">
            <label className="block md:col-span-2">
              <Label>Titre de l&#39;article *</Label>

              <Input type="text" className="mt-1" />
            </label>
            <label className="block md:col-span-2">
              <Label>Extrait de l&#39;article</Label>

              <Textarea className="mt-1" rows={4} />
              <p className="mt-1 text-sm text-neutral-500">
                Brève description de votre article. Les URL sont hyperliées.
              </p>
            </label>
            <label className="block">
              <Label>Catégorie</Label>

              <Select className="mt-1">
                <option value="-1">– sélectionner –</option>
                <option value="ha'apai">Catégorie 1</option>
                <option value="tongatapu">Catégorie 2</option>
                <option value="vava'u">Catégorie 3</option>
              </Select>
            </label>
            <label className="block">
              <Label>Tags</Label>

              <Input type="text" className="mt-1" />
            </label>

            <div className="block md:col-span-2">
              <Label>Image principale</Label>

              <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-dashed rounded-md border-neutral-300 dark:border-neutral-700">
                <div className="space-y-1 text-center">
                  <svg
                    className="w-12 h-12 mx-auto text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div className="flex flex-col text-sm sm:flex-row text-neutral-6000">
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium rounded-md cursor-pointer text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                    >
                      <span>Télécharger un fichier</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou glisser-déposer</p>
                  </div>
                  <p className="text-xs text-neutral-500">
                    PNG, JPG, GIF jusqu&#39;à 2MB
                  </p>
                </div>
              </div>
            </div>
            <label className="block md:col-span-2">
              <Label>Contenu de l&#39;article</Label>

              <Textarea className="mt-1" rows={16} />
            </label>

            <ButtonPrimary className="md:col-span-2" type="submit">
              Soumettre l&#39;article
            </ButtonPrimary>
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardSubmitPost;
