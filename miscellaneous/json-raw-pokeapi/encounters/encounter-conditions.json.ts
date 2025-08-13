import { fetch, file } from 'bun';

export default async function encounterConditionsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/encounter-condition').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/encounter-condition?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(encounterCondition => fetch(encounterCondition.url).then(response => response.json())));

    await file('./temp/encounters/encounter-conditions.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Encounter Conditions.', error);
  }
}

encounterConditionsJsonFetcher();
