import type { NamedAPIResource } from '../common-types.type';

export interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  moves: NamedAPIResource[];
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
}
