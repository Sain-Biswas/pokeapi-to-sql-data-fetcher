import type { NamedAPIResource } from '../common-types.type';

export interface ContestEffect {
  appeal: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  jam: number;
}

interface EffectEntry {
  effect: string;
  language: NamedAPIResource;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
}
