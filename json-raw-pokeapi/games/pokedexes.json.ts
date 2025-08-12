import { fetch, file } from 'bun';

export default async function pokedexesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokedex').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokedex?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokedex => fetch(pokedex.url).then(response => response.json())));

    await file('./temp/games/pokedexes.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokedexes.', error);
  }
}

pokedexesJsonFetcher();
