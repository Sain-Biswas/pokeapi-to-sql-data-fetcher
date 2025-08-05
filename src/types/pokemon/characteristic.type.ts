export interface Characteristic {
  descriptions: Description[];
  gene_modulo: number;
  highest_stat: References;
  id: number;
  possible_values: number[];
}

interface Description {
  description: string;
  language: References;
}

interface References {
  name: string;
  url: string;
}
