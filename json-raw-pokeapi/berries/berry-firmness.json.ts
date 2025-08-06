import { fetch, file } from 'bun';

export default async function berryFirmnessJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/berry-firmness').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/berry-firmness?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(berryFirmness => fetch(berryFirmness.url).then(response => response.json())));

    await file('./temp/berries/berry-firmness.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Berry Firmnesses.', error);
  }
}

berryFirmnessJsonFetcher();
