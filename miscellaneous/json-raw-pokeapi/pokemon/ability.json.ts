import { fetch, file } from 'bun';

export default async function abilityJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/ability').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/ability?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(ability => fetch(ability.url).then(response => response.json())));

    await file('./temp/pokemon/ability.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Abilities.', error);
  }
}

abilityJsonFetcher();
