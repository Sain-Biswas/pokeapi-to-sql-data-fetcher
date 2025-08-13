export interface ContestType {
  berry_flavor: Reference;
  id: number;
  name: string;
  names: Name[];
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  color: string;
  language: Reference;
  name: string;
}
