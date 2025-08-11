import { fetch, file } from 'bun';

export default async function superContestEffectJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/super-contest-effect').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/super-contest-effect?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(superContestEffect => fetch(superContestEffect.url).then(response => response.json())));

    await file('./temp/contests/super-contest-effect.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Super Contest Effect.', error);
  }
}

superContestEffectJsonFetcher();
