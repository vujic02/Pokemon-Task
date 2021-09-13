import { createContext, useState } from "react";

// Create the context
export const PokemonContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visible, setVisible] = useState(9);

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, visible, setVisible }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
