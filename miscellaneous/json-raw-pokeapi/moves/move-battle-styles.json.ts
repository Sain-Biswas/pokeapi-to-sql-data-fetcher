import { fetch, file } from 'bun';

export default async function moveBattleStylesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move-battle-style').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move-battle-style?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(moveBattleStyle => fetch(moveBattleStyle.url).then(response => response.json())));

    await file('./temp/moves/move-battle-styles.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Move Battle Styles', error);
  }
}

moveBattleStylesJsonFetcher();
