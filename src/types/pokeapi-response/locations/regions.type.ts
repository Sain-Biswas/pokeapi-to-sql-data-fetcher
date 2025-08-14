import type { Name, NamedAPIResource } from '../common-types.type';

export interface Regions {
  id: number;
  locations: NamedAPIResource[];
  main_generation: NamedAPIResource | null;
  name: string;
  names: Name[];
  pokedexes: NamedAPIResource[];
  version_groups: NamedAPIResource[];
}
