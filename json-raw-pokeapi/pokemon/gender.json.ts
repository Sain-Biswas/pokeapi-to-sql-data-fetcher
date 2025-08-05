import { fetch, file } from 'bun';

export default async function genderJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/gender').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/gender?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(gender => fetch(gender.url).then(response => response.json())));

    await file('./temp/pokemon/gender.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Gender.', error);
  }
}

genderJsonFetcher();
