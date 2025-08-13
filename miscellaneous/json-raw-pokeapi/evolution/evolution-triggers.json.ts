import { fetch, file } from 'bun';

export default async function evolutionTriggersJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/evolution-trigger').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/evolution-trigger?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(evolutionTrigger => fetch(evolutionTrigger.url).then(response => response.json())));

    await file('./temp/evolution/evolution-triggers.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Evolution Triggers.', error);
  }
}

evolutionTriggersJsonFetcher();
