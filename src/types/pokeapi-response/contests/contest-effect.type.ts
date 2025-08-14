import type { Effect, FlavorText } from '../common-types.type';

export interface ContestEffect {
  appeal: number;
  effect_entries: Effect[];
  flavor_text_entries: FlavorText[];
  id: number;
  jam: number;
}
