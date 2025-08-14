import type { Name, NamedAPIResource } from '../common-types.type';

export interface ItemCategory {
  id: number;
  items: NamedAPIResource[];
  name: string;
  names: Name[];
  pocket: NamedAPIResource;
}
