import { fetch, file } from 'bun';

export default async function evolutionChainsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/evolution-chain').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/evolution-chain?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(evolutionChain => fetch(evolutionChain.url).then(response => response.json())));

    await file('./temp/evolution/evolution-chains.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Evolution Chains.', error);
  }
}

evolutionChainsJsonFetcher();
