import type { NamedAPIResource } from '../common-types.type';

export interface EvolutionTriggers {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

interface Name {
  language: NamedAPIResource;
  name: string;
}
