import type { Description, NamedAPIResource } from '../common-types.type';

export interface MoveCategories {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
}
