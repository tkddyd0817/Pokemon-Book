App.jsx

CSS 파일 임포트:

javascript


import "./App.css";
App.css 파일을 임포트하여 이 컴포넌트에서 사용할 스타일을 적용합니다.
Router 임포트:

javascript


import Router from "./shared/Router";
Router 컴포넌트를 임포트하여 애플리케이션의 라우팅을 관리합니다. 이는 사용자가 다른 페이지로 이동할 수 있도록 도와줍니다.
Context 임포트:

javascript


import { PokemonProvider } from "../src/Context/PokemonContext";
PokemonProvider를 임포트하여 애플리케이션 전역에서 포켓몬 관련 데이터를 관리할 수 있는 컨텍스트를 제공합니다.
ToastContainer 임포트:

javascript


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ToastContainer를 임포트하여 사용자에게 알림 메시지를 표시할 수 있는 기능을 추가합니다. react-toastify 라이브러리를 사용하여 알림의 스타일을 적용합니다.
App 컴포넌트 정의:

javascript

App 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 PokemonProvider로 감싸져 있어, 그 안에 있는 모든 컴포넌트가 포켓몬 데이터를 사용할 수 있습니다.
Router 컴포넌트는 애플리케이션의 라우팅을 처리하며, ToastContainer는 알림 메시지를 표시하는 역할을 합니다.
컴포넌트 내보내기:

javascript


export default App;
App 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
이 코드는 React 애플리케이션의 기본 구조를 설정하고, 포켓몬 관련 데이터와 라우팅, 사용자 알림 기능을 통합하는 역할을 합니다.




Router.jsx


Router라는 함수형 컴포넌트를 정의합니다.
BrowserRouter로 감싸서 라우팅 기능을 활성화합니다.
Routes 안에 여러 개의 Route를 정의하여 각 경로에 맞는 컴포넌트를 렌더링합니다.
path="/": 기본 경로로, Home 컴포넌트를 렌더링합니다.
path="/dex": /dex 경로로, Dex 컴포넌트를 렌더링합니다.
path="/dex/:id": /dex 뒤에 어떤 ID가 올 수 있는 경로로, PokemonDetail 컴포넌트를 렌더링합니다. 여기서 :id는 URL 파라미터로, 특정 포켓몬의 상세 정보를 보여줄 때 사용됩니다.
Export Statement:

javascript
export default Router;
Router 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
이 코드는 기본적인 라우팅 구조를 설정하여 사용자가 URL을 통해 다양한 페이지로 이동할 수 있도록 합니다.


Home.jsx

Imports:
useNavigate는 React Router의 훅으로, 페이지 간의 탐색을 가능하게 합니다.
styled-components는 CSS-in-JS 라이브러리로, 컴포넌트에 스타일을 적용할 수 있게 해줍니다.
Styled Components:

HomeBody: 전체 페이지의 기본 스타일을 설정합니다. Flexbox를 사용하여 중앙 정렬을 하고, 최소 너비와 높이를 설정합니다.
MainContainer: 페이지의 주요 콘텐츠를 담는 컨테이너로, 세로 방향으로 정렬하고 중앙에 배치합니다.
TitleImg: 페이지의 타이틀 이미지로, 최소 너비와 높이를 설정합니다.
TitleContainer: 타이틀과 버튼을 포함하는 컨테이너로, 세로 방향으로 정렬하고 중앙에 배치합니다.
TitleLogo: 포켓몬 로고 이미지로, 최소 너비와 높이를 설정합니다.
TitleButton: 버튼 스타일을 정의합니다. 기본적으로 빨간색 배경을 가지며, 호버 시 색상이 어두워지고 약간 위로 이동하는 애니메이션 효과가 있습니다.
Home 컴포넌트:

