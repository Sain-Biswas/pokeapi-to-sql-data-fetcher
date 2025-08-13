import type { Effect, NamedAPIResource } from '../common-types.type';

export interface ItemFlingEffects {
  effect_entries: Effect[];
  id: number;
  items: NamedAPIResource[];
  name: string;
}
