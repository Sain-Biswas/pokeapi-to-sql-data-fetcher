import type { NamedAPIResource } from '../common-types.type';

export interface ItemCategories {
  id: number;
  items: NamedAPIResource[];
  name: string;
  names: Name[];
  pocket: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
