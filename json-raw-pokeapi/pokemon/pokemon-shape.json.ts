import { fetch, file } from 'bun';

export default async function pokemonShapeJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokemon-shape').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokemon-shape?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokemonShape => fetch(pokemonShape.url).then(response => response.json())));

    await file('./temp/pokemon/pokemon-shape.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokemon Shape.', error);
  }
}

pokemonShapeJsonFetcher();
