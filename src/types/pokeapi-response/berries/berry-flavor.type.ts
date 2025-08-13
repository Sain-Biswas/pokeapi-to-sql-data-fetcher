export interface BerryFlavor {
  berries: Berry[];
  contest_type: Reference;
  id: number;
  name: string;
  names: Name[];
}

interface Berry {
  berry: Reference;
  potency: number;
}

interface Reference {
  name: string;
  url: string;
}

interface Name {
  language: Reference;
  name: string;
}
