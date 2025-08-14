import type { APIResource, Name, NamedAPIResource } from '../common-types.type';

export interface Stat {
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: APIResource[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: NamedAPIResource | null;
  name: string;
  names: Name[];
}

interface MoveStatAffectSets {
  decrease: MoveStatAffect[];
  increase: MoveStatAffect[];
}

interface MoveStatAffect {
  change: number;
  move: NamedAPIResource;
}

interface NatureStatAffectSets {
  decrease: NamedAPIResource[];
  increase: NamedAPIResource[];
}
