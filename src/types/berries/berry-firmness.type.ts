export interface BerryFirmness {
  berries: Reference[];
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
