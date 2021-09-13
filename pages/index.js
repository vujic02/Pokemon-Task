import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { PokemonContext } from "../context/state";
import { Header, Layout } from "../components/index";

const Home = ({ pokemons }) => {
  // Get all states from PokemonContext
  const { pokemonList, setPokemonList, visible, setVisible } = useContext(PokemonContext);

  useEffect(() => {
    // After the page loads, set the context state to the pokemons that we fetched
    return setPokemonList(pokemons);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Pokemon Task | Home</title>
        <meta name="description" content="Learn more about pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Header headerText="All Pokemons" />

        <div className={styles.pokemons}>
          {/* From pokemon results array we slice from index 0 to visible state which is 9 (initially), then after clicking the show more button we add 9 to visible state, which dynamically updates how many pokemons are shown */}
          {pokemons.results.slice(0, visible).map((pokemon, idx) => (
            <Link href={`/pokemon/${idx + 1}`} key={idx}>
              <div className={styles.pokemon}>
                <img
                  className={styles.pokemon__image}
                  src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                />
                <p className={styles.pokemon__name}>{pokemon.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.buttons}>
          <div className={styles.buttons__container}>
            <div
              className={styles.buttons__button}
              onClick={() => {
                setVisible((prev) => prev + 9);
              }}
            >
              Show more pokemons
              <img
                src="/images/arrow-down.png"
                className={styles.buttons__button__icon}
              />
            </div>
          </div>

          <div className={styles.buttons__container}>
            <div
              className={styles.buttons__button}
              onClick={() => {
                setVisible(9);
                window.scrollTo(0, 0);
              }}
            >
              Show less pokemons
              <img
                src="/images/arrow-up.png"
                className={styles.buttons__button__icon}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=99");
  const pokemons = await response.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default Home;
