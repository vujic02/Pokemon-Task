import React from "react"
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonDetails from "../pages/pokemon/[id]";
import {ContextWrapper} from "../context/state";

describe("Details(slug) page for /pokemon/1", () => {
  let pokemon;

  beforeEach(() => {
    pokemon = {
      name: 'bulbasaur', 
      url: 'https://pokeapi.co/api/v2/pokemon/1/', 
      abilities: [
        {ability: {name: "overgrow"}}, 
        {ability: {name: "chlorophyll"}}
      ],
      moves: [
        {move: {name: "razor-wind"}},
        {move: {name: "swords-dance"}},
        {move: {name: "cut"}},
        {move: {name: "bind"}},
        {move: {name: "bind"}},
        {move: {name: "vine-whip"}}
      ],
    }
  })

  
  test("Should render the name of the first pokemon successfully", () => {
    const { getByText } = render(<ContextWrapper><PokemonDetails pokemon={pokemon} /></ContextWrapper>)

    expect(getByText(pokemon.name)).toBeInTheDocument()
  })

  test("Should render the abilities of the first pokemon & abilities chould be capitalized", () => {
    const { getByTestId } = render(<ContextWrapper><PokemonDetails pokemon={pokemon} /></ContextWrapper>)

    for(let i = 0; i < pokemon.abilities.length; i++) {
      expect(getByTestId("pokemon-abilities").textContent).toContain(pokemon.abilities[i].ability.name.charAt(0).toUpperCase(0) + pokemon.abilities[i].ability.name.slice(1));
    }
  })

  test("Should render the moves of the first pokemon & moves should be capitalized", () => {
    const { getByTestId } = render(<ContextWrapper><PokemonDetails pokemon={pokemon} /></ContextWrapper>)

    for(let i = 0; i < pokemon.moves.length; i++) {
      expect(getByTestId("pokemon-moves").textContent).toContain(pokemon.moves[i].move.name.charAt(0).toUpperCase(0) + pokemon.moves[i].move.name.slice(1));
    }
  })

});