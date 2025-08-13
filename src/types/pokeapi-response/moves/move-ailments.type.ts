export interface MoveAilments {
  id: number;
  moves: Reference[];
  name: string;
  names: Name[];
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}
