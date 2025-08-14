import type { Name, NamedAPIResource } from '../common-types.type';

export interface ItemPockets {
  categories: NamedAPIResource[];
  id: number;
  name: string;
  names: Name[];
}
