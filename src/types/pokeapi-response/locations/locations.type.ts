import type { GenerationGameIndex, Name, NamedAPIResource } from '../common-types.type';

export interface Location {
  areas: NamedAPIResource[];
  game_indices: GenerationGameIndex[];
  id: number;
  name: string;
  names: Name[];
  region: NamedAPIResource | null;
}
