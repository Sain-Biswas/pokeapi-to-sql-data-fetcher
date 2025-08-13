export interface Locations {
  areas: Reference[];
  game_indices: GameIndex[];
  id: number;
  name: string;
  names: Name[];
  region: Reference | null;
}

interface Reference {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: Reference;
}

interface Name {
  language: Reference;
  name: string;
}
