export default async function getPokemon(id) {
    const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
  

  return await res.json();
  
}


