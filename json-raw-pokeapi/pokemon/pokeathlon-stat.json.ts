import { fetch, file } from 'bun';

export default async function pokeathlonStatJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokeathlon-stat').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokeathlon-stat?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokeathlonStat => fetch(pokeathlonStat.url).then(response => response.json())));

    await file('./temp/pokemon/pokeathlon-stat.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokeathlon Stat.', error);
  }
}

pokeathlonStatJsonFetcher();
