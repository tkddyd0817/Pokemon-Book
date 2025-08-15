리드미 (README) - 최신 기능 및 구조 설명
개요
이 프로젝트는 1세대부터 4세대(신규), 그리고 5~9세대 포켓몬 도감 데이터를 한 번에 웹에서 조회할 수 있는 React 기반의 포켓몬 도감(포케덱스) 애플리케이션입니다.

주요 기술 스택
React: 컴포넌트 기반 UI 구현

Redux Toolkit: 전역 상태 관리 (최신, Context API → Redux Toolkit으로 교체)

redux-persist: 포켓몬 데이터 등 전역 상태를 로컬스토리지에 저장, 브라우저 새로고침 후에도 데이터 유지

react-router-dom: SPA 라우팅 구현

styled-components: CSS-in-JS 스타일 적용

react-toastify: 사용자 알림(Notification) 기능

스크롤업 버튼 기능: 하단 고정 버튼을 눌러 한 번에 맨 위로 이동

폴더 구조


/src/shared/Router.jsx: 페이지별 라우팅 담당 (Home, Dex, PokemonDetail) 및 전체 앱 및 전역 Provider 설정

/src/pages/Home.jsx: 메인 홈 화면

/src/pages/Dex.jsx: 포켓몬 리스트 그리드, 포켓몬 추가 기능

/src/pages/PokemonDetail.jsx: 포켓몬 상세 정보 페이지

/src/components/DashBoard.jsx: 현재 선택된 포켓몬 대시보드 표시

주요 기능 및 변경점
🔄 전역 상태관리 리덕스 툴킷 적용
과거의 Context API 기반 PokemonContext 대신, Redux Toolkit으로 완전 교체

addPokemon, deletePokemon 등 포켓몬 관련 상태와 함수 모두 전역 store에서 관리

💾 redux-persist 연동
Redux 전역 상태(선택 포켓몬, 추가/삭제 등)를 브라우저 로컬스토리지에 자동 저장

새로고침·탭 종료 뒤에도 데이터 유지

⬆️ 스크롤업 버튼
하단 우측(또는 필요 위치)에 “맨 위로 이동” 스크롤업 버튼 구현

포켓몬 목록을 많이 스크롤한 뒤에도 쉽게 Top으로 복귀

🧭 1~4세대 포켓몬 데이터 지원
 1세대, 2세대, 3세대, 4세대 포켓몬 정보까지 조회 가능

generation별, 전체 세대별 포켓몬 리스트를 Dex 페이지, 상세 페이지 등에서 볼 수 있음

📋 라우팅 및 컴포넌트 구조
Home에서 Dex(포켓몬 도감), PokemonDetail(각 포켓몬 상세)로 자연스러운 탐색 가능

Pokemon 이미지를 클릭하면 상세정보 페이지로 이동

포켓몬 추가/삭제 시 Redux store 및 대시보드에 실시간 반영

🍞 알림(Notification)
포켓몬 추가·삭제 및 주요 액션 시, 사용자에게 Toast 자동 표시

실행방법
패키지 설치

bash
npm install
실행

bash
npm start
활용 예시
Dex 페이지:

그리드형 목록에서 1세대~4세대  포켓몬 확인 및 “추가” 버튼 지원

포켓몬이미지 클릭 시 상세페이지 이동

DashBoard:

내가 추가한 포켓몬 6종을 항상 빠르게 확인, 카드 삭제 지원

기타 참고
모든 스타일은 styled-components를 통한 CSS-in-JS로 정의

전역 상태는 Redux, 브라우저 저장은 redux-persist, UX 편의기능은 Toast와 스크롤업 포함


