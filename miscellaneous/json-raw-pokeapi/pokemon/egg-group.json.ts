import { fetch, file } from 'bun';

export default async function eggGroupJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/egg-group').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/egg-group?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(eggGroup => fetch(eggGroup.url).then(response => response.json())));

    await file('./temp/pokemon/egg-group.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Egg Group.', error);
  }
}

eggGroupJsonFetcher();
