import { ComponentType } from "react";

export type Route<T = string> = string;
export type PathName = Route<string>;

export interface Page {
  path: PathName;
  component: ComponentType<any>; // Utilisation de 'any' pour être permissif avec les composants
}
