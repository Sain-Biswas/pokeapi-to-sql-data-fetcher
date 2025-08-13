import type { Description, NamedAPIResource } from '../common-types.type';

export interface MoveTargets {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
