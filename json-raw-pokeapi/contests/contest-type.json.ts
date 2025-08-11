import { fetch, file } from 'bun';

export default async function contestTypeJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/contest-type').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/contest-type?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(contestType => fetch(contestType.url).then(response => response.json())));

    await file('./temp/contests/contest-type.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Contest Type.', error);
  }
}

contestTypeJsonFetcher();
