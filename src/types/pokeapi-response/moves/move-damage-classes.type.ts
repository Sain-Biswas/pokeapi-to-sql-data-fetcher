import type { Description, Name, NamedAPIResource } from '../common-types.type';

export interface MoveDamageClasses {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}
