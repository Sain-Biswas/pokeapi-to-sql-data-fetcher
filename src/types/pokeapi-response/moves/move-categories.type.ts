import type { NamedAPIResource } from '../common-types.type';

export interface MoveCategories {
  descriptions: Description[];
  id: number;
  moves: NamedAPIResource[];
  name: string;
}

interface Description {
  description: string;
  language: NamedAPIResource;
}
