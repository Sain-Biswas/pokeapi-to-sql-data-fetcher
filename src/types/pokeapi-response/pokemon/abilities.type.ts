import type { EffectChange, FlavorTextVersionGroup, Name, NamedAPIResource, VerboseEffect } from '../common-types.type';

export interface Ability {
  effect_changes: EffectChange[];
  effect_entries: VerboseEffect[];
  flavor_text_entries: FlavorTextVersionGroup[];
  generation: NamedAPIResource;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: AbilityPokemon[];
}

interface AbilityPokemon {
  is_hidden: boolean;
  pokemon: NamedAPIResource;
  slot: number;
}
