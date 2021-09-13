import React from "react"
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import {ContextWrapper} from "../context/state";

describe("Home page", () => {
  let pokemons;

  beforeEach(() => {
    pokemons = {
      results: [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/', abilities: [{ability: "overgrow"}, {ability: "chlorophyll"}]},
        {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
        {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
        {name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/'},
        {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'},
        {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/'},
        {name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/'},
        {name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/'},
        {name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/'},
        {name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/'},
        {name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/'},
        {name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/'},
        {name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/'},
        {name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/'},
        {name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/'},
        {name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/'},
        {name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/'}
      ]
    }
  })

  test("Should render first nine pokemons", () => {

    const { getByText } = render(<ContextWrapper><Home pokemons={pokemons} /></ContextWrapper>)

    for(let i = 0; i < 9; i++) {
      expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }
  });

  test("Should render nine more pokemons if show more button is clicked", () => {

    const { getByText } = render(<ContextWrapper><Home pokemons={pokemons} /></ContextWrapper>)
    const showMoreBtn = getByText("Show more pokemons");

    for(let i = 0; i < 9; i++) {
      expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }
    
    fireEvent.click(showMoreBtn);

    for(let i = 0; i < 18; i++) {
    expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }
  })

  test("Should show less pokemons after show less pokemons button is clicked & scroll to top", () => {
    const { getByText } = render(<ContextWrapper><Home pokemons={pokemons} /></ContextWrapper>)
    const showMoreBtn = getByText("Show more pokemons");
    const showLessBtn = getByText("Show less pokemons");
    window.scrollTo = jest.fn()

    // Initial 9 pokemons that load when the page loads
    for(let i = 0; i < 9; i++) {
      expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }
    
    // fire click event on show more pokemons button, so we can fire click event on show less pokemons button
    fireEvent.click(showMoreBtn);

    for(let i = 0; i < 18; i++) {
      expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }

    // after the next 9 pokemons load, we can fire click event on the show less button
    fireEvent.click(showLessBtn);

    // expect window.scroll X & Y position to be 0 & that only initial 9 pokemons are loaded
    expect(window.scrollX).toBe(0);
    expect(window.scrollY).toBe(0);
    for(let i = 0; i < 9; i++) {
      expect(getByText(pokemons.results[i].name)).toBeInTheDocument();
    }
  })
});
