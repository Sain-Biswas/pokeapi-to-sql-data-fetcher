import type { NamedAPIResource } from '../common-types.type';

export interface EncounterMethods {
  id: number;
  name: string;
  names: NameElement[];
  order: number;
}

interface NameElement {
  language: NamedAPIResource;
  name: string;
}
