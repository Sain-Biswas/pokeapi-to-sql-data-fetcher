import { fetch, file } from 'bun';

export default async function pokemonSpeciesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokemon-species').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokemonSpecies => fetch(pokemonSpecies.url).then(response => response.json())));

    await file('./temp/pokemon/pokemon-species.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokemon Species.', error);
  }
}

pokemonSpeciesJsonFetcher();
