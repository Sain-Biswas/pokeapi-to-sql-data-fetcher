import { fetch, file } from 'bun';

export default async function itemJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/item').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/item?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(item => fetch(item.url).then(response => response.json())));

    await file('./temp/items/item.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Items.', error);
  }
}

itemJsonFetcher();
