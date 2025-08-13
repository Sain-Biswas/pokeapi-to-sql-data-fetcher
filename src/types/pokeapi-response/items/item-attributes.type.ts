import type { NamedAPIResource } from '../common-types.type';

export interface ItemAttributes {
  descriptions: Description[];
  id: number;
  items: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Description {
  description: string;
  language: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
