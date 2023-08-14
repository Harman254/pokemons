import Link from "next/link";
import getPokemons from "../libs/getPokemons";

// import Image from 'next/image';



export default async function Home() {
  const data = await getPokemons();

  return (
   <div >
    <h1 className="text-center text-4xl font-bold">Pokemons</h1>

    <div className="grid grid-cols-3 gap-2">
      {data.map((pokemon) => (
        <div className='bg-white w-50 h-100' key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`}>
          
              <img width="100" height="100"  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt='' />
              <p className="text-black">{pokemon.id}:{pokemon.name}</p>
            
          </Link>
        </div>

        ))}
    </div>
    
   </div>
  )
}
