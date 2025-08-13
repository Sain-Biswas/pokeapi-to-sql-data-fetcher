import { fetch, file } from 'bun';

export default async function moveAilmentsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/move-ailment').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/move-ailment?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(moveAilment => fetch(moveAilment.url).then(response => response.json())));

    await file('./temp/moves/move-ailments.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Move Ailments', error);
  }
}

moveAilmentsJsonFetcher();
