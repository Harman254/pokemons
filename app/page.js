import Link from "next/link";



export default function Home() {
  return (
    <div >
      <Link href="/pokemon">
     <h1 className="text-4xl font-bold underline text-center mt-20">Check Out some Pokemons</h1>
      
      </Link>
      
    </div>
  )
}
