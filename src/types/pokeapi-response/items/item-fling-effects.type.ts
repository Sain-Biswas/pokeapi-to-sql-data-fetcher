import type { Effect, NamedAPIResource } from '../common-types.type';

export interface ItemFlingEffect {
  effect_entries: Effect[];
  id: number;
  items: NamedAPIResource[];
  name: string;
}
