import { fetch, file } from 'bun';

export default async function moveDamageClassesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move-damage-class').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move-damage-class?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(moveDamageClass => fetch(moveDamageClass.url).then(response => response.json())));

    await file('./temp/moves/move-damage-classes.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Move Damage Classes', error);
  }
}

moveDamageClassesJsonFetcher();
