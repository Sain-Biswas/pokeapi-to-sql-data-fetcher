export interface ItemPockets {
  categories: Reference[];
  id: number;
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
