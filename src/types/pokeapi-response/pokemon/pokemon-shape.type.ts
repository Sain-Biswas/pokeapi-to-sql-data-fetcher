import type { NamedAPIResource } from '../common-types.type';

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

interface Name {
  language: NamedAPIResource;
  name: string;
}
