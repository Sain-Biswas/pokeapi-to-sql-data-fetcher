import type { NamedAPIResource } from '../common-types.type';

export interface VersionGroup {
  generation: NamedAPIResource;
  id: number;
  move_learn_methods: NamedAPIResource[];
  name: string;
  order: number;
  pokedexes: NamedAPIResource[];
  regions: NamedAPIResource[];
  versions: NamedAPIResource[];
}
