import React from 'react'
import Navbar from '../../components/Navbar';
import Head from "next/head"

const PokemonDetails = ({pokemon}) => {
  return (
    <>
      <Head>
        <title>Pokemon | {pokemon.name}</title>
        <meta name="description" content={`Learn more about ${pokemon.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {pokemon.name}
    </>
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