useNavigate를 사용하여 페이지 탐색 기능을 가져옵니다.
HomeBody 안에 MainContainer를 배치하고, 그 안에 타이틀 이미지(TitleImg), 로고 이미지(TitleLogo), 그리고 버튼(TitleButton)을 포함합니다.
버튼을 클릭하면 /Dex 경로로 탐색하게 됩니다. 버튼의 텍스트는 "포켓몬 도감 시작하기"입니다.
이 코드는 포켓몬 관련 웹 애플리케이션의 홈 페이지를 구성하는 기본적인 구조를 제공하며, 사용자에게 포켓몬 도감으로 이동할 수 있는 버튼을 제공합니다.


Dex.jsx
MOCK_DATA:

../components/pokemonList에서 가져온 데이터로, Pokémon의 정보를 담고 있는 배열입니다. 각 Pokémon은 id, img_url, korean_name 등의 속성을 가집니다.
styled-components:

styled-components 라이브러리를 사용하여 스타일이 적용된 컴포넌트를 정의합니다.
PokemonContainer: Pokémon 목록을 그리드 형태로 배치하는 컨테이너입니다. 7개의 열로 구성되며, 배경색, 패딩, 테두리, 그림자 등의 스타일이 적용되어 있습니다.
PokemonStyle: 각 Pokémon 카드의 스타일을 정의합니다. 카드에 마우스를 올리면 약간 위로 이동하고 그림자가 생기는 효과가 있습니다.
AddButton: Pokémon을 추가하는 버튼의 스타일을 정의합니다. 기본 배경색과 마우스 오버 시 색상이 변경됩니다.
Dex 컴포넌트:

DashBoard 컴포넌트를 렌더링하여 대시보드 UI를 표시합니다.
useNavigate 훅을 사용하여 페이지 이동 기능을 제공합니다. 사용자가 Pokémon 이미지를 클릭하면 해당 Pokémon의 상세 페이지로 이동합니다.
useContext 훅을 사용하여 PokemonContext에서 addPokemon 함수를 가져옵니다. 이 함수는 사용자가 Pokémon을 추가할 때 호출됩니다.
렌더링:

MOCK_DATA 배열을 맵핑하여 각 Pokémon에 대한 카드(PokemonStyle)를 생성합니다. 각 카드에는 Pokémon의 이미지, 한국어 이름, ID, 그리고 추가 버튼이 포함되어 있습니다.
추가 버튼을 클릭하면 addPokemon 함수가 호출되어 해당 Pokémon이 추가됩니다.
전체적인 흐름
사용자가 Pokémon 이미지를 클릭하면 해당 Pokémon의 상세 페이지로 이동합니다.
사용자가 "추가" 버튼을 클릭하면 Pokémon이 추가됩니다.
전체 UI는 그리드 레이아웃으로 구성되어 있으며, 각 카드에 마우스를 올리면 시각적인 효과가 나타납니다.
이 코드는 Pokémon 목록을 효과적으로 표시하고, 사용자 상호작용을 처리하는 기능을 잘 구현하고 있습니다.

DashBoard.jsx

주요 구성 요소
styled-components: 이 라이브러리를 사용하여 CSS 스타일을 JavaScript 파일 내에서 정의하고 적용합니다. 각 스타일은 styled 함수를 통해 생성된 컴포넌트로 표현됩니다.

MainContainer: 대시보드의 메인 컨테이너로, 중앙 정렬되고, 테두리와 배경색이 설정되어 있습니다. 내부 여백(padding)과 외부 여백(margin)도 설정되어 있습니다.

SelectContainer: 포켓몬 선택을 위한 컨테이너로, flexbox를 사용하여 내부 아이템을 수평으로 정렬합니다. 각 아이템은 균등하게 배치됩니다.

SelectStyle: 각 포켓몬 카드의 스타일을 정의합니다. 마우스를 올렸을 때 커서가 포인터로 바뀌고, 약간 위로 이동하며 그림자가 생기는 효과가 있습니다.

Title: 대시보드의 제목을 나타내는 스타일입니다. 색상과 여백이 설정되어 있습니다.

SelectPokemon: 포켓몬 이미지의 스타일을 정의합니다. 기본적으로 포켓볼 이미지를 사용하며, 크기와 테두리가 설정되어 있습니다.

