import { fetch, file } from 'bun';

export default async function pokemonFormsJsonFetcher() {
  try {
    const { count } = await fetch('https://pokeapi.co/api/v2/pokemon-form').then(response => response.json() as Promise<{ count: number }>);

    const list = await fetch(`https://pokeapi.co/api/v2/pokemon-form?limit=${count + 10}`).then(response => response.json() as Promise<{ results: { name: string; url: string }[] }>);

    const data = await Promise.all(list.results.map(pokemonForm => fetch(pokemonForm.url).then(response => response.json())));

    await file('./temp/pokemon/pokemon-forms.json').write(JSON.stringify(data));
  }
  catch (error: unknown) {
    console.log('❌ -> Fetch failed for Pokemon Form.', error);
  }
}

pokemonFormsJsonFetcher();
