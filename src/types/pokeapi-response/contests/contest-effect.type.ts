import type { Effect, NamedAPIResource } from '../common-types.type';

export interface ContestEffect {
  appeal: number;
  effect_entries: Effect[];
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  jam: number;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
}
