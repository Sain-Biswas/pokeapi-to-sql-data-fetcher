export interface ItemFlingEffects {
  effect_entries: EffectEntry[];
  id: number;
  items: Reference[];
  name: string;
}

interface EffectEntry {
  effect: string;
  language: Reference;
}

interface Reference {
  name: string;
  url: string;
}
