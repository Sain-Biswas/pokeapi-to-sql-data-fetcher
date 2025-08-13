import { fetch, file } from 'bun';

export default async function itemPocketsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/item-pocket').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/item-pocket?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(itemPocket => fetch(itemPocket.url).then(response => response.json())));

    await file('./temp/items/item-pockets.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Item Pockets.', error);
  }
}

itemPocketsJsonFetcher();
