import { fetch, file } from 'bun';

export default async function berryFlavorJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/berry-flavor').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/berry-flavor?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(berryFlavor => fetch(berryFlavor.url).then(response => response.json())));

    await file('./temp/berries/berry-flavor.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Berry Flavor.', error);
  }
}

berryFlavorJsonFetcher();
