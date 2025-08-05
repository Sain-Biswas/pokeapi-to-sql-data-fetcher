export interface Nature {
  decreased_stat: References | null;
  hates_flavor: References | null;
  id: number;
  increased_stat: References | null;
  likes_flavor: References | null;
  move_battle_style_preferences: MoveBattleStylePreference[];
  name: string;
  names: Name[];
  pokeathlon_stat_changes: PokeathlonStatChange[];
}

interface References {
  name: string;
  url: string;
}

interface MoveBattleStylePreference {
  high_hp_preference: number;
  low_hp_preference: number;
  move_battle_style: References;
}

interface Name {
  language: References;
  name: string;
}

export interface PokeathlonStatChange {
  max_change: number;
  pokeathlon_stat: References;
}
