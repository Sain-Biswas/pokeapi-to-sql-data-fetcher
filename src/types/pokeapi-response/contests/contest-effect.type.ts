export interface ContestEffect {
  appeal: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  jam: number;
}

interface EffectEntry {
  effect: string;
  language: Language;
}

interface Language {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
}
