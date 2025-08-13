import { fetch, file } from 'bun';

export default async function movesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(move => fetch(move.url).then(response => response.json())));

    await file('./temp/moves/moves.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Moves', error);
  }
}

movesJsonFetcher();
