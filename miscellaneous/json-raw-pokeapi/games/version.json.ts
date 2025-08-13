import { fetch, file } from 'bun';

export default async function versionJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/version').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/version?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(version => fetch(version.url).then(response => response.json())));

    await file('./temp/games/version.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Version.', error);
  }
}

versionJsonFetcher();
