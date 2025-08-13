import type { NamedAPIResource } from '../common-types.type';

export interface ItemPockets {
  categories: NamedAPIResource[];
  id: number;
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
