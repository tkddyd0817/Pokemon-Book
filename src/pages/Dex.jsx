import MOCK_DATA from "../pokemonList/pokemonList";
import styled from "styled-components";
import DashBoard from "./DashBoard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokemonContext from "../Context/PokemonContext";

const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  height: 1000vh;
  width: 160vh;
  gap: 10px;
  background-color: rgb(255, 251, 251);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
`;

export const PokemonStyle = styled.div`
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
  }
`;

export const AddButton = styled.button`
  background-color: #4c2d7d;
  border: none;
  margin-bottom: 20px;
  color: white;
  &:hover {
    background-color: #2b1a47;
  }
`;

const Dex = () => {
  const PokemonDetailnavigate = useNavigate();
  const { addPokemon } = useContext(PokemonContext);

  return (
    <>
      <DashBoard />
      <PokemonContainer>
        {MOCK_DATA.map((partnerpokemon) => (
          <PokemonStyle key={partnerpokemon.id}>
            <img
              src={partnerpokemon.img_url}
              onClick={() => {
                PokemonDetailnavigate(`/dex/${partnerpokemon.id}`);
              }}
            />
            <div>
              <p>{partnerpokemon.korean_name}</p>
              <p>No:{partnerpokemon.id}</p>
              <AddButton onClick={() => addPokemon(partnerpokemon)}>
                추가
              </AddButton>
            </div>
          </PokemonStyle>
        ))}
      </PokemonContainer>
    </>
  );
};
export default Dex;
