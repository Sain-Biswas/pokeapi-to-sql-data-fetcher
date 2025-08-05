export interface Stat {
  affecting_moves: AffectingMoves;
  affecting_natures: AffectingNatures;
  characteristics: Characteristic[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: References | null;
  name: string;
  names: Name[];
}

export interface AffectingMoves {
  decrease: Crease[];
  increase: Crease[];
}

export interface Crease {
  change: number;
  move: References;
}

export interface References {
  name: string;
  url: string;
}

export interface AffectingNatures {
  decrease: References[];
  increase: References[];
}

export interface Characteristic {
  url: string;
}

export interface Name {
  language: References;
  name: string;
}
