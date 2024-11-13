import { toast } from "react-toastify";
import { createContext, useState } from "react";

const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const [dashBoardPokemons, setDashBoardPokemons] = useState([]);

  const addPokemon = (data) => {
    // event.preventDefault();
    console.log(data);
    if (dashBoardPokemons.some((p) => p.id === data.id)) {
      toast.info("중복된 포켓몬은 동행할수없습니다!!!");
      return;
    }

    if (dashBoardPokemons.length >= 6) {
      toast.info("포켓몬은 6마리 만 동행이 가능합니다"); //킵!!!
      return;
    }

    setDashBoardPokemons([...dashBoardPokemons, data]);
  };

  const deletePokemon = (event, id) => {
    // event.preventDefault();
    console.log(id);
    setDashBoardPokemons(
      dashBoardPokemons.filter((dashBoardPokemon) => dashBoardPokemon.id !== id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{
        addPokemon,
        deletePokemon,
        dashBoardPokemons,
        setDashBoardPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
