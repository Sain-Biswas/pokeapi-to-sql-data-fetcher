export interface MoveLearnMethods {
  descriptions: Description[];
  id: number;
  name: string;
  names: Name[];
  version_groups: Reference[];
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
