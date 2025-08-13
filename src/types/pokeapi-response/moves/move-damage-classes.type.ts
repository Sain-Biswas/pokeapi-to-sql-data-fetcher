import type { Description, NamedAPIResource } from '../common-types.type';

export interface MoveDamageClasses {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
