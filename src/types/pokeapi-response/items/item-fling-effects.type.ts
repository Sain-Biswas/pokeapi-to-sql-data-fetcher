import type { NamedAPIResource } from '../common-types.type';

export interface ItemFlingEffects {
  effect_entries: EffectEntry[];
  id: number;
  items: NamedAPIResource[];
  name: string;
}

interface EffectEntry {
  effect: string;
  language: NamedAPIResource;
}
