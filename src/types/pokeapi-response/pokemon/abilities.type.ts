import type { Effect, FlavorTextVersionGroup, Name, NamedAPIResource, VerboseEffect } from '../common-types.type';

export interface Ability {
  effect_changes: EffectChange[];
  effect_entries: VerboseEffect[];
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

interface Pokemon {
  is_hidden: boolean;
  pokemon: NamedAPIResource;
  slot: number;
}
