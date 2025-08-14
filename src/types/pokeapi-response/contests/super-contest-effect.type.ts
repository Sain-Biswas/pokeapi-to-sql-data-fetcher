import type { FlavorText, NamedAPIResource } from '../common-types.type';

export interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: FlavorText[];
  id: number;
  moves: NamedAPIResource[];
}
