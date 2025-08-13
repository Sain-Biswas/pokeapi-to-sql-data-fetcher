export interface MoveBattleStyles {
  id: number;
  name: string;
  names: Name[];
}

interface Name {
  language: Reference;
  name: string;
}

interface Reference {
  name: string;
  url: string;
}
