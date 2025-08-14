import type { APIResource, EffectChange, FlavorTextVersionGroup, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect } from '../common-types.type';

export interface Move {
  accuracy: number | null;
  contest_combos: ContestComboSets | null;
  contest_effect: APIResource | null;
  contest_type: NamedAPIResource | null;
  damage_class: NamedAPIResource;
  effect_chance: number | null;
  effect_changes: EffectChange[];
  effect_entries: VerboseEffect[];
  flavor_text_entries: FlavorTextVersionGroup[];
  generation: NamedAPIResource;
  id: number;
  learned_by_pokemon: NamedAPIResource[];
  machines: MachineVersionDetail[];
  meta: MoveMetaData | null;
  name: string;
  names: Name[];
  past_values: PastMoveStatValues[];
  power: number | null;
  pp: number | null;
  priority: number;
  stat_changes: MoveStatChange[];
  super_contest_effect: APIResource | null;
  target: NamedAPIResource;
  type: NamedAPIResource;
}

interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

interface ContestComboDetail {
  use_after: NamedAPIResource[] | null;
  use_before: NamedAPIResource[] | null;
}

interface MoveMetaData {
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

interface PastMoveStatValues {
  accuracy: number | null;
  effect_chance: number | null;
  effect_entries: VerboseEffect[];
  power: number | null;
  pp: number | null;
  type: NamedAPIResource | null;
  version_group: NamedAPIResource;
}

interface MoveStatChange {
  change: number;
  stat: NamedAPIResource;
}
