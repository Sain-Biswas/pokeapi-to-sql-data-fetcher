import type { APIResource, GenerationGameIndex, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect, VersionGroupFlavorText } from '../common-types.type';

export interface Item {
  attributes: NamedAPIResource[];
  baby_trigger_for: APIResource | null;
  category: NamedAPIResource;
  cost: number;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  fling_effect: NamedAPIResource | null;
  fling_power: number | null;
  game_indices: GenerationGameIndex[];
  held_by_pokemon: ItemHolderPokemon[];
  id: number;
  machines: MachineVersionDetail[];
  name: string;
  names: Name[];
  sprites: ItemSprites;
}

interface ItemHolderPokemon {
  pokemon: NamedAPIResource;
  version_details: ItemHolderPokemonVersionDetail[];
}

interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface ItemSprites {
  default: null | string;
}
