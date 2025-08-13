import { fetch, file } from 'bun';

export default async function itemCategoriesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/item-category').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/item-category?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(itemCategory => fetch(itemCategory.url).then(response => response.json())));

    await file('./temp/items/item-categories.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Item Categories.', error);
  }
}

itemCategoriesJsonFetcher();
