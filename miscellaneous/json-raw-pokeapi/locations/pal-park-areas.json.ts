import { fetch, file } from 'bun';

export default async function palParkAreasJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pal-park-area').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pal-park-area?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(palParkArea => fetch(palParkArea.url).then(response => response.json())));

    await file('./temp/locations/pal-park-area.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pal Park Areas.', error);
  }
}

palParkAreasJsonFetcher();
