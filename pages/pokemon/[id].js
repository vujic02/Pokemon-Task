import React from "react";
import { Layout, Header } from "../../components/index";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.scss";

const PokemonDetails = ({ pokemon }) => {
  let name = pokemon.name;

  return (
    <Layout>
      <div className="main">
        <Head>
          <title>Pokemon | {name}</title>
          <meta
            name="description"
            content={`Learn more about ${name}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header headerText="Pokemon Details" />
        <div className={styles.pokemon}>
          <img
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
            className={styles.pokemon__image}
          />
          <div className={styles.pokemon__container}>
            <h1 className={styles.pokemon__heading}>{name}</h1>
            <h2 className={styles.pokemon__abilities} data-testid="pokemon-abilities">
              Abilities: {pokemon.abilities.map((_, idx) => _.ability.name.charAt(0).toUpperCase() + _.ability.name.slice(1) + (idx === pokemon.abilities.length - 1 ? "." : ", "))}
            </h2>
            <p className={styles.pokemon__moves} data-testid="pokemon-moves">
              Moves: {pokemon.moves.map((_, idx) => _.move.name.charAt(0).toUpperCase() + _.move.name.slice(1) + (idx === pokemon.moves.length - 1 ? "." : ", "))}
            </p>
            <Link href="/">
              <div className={styles.pokemon__button}>Back to home</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=99");
  const pokemons = await response.json();

  const paths = pokemons.results.map((pokemon, idx) => ({
    params: { id: idx.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  );
  const pokemons = await response.json();

  return {
    props: {
      pokemon: pokemons,
    },
  };
};

export default PokemonDetails;
