export interface EncounterMethods {
  id: number;
  name: string;
  names: NameElement[];
  order: number;
}

interface NameElement {
  language: Reference;
  name: string;
}

interface Reference {
  name: string;
  url: string;
}
