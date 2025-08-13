import { fetch, file } from 'bun';

export default async function locationsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/location').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/location?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(location => fetch(location.url).then(response => response.json())));

    await file('./temp/locations/locations.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Locations.', error);
  }
}

locationsJsonFetcher();
