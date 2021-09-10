import React from 'react'
import Navbar from '../../components/Navbar';

const PokemonDetails = ({pokemon}) => {
  return (
    <div>
      <Navbar />
      {pokemon.name}
    </div>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=99");
  const pokemons = await response.json();

    const paths = pokemons.results.map((pokemon, idx) => ({
      params: { id: idx.toString() },
    }));
  
    return { paths, fallback: false };

}

export const getStaticProps = async ({params}) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
  const pokemons = await response.json();

  console.log(params, "params")

  return {
    props: {
      pokemon: pokemons,
    }
  }
}

export default PokemonDetails
