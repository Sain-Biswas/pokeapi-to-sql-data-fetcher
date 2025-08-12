export interface EvolutionChains {
  baby_trigger_item: Reference | null;
  chain: Chain;
  id: number;
}

interface Reference {
  name: string;
  url: string;
}

interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Reference;
}

interface EvolutionDetail {
  gender: number | null;
  held_item: Reference | null;
  item: Reference | null;
  known_move: Reference | null;
  known_move_type: Reference | null;
  location: Reference | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: Reference | null;
  party_type: Reference | null;
  relative_physical_stats: number | null;
  time_of_day: string; // 'day', 'dusk', '', 'full-moon', 'night'
  trade_species: Reference | null;
  trigger: Reference;
  turn_upside_down: boolean;
}
