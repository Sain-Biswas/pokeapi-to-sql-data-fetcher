import { fetch, file } from 'bun';

export default async function natureJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/nature').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/nature?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(nature => fetch(nature.url).then(response => response.json())));

    await file('./temp/pokemon/nature.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Nature.', error);
  }
}

natureJsonFetcher();
