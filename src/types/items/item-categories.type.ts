export interface ItemCategories {
  id: number;
  items: Reference[];
  name: string;
  names: Name[];
  pocket: Reference;
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}
