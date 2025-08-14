import type { Name, NamedAPIResource } from '../common-types.type';

export interface EvolutionTriggers {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}
