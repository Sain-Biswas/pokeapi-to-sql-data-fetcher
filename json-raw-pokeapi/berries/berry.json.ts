import { fetch, file } from 'bun';

export default async function berriesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/berry').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/berry?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(berries => fetch(berries.url).then(response => response.json())));

    await file('./temp/berries/berries.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Berry.', error);
  }
}

berriesJsonFetcher();
