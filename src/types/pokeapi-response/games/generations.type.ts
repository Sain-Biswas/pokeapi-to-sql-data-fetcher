import type { Name, NamedAPIResource } from '../common-types.type';

export interface Generation {
  abilities: NamedAPIResource[];
  id: number;
  main_region: NamedAPIResource;
  moves: NamedAPIResource[];
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
  types: NamedAPIResource[];
  version_groups: NamedAPIResource[];
}
