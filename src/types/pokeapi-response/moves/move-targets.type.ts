import type { NamedAPIResource } from '../common-types.type';

export interface MoveTargets {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Description {
  description: string;
  language: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
