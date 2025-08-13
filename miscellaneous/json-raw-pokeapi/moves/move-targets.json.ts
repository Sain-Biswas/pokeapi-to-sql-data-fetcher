import { fetch, file } from 'bun';

export default async function moveTargetsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move-target').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move-target?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(moveTarget => fetch(moveTarget.url).then(response => response.json())));

    await file('./temp/moves/move-targets.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Move Targets', error);
  }
}

moveTargetsJsonFetcher();
