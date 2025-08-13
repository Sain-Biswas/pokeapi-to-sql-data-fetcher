import { fetch, file } from 'bun';

export default async function encounterConditionValuesJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/encounter-condition-value').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/encounter-condition-value?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(encounterConditionValue => fetch(encounterConditionValue.url).then(response => response.json())));

    await file('./temp/encounters/encounter-condition-values.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Encounter Condition Values.', error);
  }
}

encounterConditionValuesJsonFetcher();
