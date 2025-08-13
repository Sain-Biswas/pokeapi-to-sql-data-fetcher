import type { NamedAPIResource } from '../common-types.type';

export interface Locations {
  areas: NamedAPIResource[];
  game_indices: GameIndex[];
  id: number;
  name: string;
  names: Name[];
  region: NamedAPIResource | null;
}

interface GameIndex {
  game_index: number;
  generation: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
