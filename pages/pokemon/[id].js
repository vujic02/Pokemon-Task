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
          <title>Pokemon | {pokemon.name}</title>
          <meta
            name="description"
            content={`Learn more about ${pokemon.name}`}
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
            <h1 className={styles.pokemon__heading}>{pokemon.name}</h1>
            <h2 className={styles.pokemon__abilities}>
              Abilities: overgrow, chlorophyll
            </h2>
            <p className={styles.pokemon__moves}>
              Moves: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sem neque, ultrices maximus auctor eu, tempor eu justo. Nunc
              egestas libero nec erat euismod, id rutrum risus laoreet. Sed ut
              quam leo. Sed congue vehicula sapien ac placerat. Donec mattis
              elit nunc, eu tincidunt enim viverra aliquam. Duis elementum
              varius maximus. Integer porttitor odio est, eu gravida sapien
              maximus eu. Donec ut nisi elementum, feugiat purus ac, semper
              eros.{" "}
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

  console.log(params, "params");

  return {
    props: {
      pokemon: pokemons,
    },
  };
};

export default PokemonDetails;
