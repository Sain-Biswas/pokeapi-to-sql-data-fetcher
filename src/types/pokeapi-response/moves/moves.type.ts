import type { APIResource } from '../common-types.type';

export interface Moves {
  accuracy: number | null;
  contest_combos: ContestCombos | null;
  contest_effect: APIResource | null;
  contest_type: Reference | null;
  damage_class: Reference;
  effect_chance: number | null;
  effect_changes: EffectChange[];
  effect_entries: MoveEffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Reference;
  id: number;
  learned_by_pokemon: Reference[];
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
  target: Reference;
  type: Reference;
}

interface ContestCombos {
  normal: Normal;
  super: Normal;
}

interface Normal {
  use_after: Reference[] | null;
  use_before: Reference[] | null;
}

interface Reference {
  name: string;
  url: string;
}

interface EffectChange {
  effect_entries: EffectChangeEffectEntry[];
  version_group: Reference;
}

interface EffectChangeEffectEntry {
  effect: string;
  language: Reference;
}

interface MoveEffectEntry {
  effect: string;
  language: Reference;
  short_effect: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Reference;
  version_group: Reference;
}

interface Machine {
  machine: APIResource;
  version_group: Reference;
}

interface Meta {
  ailment: Reference;
  ailment_chance: number;
  category: Reference;
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
  language: Reference;
  name: string;
}

interface PastValue {
  accuracy: number | null;
  effect_chance: number | null;
  effect_entries: MoveEffectEntry[];
  power: number | null;
  pp: number | null;
  type: Reference | null;
  version_group: Reference;
}

interface StatChange {
  change: number;
  stat: Reference;
}
