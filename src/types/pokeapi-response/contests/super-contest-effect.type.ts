export interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  moves: Reference[];
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Reference;
}

interface Reference {
  name: string;
  url: string;
}
