import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../pokemonList/pokemonList";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
`;

const NavigateButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
    background-color: #730303;
  }
  color: white;
  border: 1px solid red;
  transition: background-color 0.3s;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
    background-color: #730303;
  }
  color: white;
  border: 1px solid red;
  transition: background-color 0.3s;
`;

const PokemonInformation = styled.p`
  color: white;
`;

const PokemonName = styled.h2`
  color: white;
`;

const PokemonType = styled.p`
  color: white;
`;

const DetailImg = styled.img`
  background-color: none;
  width: 200px;
  height: 200px;
`;
const PokemonDetail = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((data) => data.id === Number(id));
  return (
    <DetailContainer>
      <DetailImg
        src={`${pokemon.img_url}`}
        alt={pokemon.korean_name}
      />
      <PokemonName>{pokemon.korean_name}</PokemonName>
       <PokemonType>타입:{pokemon.types.join(", ")}</PokemonType>
      <PokemonInformation>{pokemon.description}</PokemonInformation>
     
      <AddButton >추가</AddButton>
      <NavigateButton
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        뒤로가기
      </NavigateButton>
    </DetailContainer>
  );
};

export default PokemonDetail;
