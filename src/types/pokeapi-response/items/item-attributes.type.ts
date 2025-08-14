import type { Description, Name, NamedAPIResource } from '../common-types.type';

export interface ItemAttributes {
  descriptions: Description[];
  id: number;
  items: NamedAPIResource[];
  name: string;
  names: Name[];
}
