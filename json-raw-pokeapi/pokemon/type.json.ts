import { fetch, file } from 'bun';

export default async function typeJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/type').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/type?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(type => fetch(type.url).then(response => response.json())));

    await file('./temp/pokemon/type.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Type.', error);
  }
}

typeJsonFetcher();
