import type { NamedAPIResource } from '../common-types.type';

export interface EvolutionChains {
  baby_trigger_item: NamedAPIResource | null;
  chain: Chain;
  id: number;
}

interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: NamedAPIResource;
}

interface EvolutionDetail {
  gender: number | null;
  held_item: NamedAPIResource | null;
  item: NamedAPIResource | null;
  known_move: NamedAPIResource | null;
  known_move_type: NamedAPIResource | null;
  location: NamedAPIResource | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource | null;
  party_type: NamedAPIResource | null;
  relative_physical_stats: number | null;
  time_of_day: string; // 'day', 'dusk', '', 'full-moon', 'night'
  trade_species: NamedAPIResource | null;
  trigger: NamedAPIResource;
  turn_upside_down: boolean;
}
