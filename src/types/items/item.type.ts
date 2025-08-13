export interface Item {
  attributes: Reference[];
  baby_trigger_for: BabyTriggerFor | null;
  category: Reference;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect: Reference | null;
  fling_power: number | null;
  game_indices: GameIndex[];
  held_by_pokemon: HeldByPokemon[];
  id: number;
  machines: Machine[];
  name: string;
  names: Name[];
  sprites: Sprites;
}

interface Reference {
  name: string;
  url: string;
}

interface BabyTriggerFor {
  url: string;
}

interface EffectEntry {
  effect: string;
  language: Reference;
  short_effect: string;
}

interface FlavorTextEntry {
  language: Reference;
  text: string;
  version_group: Reference;
}

interface GameIndex {
  game_index: number;
  generation: Reference;
}

interface HeldByPokemon {
  pokemon: Reference;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Reference;
}

interface Machine {
  machine: BabyTriggerFor;
  version_group: Reference;
}

interface Name {
  language: Reference;
  name: string;
}

interface Sprites {
  default: null | string;
}
