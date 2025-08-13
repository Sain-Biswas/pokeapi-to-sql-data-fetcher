export interface ItemAttributes {
  descriptions: Description[];
  id: number;
  items: Reference[];
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
