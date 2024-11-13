import MOCK_DATA from "../components/pokemonList";
import styled from "styled-components";
import DashBoard from "../pages/DashBoard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [dashBoardPokemons, setDashBoardPokemons] = useState([]);
  const PokemonDetailnavigate = useNavigate();
  const addPokemon = (event, data) => {
    event.preventDefault();
    console.log(data);

    if (dashBoardPokemons.some((p) => p.id === data.id)) {
      alert("중복된 포켓몬은 동행할수없습니다!!!");
      return;
    }

    if (dashBoardPokemons.length >= 6) {
      alert("포켓몬은 6마리 만 동행이 가능합니다"); //킵!!!
      return;
    }
    setDashBoardPokemons([...dashBoardPokemons, data]);
  };

  return (
    <>
      <DashBoard
        dashBoardPokemons={dashBoardPokemons}
        setDashBoardPokemons={setDashBoardPokemons}
      />
      <PokemonContainer>
          {MOCK_DATA.map((data) => (
            <PokemonStyle key={data.id}>
              <img src={data.img_url} 
              onClick={() => {
                PokemonDetailnavigate(`/dex/${data.id}`);
              }}/>
              <div>
                <p>{data.korean_name}</p>
                <p>{data.id}</p>
                <AddButton onClick={(event) => addPokemon(event, data)}>
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
