export interface GrowthRate {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: Level[];
  name: string;
  pokemon_species: References[];
}

interface Description {
  description: string;
  language: References;
}

interface References {
  name: string;
  url: string;
}

interface Level {
  experience: number;
  level: number;
}
