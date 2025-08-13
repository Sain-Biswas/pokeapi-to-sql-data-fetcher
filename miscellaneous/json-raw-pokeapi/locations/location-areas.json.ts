import { fetch, file } from 'bun';

export default async function locationAreasJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/location-area').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/location-area?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(locationArea => fetch(locationArea.url).then(response => response.json())));

    await file('./temp/locations/location-areas.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Location Areas.', error);
  }
}

locationAreasJsonFetcher();
