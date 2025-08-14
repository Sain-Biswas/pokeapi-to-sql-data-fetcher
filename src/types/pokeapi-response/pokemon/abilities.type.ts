import type { Effect, FlavorTextVersionGroup, NamedAPIResource } from '../common-types.type';

export interface Ability {
  effect_changes: EffectChange[];
  effect_entries: AbilityEffectEntry[];
  flavor_text_entries: FlavorTextVersionGroup[];
  generation: NamedAPIResource;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

interface EffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}

interface AbilityEffectEntry {
  effect: string;
  language: NamedAPIResource;
  short_effect: string;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface Pokemon {
  is_hidden: boolean;
  pokemon: NamedAPIResource;
  slot: number;
}
