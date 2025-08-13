export interface MoveCategories {
  descriptions: Description[];
  id: number;
  moves: Reference[];
  name: string;
}

interface Description {
  description: string;
  language: Reference;
}

interface Reference {
  name: string;
  url: string;
}
