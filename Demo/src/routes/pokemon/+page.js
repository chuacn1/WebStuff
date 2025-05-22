const url = "http://pokeapi.co/api/v2/pokemon/ditto";

export async function load({ fetch }) {
    const res = await fetch(url);
    const poke = await res.json();
    return { poke };
  }