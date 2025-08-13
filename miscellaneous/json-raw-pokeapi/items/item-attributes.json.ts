import { fetch, file } from 'bun';

export default async function itemAttributesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/item-attribute').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/item-attribute?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(itemAttribute => fetch(itemAttribute.url).then(response => response.json())));

    await file('./temp/items/item-attributes.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Item Attributes.', error);
  }
}

itemAttributesJsonFetcher();
