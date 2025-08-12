export interface EncounterConditionValues {
  condition: Reference;
  id: number;
  name: string;
  names: NameElement[];
}

interface Reference {
  name: string;
  url: string;
}

interface NameElement {
  language: Reference;
  name: string;
}
