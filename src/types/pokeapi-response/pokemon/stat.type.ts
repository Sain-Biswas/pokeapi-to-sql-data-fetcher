import type { APIResource } from '../common-types.type';

export interface Stat {
  affecting_moves: AffectingMoves;
  affecting_natures: AffectingNatures;
  characteristics: APIResource[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: References | null;
  name: string;
  names: Name[];
}

interface AffectingMoves {
  decrease: Crease[];
  increase: Crease[];
}

interface Crease {
  change: number;
  move: References;
}

interface References {
  name: string;
  url: string;
}

interface AffectingNatures {
  decrease: References[];
  increase: References[];
}

interface Name {
  language: References;
  name: string;
}
