import { fetch, file } from 'bun';

export default async function versionGroupsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/version-group').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/version-group?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(versionGroup => fetch(versionGroup.url).then(response => response.json())));

    await file('./temp/games/version-groups.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Version Groups.', error);
  }
}

versionGroupsJsonFetcher();
