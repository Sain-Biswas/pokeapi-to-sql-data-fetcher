import type { Name, NamedAPIResource } from '../common-types.type';

export interface ItemPocket {
  categories: NamedAPIResource[];
  id: number;
  name: string;
  names: Name[];
}
