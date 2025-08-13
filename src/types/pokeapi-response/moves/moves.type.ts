import type { APIResource, NamedAPIResource } from '../common-types.type';

export interface Moves {
  accuracy: number | null;
  contest_combos: ContestCombos | null;
  contest_effect: APIResource | null;
  contest_type: NamedAPIResource | null;
  damage_class: NamedAPIResource;
  effect_chance: number | null;
  effect_changes: EffectChange[];
  effect_entries: MoveEffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: NamedAPIResource;
  id: number;
  learned_by_pokemon: NamedAPIResource[];
  machines: Machine[];
  meta: Meta | null;
  name: string;
  names: Name[];
  past_values: PastValue[];
  power: number | null;
  pp: number | null;
  priority: number;
  stat_changes: StatChange[];
  super_contest_effect: APIResource | null;
  target: NamedAPIResource;
  type: NamedAPIResource;
}

interface ContestCombos {
  normal: Normal;
  super: Normal;
}

interface Normal {
  use_after: NamedAPIResource[] | null;
  use_before: NamedAPIResource[] | null;
}

interface EffectChange {
  effect_entries: EffectChangeEffectEntry[];
  version_group: NamedAPIResource;
}

interface EffectChangeEffectEntry {
  effect: string;
  language: NamedAPIResource;
}

interface MoveEffectEntry {
  effect: string;
  language: NamedAPIResource;
  short_effect: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

interface Machine {
  machine: APIResource;
  version_group: NamedAPIResource;
}

interface Meta {
  ailment: NamedAPIResource;
  ailment_chance: number;
  category: NamedAPIResource;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
}

interface Name {
  language: NamedAPIResource;
  name: string;
}

interface PastValue {
  accuracy: number | null;
  effect_chance: number | null;
  effect_entries: MoveEffectEntry[];
  power: number | null;
  pp: number | null;
  type: NamedAPIResource | null;
  version_group: NamedAPIResource;
}

interface StatChange {
  change: number;
  stat: NamedAPIResource;
}
