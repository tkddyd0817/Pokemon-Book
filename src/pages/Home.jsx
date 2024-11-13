import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeBody = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TitleImg = styled.img`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 750px;
  height: 55vh;
`;

const TitleLogo = styled.img`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 100px;
  min-height: 30vh;
`;

const TitleButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 300px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px background-color rgb(255, 0, 0);
    background-color: #730303;
  }
  color: white;
  border: none;
  transition: background-color 0.3s;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeBody>
      <MainContainer>
        <TitleImg src="/Gengar.jpg" alt="TitleImg" />
        <TitleContainer>
          <TitleLogo src="/pokemon-logo.png" alt="TitleLogo" />
          <TitleButton
            onClick={() => {
              navigate("/Dex");
            }}
          >
            포켓몬 도감 시작하기
          </TitleButton>
        </TitleContainer>
      </MainContainer>
    </HomeBody>
  );
};

export default Home;
