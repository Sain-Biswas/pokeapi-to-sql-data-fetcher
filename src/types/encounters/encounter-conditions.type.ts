export interface EncounterConditions {
  id: number;
  name: string;
  names: Name[];
  values: Reference[];
}

interface Name {
  language: Reference;
  name: string;
}

interface Reference {
  name: string;
  url: string;
}
