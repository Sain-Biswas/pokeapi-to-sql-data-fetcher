import { fetch, file } from 'bun';

export default async function growthRateJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/growth-rate').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/growth-rate?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(growthRate => fetch(growthRate.url).then(response => response.json())));

    await file('./temp/pokemon/growth-rate.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Growth Rate.', error);
  }
}

growthRateJsonFetcher();
