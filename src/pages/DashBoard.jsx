import styled from "styled-components";
import { AddButton } from "./Dex";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePokemon } from "../redux/PokemonTeamSlice";
import { toast } from "react-toastify";

const MainContainer = styled.div`
  border-radius: 1px solid black;
  margin: 0 auto;
  text-align: center;
  width: 95%;
  height: auto;
  padding: 30px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 251, 251);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SelectContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  margin-left: 40px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(255, 251, 251);
  justify-content: space-evenly; //가운데로 균등하게!!   스페이스 이블리 :space-evenly
`;

const SelectStyle = styled.div`
  padding: 30px;
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  color: #121212;
`;

const SelectPokemon = styled.img`
  border-radius: 10px;
  background-color: white;
  width: 130px;
  height: 100px;
  border: 1px solid rgb(221, 221, 221);
`;

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemonTeam.team);
  const handleDelete = (toDelete) => {
    dispatch(deletePokemon(toDelete));
    toast.success(`${toDelete.korean_name}이(가) 팀에서 삭제되었습니다.`);
  };

  return (
    <MainContainer>
      <Title> 당신의 포켓몬</Title>
      <SelectContainer>
        {Array.from({ length: 6 }).map((_, index) => {
          const pokemonCard = selectedPokemon[index];
          return (
            <div key={index}>
              {pokemonCard ? (
                <SelectStyle key={pokemonCard.id}>
                  <img
                    src={pokemonCard.img_url}
                    alt={pokemonCard.korean_name}
                    onClick={() => {
                      navigate(`/Dex/${pokemonCard.id}`);
                    }}
                  />
                  <div>
                    <p>NO: {pokemonCard.id}</p>
                    <p>NAME: {pokemonCard.korean_name}</p>
                    <p>{pokemonCard.types.join(", ")}</p>
                    <AddButton onClick={() => handleDelete(pokemonCard)}>
                      삭제
                    </AddButton>
                  </div>
                </SelectStyle>
              ) : (
                <SelectPokemon src="/pokeball.png" alt="pokeball.png" />
              )}
            </div>
          );
        })}
      </SelectContainer>
    </MainContainer>
  );
};
export default DashBoard;