DashBoard 컴포넌트
useContext: PokemonContext를 사용하여 포켓몬 데이터를 가져옵니다. 여기서 deletePokemon 함수와 dashBoardPokemons 배열을 사용합니다.

console.log: 현재 대시보드에 있는 포켓몬 목록을 콘솔에 출력합니다.

useNavigate: React Router의 useNavigate 훅을 사용하여 포켓몬 상세 페이지로 이동할 수 있는 함수를 생성합니다.

렌더링:

MainContainer 안에 제목과 포켓몬 선택 컨테이너가 포함되어 있습니다.
SelectContainer는 최대 6개의 포켓몬 카드를 렌더링합니다.
Array.from({ length: 6 })를 사용하여 6개의 빈 요소를 생성하고, 각 요소에 대해 dashBoardPokemons 배열에서 포켓몬 정보를 가져옵니다.
각 카드에는 포켓몬 이미지, 이름, ID, 삭제 버튼이 포함되어 있습니다.
카드가 없을 경우 기본 포켓볼 이미지를 표시합니다.
이벤트 핸들러:

포켓몬 이미지를 클릭하면 해당 포켓몬의 상세 페이지로 이동합니다.
삭제 버튼을 클릭하면 deletePokemon 함수가 호출되어 해당 포켓몬이 삭제됩니다.
요약
이 컴포넌트는 사용자가 소유한 포켓몬을 보여주고, 각 포켓몬에 대한 상세 정보를 확인하거나 삭제할 수 있는 기능을 제공합니다. 전체적으로 사용자 친화적인 UI를 제공하며, React의 상태 관리와 라우팅 기능을 활용하고 있습니다.


PokemonDetail.jsx

주요 구성 요소
Imports:

useNavigate, useParams: React Router에서 제공하는 훅으로, 페이지 이동과 URL 파라미터를 가져오는 데 사용됩니다.
styled-components: CSS-in-JS 라이브러리로, 컴포넌트 스타일을 정의하는 데 사용됩니다.
MOCK_DATA: Pokémon 목록을 포함하는 데이터 파일입니다.
PokemonContext: Pokémon 관련 상태를 관리하는 컨텍스트입니다.
useContext: React의 훅으로, 컨텍스트 API를 사용하여 상태를 가져오는 데 사용됩니다.
Styled Components:

DetailContainer: 상세 정보를 담는 컨테이너로, flexbox를 사용하여 중앙 정렬합니다.
NavigateButton 및 AddButton: 각각 뒤로 가기 버튼과 Pokémon 추가 버튼을 스타일링한 컴포넌트입니다. 마우스를 올렸을 때의 효과도 정의되어 있습니다.
PokemonInformation, PokemonName, PokemonType: Pokémon의 정보를 표시하는 텍스트 스타일입니다.
DetailImg: Pokémon 이미지를 표시하는 스타일입니다.
PokemonDetail 컴포넌트:

params: URL에서 Pokémon의 ID를 가져옵니다.
navigate: 페이지 이동을 위한 함수입니다.
addPokemon: Pokémon을 추가하는 함수로, PokemonContext에서 가져옵니다.
targetPokemon: MOCK_DATA에서 URL 파라미터로 받은 ID에 해당하는 Pokémon 데이터를 찾습니다.
렌더링:

Pokémon의 이미지, 이름, 설명, 타입을 표시합니다.
"추가" 버튼을 클릭하면 addPokemon 함수가 호출되어 해당 Pokémon이 추가됩니다.
"뒤로가기" 버튼을 클릭하면 /Dex 경로로 이동합니다.
요약
이 컴포넌트는 특정 Pokémon의 상세 정보를 보여주고, 사용자가 Pokémon을 추가하거나 이전 페이지로 돌아갈 수 있는 기능을 제공합니다. 스타일링은 styled-components를 통해 관리되며, React Router를 사용하여 페이지 내비게이션을 처리합니다.

