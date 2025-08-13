import { fetch, file } from 'bun';

export default async function itemFlingEffectsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/item-fling-effect').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/item-fling-effect?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(itemFlingEffect => fetch(itemFlingEffect.url).then(response => response.json())));

    await file('./temp/items/item-fling-effects.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Item Fling Effects.', error);
  }
}

itemFlingEffectsJsonFetcher();
