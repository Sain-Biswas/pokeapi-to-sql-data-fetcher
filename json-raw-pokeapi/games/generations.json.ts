import { fetch, file } from 'bun';

export default async function generationsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/generation').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/generation?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(generation => fetch(generation.url).then(response => response.json())));

    await file('./temp/games/generations.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Generations.', error);
  }
}

generationsJsonFetcher();
