import type { Description, NamedAPIResource } from '../common-types.type';

export interface ItemAttributes {
  descriptions: Description[];
  id: number;
  items: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
