import type { Name, NamedAPIResource } from '../common-types.type';

export interface PokemonShape {
  awesome_names: AwesomeName[];
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

interface AwesomeName {
  awesome_name: string;
  language: NamedAPIResource;
}
