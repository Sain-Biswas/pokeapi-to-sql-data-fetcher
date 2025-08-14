import type { Name, NamedAPIResource } from '../common-types.type';

export interface PokemonForms {
  form_name: string;
  form_names: Name[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: Name[];
  order: number;
  pokemon: NamedAPIResource;
  sprites: Sprites;
  types: Type[];
  version_group: NamedAPIResource;
}

interface Sprites {
  back_default: null | string;
  back_female: null | string;
  back_shiny: null | string;
  back_shiny_female: null | string;
  front_default: null | string;
  front_female: null | string;
  front_shiny: null | string;
  front_shiny_female: null | string;
}

interface Type {
  slot: number;
  type: NamedAPIResource;
}
