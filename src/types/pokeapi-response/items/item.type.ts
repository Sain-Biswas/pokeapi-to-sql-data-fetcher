import type { APIResource, NamedAPIResource } from '../common-types.type';

export interface Item {
  attributes: NamedAPIResource[];
  baby_trigger_for: APIResource | null;
  category: NamedAPIResource;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect: NamedAPIResource | null;
  fling_power: number | null;
  game_indices: GameIndex[];
  held_by_pokemon: HeldByPokemon[];
  id: number;
  machines: Machine[];
  name: string;
  names: Name[];
  sprites: Sprites;
}

interface EffectEntry {
  effect: string;
  language: NamedAPIResource;
  short_effect: string;
}

interface FlavorTextEntry {
  language: NamedAPIResource;
  text: string;
  version_group: NamedAPIResource;
}

interface GameIndex {
  game_index: number;
  generation: NamedAPIResource;
}

interface HeldByPokemon {
  pokemon: NamedAPIResource;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface Machine {
  machine: APIResource;
  version_group: NamedAPIResource;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface Sprites {
  default: null | string;
}
