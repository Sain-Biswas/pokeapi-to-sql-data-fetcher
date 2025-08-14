import type { Name, NamedAPIResource } from '../common-types.type';

export interface Nature {
  decreased_stat: NamedAPIResource | null;
  hates_flavor: NamedAPIResource | null;
  id: number;
  increased_stat: NamedAPIResource | null;
  likes_flavor: NamedAPIResource | null;
  move_battle_style_preferences: MoveBattleStylePreference[];
  name: string;
  names: Name[];
  pokeathlon_stat_changes: PokeathlonStatChange[];
}

interface MoveBattleStylePreference {
  high_hp_preference: number;
  low_hp_preference: number;
  move_battle_style: NamedAPIResource;
}

export interface PokeathlonStatChange {
  max_change: number;
  pokeathlon_stat: NamedAPIResource;
}
