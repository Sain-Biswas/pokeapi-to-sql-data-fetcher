import { fetch, file } from 'bun';

export default async function pokemonHabitatJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokemon-habitat').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokemonHabitat => fetch(pokemonHabitat.url).then(response => response.json())));

    await file('./temp/pokemon/pokemon-habitat.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokemon Habitat.', error);
  }
}

pokemonHabitatJsonFetcher();
