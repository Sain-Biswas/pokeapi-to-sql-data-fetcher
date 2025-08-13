import { fetch, file } from 'bun';

export default async function regionsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/region').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/region?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(region => fetch(region.url).then(response => response.json())));

    await file('./temp/locations/regions.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Regions.', error);
  }
}

regionsJsonFetcher();
