import type { GenerationGameIndex, NamedAPIResource } from '../common-types.type';

export interface Locations {
  areas: NamedAPIResource[];
  game_indices: GenerationGameIndex[];
  id: number;
  name: string;
  names: Name[];
  region: NamedAPIResource | null;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
