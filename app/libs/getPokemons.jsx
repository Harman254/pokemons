


export default async function getPokemons() {
  const res = fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
  .then((res) => res.json())
  .then((data) => data.slice(0, 100));
  return res;
}







