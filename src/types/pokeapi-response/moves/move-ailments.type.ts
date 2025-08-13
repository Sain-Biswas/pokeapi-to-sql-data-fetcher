import type { NamedAPIResource } from '../common-types.type';

export interface MoveAilments {
  id: number;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
