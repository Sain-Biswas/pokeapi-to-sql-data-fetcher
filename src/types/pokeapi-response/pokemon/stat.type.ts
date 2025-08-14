import type { APIResource, Name, NamedAPIResource } from '../common-types.type';

export interface Stat {
  affecting_moves: AffectingMoves;
  affecting_natures: AffectingNatures;
  characteristics: APIResource[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: NamedAPIResource | null;
  name: string;
  names: Name[];
}

interface AffectingMoves {
  decrease: Crease[];
  increase: Crease[];
}

interface Crease {
  change: number;
  move: NamedAPIResource;
}

interface AffectingNatures {
  decrease: NamedAPIResource[];
  increase: NamedAPIResource[];
}
