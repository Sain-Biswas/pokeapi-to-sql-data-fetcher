import { fetch, file } from 'bun';

export default async function characteristicJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/characteristic').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/characteristic?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { url: string }[] }>);

    const data = await Promise.all(list.results.map(characteristic => fetch(characteristic.url).then(response => response.json())));

    await file('./temp/pokemon/characteristic.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Characteristic.', error);
  }
}

characteristicJsonFetcher();
