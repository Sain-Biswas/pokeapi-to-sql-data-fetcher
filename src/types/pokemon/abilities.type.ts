export interface Ability {
  effect_changes: EffectChange[];
  effect_entries: AbilityEffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  References: References;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

interface EffectChange {
  effect_entries: EffectChangeEffectEntry[];
  version_group: References;
}

interface EffectChangeEffectEntry {
  effect: string;
  language: References;
}

interface References {
  name: string;
  url: string;
}

interface AbilityEffectEntry {
  effect: string;
  language: References;
  short_effect: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: References;
  version_group: References;
}

interface Name {
  language: References;
  name: string;
}

interface Pokemon {
  is_hidden: boolean;
  pokemon: References;
  slot: number;
}
