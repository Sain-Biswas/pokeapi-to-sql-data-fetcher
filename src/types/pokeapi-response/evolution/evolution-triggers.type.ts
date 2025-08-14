import type { Name, NamedAPIResource } from '../common-types.type';

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}
