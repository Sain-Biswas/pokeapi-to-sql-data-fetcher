import type { Description, NamedAPIResource } from '../common-types.type';

export interface MoveCategory {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
}
