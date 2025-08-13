import { fetch, file } from 'bun';

export default async function moveLearnMethodsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move-learn-method').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move-learn-method?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(moveLearnMethod => fetch(moveLearnMethod.url).then(response => response.json())));

    await file('./temp/moves/move-learn-methods.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Move Learn Methods', error);
  }
}

moveLearnMethodsJsonFetcher();
