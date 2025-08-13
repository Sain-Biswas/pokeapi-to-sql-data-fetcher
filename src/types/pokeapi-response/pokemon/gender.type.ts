export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesDetail[];
  required_for_evolution: References[];
}

interface PokemonSpeciesDetail {
  pokemon_species: References;
  rate: number;
}

interface References {
  name: string;
  url: string;
}
