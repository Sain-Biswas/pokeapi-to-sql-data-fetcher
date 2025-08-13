export interface MoveTargets {
  descriptions: Description[];
  id: number;
  moves: Reference[];
  name: string;
  names: Name[];
}

interface Description {
  description: string;
  language: Reference;
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}
