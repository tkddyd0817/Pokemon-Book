const MOCK_DATA = [
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    korean_name: "이상해씨",
    types: ["풀", "독"],
    id: 1,
    description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    korean_name: "이상해풀",
    types: ["풀", "독"],
    id: 2,
    description: "이상해씨의 진화형으로, 등에는 꽃봉오리가 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    korean_name: "이상해꽃",
    types: ["풀", "독"],
    id: 3,
    description: "이상해풀의 최종 진화형으로, 등에는 큰 꽃이 피어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    korean_name: "파이리",
    types: ["불꽃"],
    id: 4,
    description: "불꽃 타입의 포켓몬으로, 꼬리에 불이 붙어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    korean_name: "리자드",
    types: ["불꽃"],
    id: 5,
    description: "파이리의 진화형으로, 더 큰 몸집과 강한 불을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    korean_name: "리자몽",
    types: ["불꽃", "비행"],
    id: 6,
    description:
      "리자드의 최종 진화형으로, 강력한 불꽃과 비행 능력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    korean_name: "꼬부기",
    types: ["물"],
    id: 7,
    description: "물 타입의 포켓몬으로, 작은 거북이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    korean_name: "어니부기",
    types: ["물"],
    id: 8,
    description: "꼬부기의 진화형으로, 더 강한 방어력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    korean_name: "거북왕",
    types: ["물"],
    id: 9,
    description: "어니부기의 최종 진화형으로, 강력한 물 공격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    korean_name: "캐터피",
    types: ["벌레"],
    id: 10,
    description: "벌레 타입의 포켓몬으로, 작고 귀여운 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    korean_name: "단데기",
    types: ["벌레"],
    id: 11,
    description: "캐터피의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    korean_name: "버터플",
    types: ["벌레", "비행"],
    id: 12,
    description: "단데기의 최종 진화형으로, 아름다운 나비 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    korean_name: "뿔충이",
    types: ["벌레", "독"],
    id: 13,
    description: "벌레와 독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    korean_name: "딱충이",
    types: ["벌레", "독"],
    id: 14,
    description: "뿔충이의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    korean_name: "독침붕",
    types: ["벌레", "독"],
    id: 15,
    description: "딱충이의 최종 진화형으로, 독침을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    korean_name: "구구",
    types: ["노말", "비행"],
    id: 16,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    korean_name: "피죤",
    types: ["노말", "비행"],
    id: 17,
    description: "구구의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    korean_name: "피죤투",
    types: ["노말", "비행"],
    id: 18,
    description: "피죤의 최종 진화형으로, 매우 빠른 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    korean_name: "꼬렛",
    types: ["노말"],
    id: 19,
    description: "노말 타입의 포켓몬으로, 작은 쥐 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    korean_name: "레트라",
    types: ["노말"],
    id: 20,
    description: "꼬렛의 진화형으로, 더 큰 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    korean_name: "깨비참",
    types: ["노말", "비행"],
    id: 21,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    korean_name: "깨비드릴조",
    types: ["노말", "비행"],
    id: 22,
    description: "깨비참의 진화형으로, 큰 부리와 빠른 속도를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    korean_name: "아보",
    types: ["독"],
    id: 23,
    description: "독 타입의 포켓몬으로, 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    korean_name: "아보크",
    types: ["독"],
    id: 24,
    description: "아보의 진화형으로, 더 크고 강한 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    korean_name: "피카츄",
    types: ["전기"],
    id: 25,
    description:
      "전기 타입의 포켓몬으로, 귀여운 외모와 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    korean_name: "라이츄",
    types: ["전기"],
    id: 26,
    description: "피카츄의 진화형으로, 더 큰 몸집과 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    korean_name: "모래두지",
    types: ["땅"],
    id: 27,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    korean_name: "고지",
    types: ["땅"],
    id: 28,
    description:
      "모래두지의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    korean_name: "니드런♀",
    types: ["독"],
    id: 29,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    korean_name: "니드리나",
    types: ["독"],
    id: 30,
    description: "니드런♀의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    korean_name: "니드퀸",
    types: ["독", "땅"],
    id: 31,
    description: "니드리나의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    korean_name: "니드런♂",
    types: ["독"],
    id: 32,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    korean_name: "니드리노",
    types: ["독"],
    id: 33,
    description: "니드런♂의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    korean_name: "니드킹",
    types: ["독", "땅"],
    id: 34,
    description: "니드리노의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    korean_name: "삐삐",
    types: ["페어리"],
    id: 35,
    description:
      "페어리 타입의 포켓몬으로, 귀여운 외모와 마법 같은 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    korean_name: "픽시",
    types: ["페어리"],
    id: 36,
    description: "삐삐의 진화형으로, 더 강력한 페어리 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    korean_name: "식스테일",
    types: ["불꽃"],
    id: 37,
    description: "불꽃 타입의 포켓몬으로, 여우 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    korean_name: "나인테일",
    types: ["불꽃"],
    id: 38,
    description: "식스테일의 진화형으로, 긴 꼬리를 가진 아름다운 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    korean_name: "푸린",
    types: ["노말", "페어리"],
    id: 39,
    description:
      "노말과 페어리 타입의 포켓몬으로, 둥글고 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    korean_name: "푸크린",
    types: ["노말", "페어리"],
    id: 40,
    description:
      "푸린의 진화형으로, 더 큰 몸집과 강력한 페어리 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    korean_name: "주뱃",
    types: ["독", "비행"],
    id: 41,
    description: "독과 비행 타입의 포켓몬으로, 작은 박쥐 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    korean_name: "골뱃",
    types: ["독", "비행"],
    id: 42,
    description: "주뱃의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    korean_name: "뚜벅쵸",
    types: ["풀", "독"],
    id: 43,
    description: "풀과 독 타입의 포켓몬으로, 작은 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    korean_name: "냄새꼬",
    types: ["풀", "독"],
    id: 44,
    description: "뚜벅쵸의 진화형으로, 더 큰 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    korean_name: "라플레시아",
    types: ["풀", "독"],
    id: 45,
    description: "냄새꼬의 최종 진화형으로, 큰 꽃을 가진 강력한 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    korean_name: "파라스",
    types: ["벌레", "풀"],
    id: 46,
    description: "벌레와 풀 타입의 포켓몬으로, 작은 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    korean_name: "파라섹트",
    types: ["벌레", "풀"],
    id: 47,
    description: "파라스의 진화형으로, 큰 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    korean_name: "콘팡",
    types: ["벌레", "독"],
    id: 48,
    description: "벌레와 독 타입의 포켓몬으로, 귀여운 곤충 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    korean_name: "도나리",
    types: ["벌레", "독"],
    id: 49,
    description: "콘팡의 진화형으로, 더 큰 몸집과 강력한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    korean_name: "디그다",
    types: ["땅"],
    id: 50,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    korean_name: "닥트리오",
    types: ["땅"],
    id: 51,
    description: "디그다의 진화형으로, 세 마리의 두더지가 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    korean_name: "나옹",
    types: ["노말"],
    id: 52,
    description: "노말 타입의 포켓몬으로, 귀여운 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    korean_name: "페르시온",
    types: ["노말"],
    id: 53,
    description:
      "나옹의 진화형으로, 우아하고 날렵한 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    korean_name: "고라파덕",
    types: ["물"],
    id: 54,
    description:
      "물 타입의 포켓몬으로, 자주 두통을 앓는 오리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    korean_name: "골덕",
    types: ["물"],
    id: 55,
    description:
      "고라파덕의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    korean_name: "망키",
    types: ["격투"],
    id: 56,
    description: "격투 타입의 포켓몬으로, 화가 나 있는 원숭이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    korean_name: "성원숭",
    types: ["격투"],
    id: 57,
    description: "망키의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    korean_name: "가디",
    types: ["불꽃"],
    id: 58,
    description: "불꽃 타입의 포켓몬으로, 강아지 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    korean_name: "윈디",
    types: ["불꽃"],
    id: 59,
    description: "가디의 진화형으로, 더 큰 몸집과 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    korean_name: "발챙이",
    types: ["물"],
    id: 60,
    description: "물 타입의 포켓몬으로, 작고 귀여운 개구리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    korean_name: "슈륙챙이",
    types: ["물"],
    id: 61,
    description:
      "발챙이의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    korean_name: "강챙이",
    types: ["물", "격투"],
    id: 62,
    description:
      "슈륙챙이의 최종 진화형으로, 강력한 물과 격투 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    korean_name: "캐이시",
    types: ["에스퍼"],
    id: 63,
    description: "에스퍼 타입의 포켓몬으로, 초능력 사용에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    korean_name: "윤겔라",
    types: ["에스퍼"],
    id: 64,
    description: "캐이시의 진화형으로, 초능력과 강한 정신력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    korean_name: "후딘",
    types: ["에스퍼"],
    id: 65,
    description: "윤겔라의 최종 진화형으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    korean_name: "알통몬",
    types: ["격투"],
    id: 66,
    description: "격투 타입의 포켓몬으로, 강한 근육과 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    korean_name: "근육몬",
    types: ["격투"],
    id: 67,
    description: "알통몬의 진화형으로, 더 크고 강한 근육을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    korean_name: "괴력몬",
    types: ["격투"],
    id: 68,
    description: "근육몬의 최종 진화형으로, 매우 강력한 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    korean_name: "모다피",
    types: ["풀", "독"],
    id: 69,
    description: "풀과 독 타입의 포켓몬으로, 작은 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    korean_name: "우츠동",
    types: ["풀", "독"],
    id: 70,
    description: "모다피의 진화형으로, 더 크고 강한 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    korean_name: "우츠보트",
    types: ["풀", "독"],
    id: 71,
    description: "우츠동의 최종 진화형으로, 강력한 독과 풀 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    korean_name: "왕눈해",
    types: ["물", "독"],
    id: 72,
    description: "물과 독 타입의 포켓몬으로, 큰 눈과 촉수를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    korean_name: "독파리",
    types: ["물", "독"],
    id: 73,
    description: "왕눈해의 진화형으로, 더 큰 몸집과 강한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    korean_name: "꼬마돌",
    types: ["바위", "땅"],
    id: 74,
    description: "바위와 땅 타입의 포켓몬으로, 작은 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    korean_name: "데구리",
    types: ["바위", "땅"],
    id: 75,
    description: "꼬마돌의 진화형으로, 더 큰 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    korean_name: "딱구리",
    types: ["바위", "땅"],
    id: 76,
    description: "데구리의 최종 진화형으로, 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    korean_name: "포니타",
    types: ["불꽃"],
    id: 77,
    description: "불꽃 타입의 포켓몬으로, 불타는 갈기를 가진 말 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    korean_name: "날쌩마",
    types: ["불꽃"],
    id: 78,
    description: "포니타의 진화형으로, 더 크고 빠른 말 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    korean_name: "야돈",
    types: ["물", "에스퍼"],
    id: 79,
    description:
      "물과 에스퍼 타입의 포켓몬으로, 느린 움직임과 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    korean_name: "야도란",
    types: ["물", "에스퍼"],
    id: 80,
    description: "야돈의 진화형으로, 더 크고 강한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    korean_name: "코일",
    types: ["전기", "강철"],
    id: 81,
    description: "전기와 강철 타입의 포켓몬으로, 자석 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    korean_name: "레어코일",
    types: ["전기", "강철"],
    id: 82,
    description: "코일의 진화형으로, 세 개의 자석이 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    korean_name: "파오리",
    types: ["노말", "비행"],
    id: 83,
    description: "노말과 비행 타입의 포켓몬으로, 파를 든 오리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    korean_name: "두두",
    types: ["노말", "비행"],
    id: 84,
    description:
      "노말과 비행 타입의 포켓몬으로, 두 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    korean_name: "두트리오",
    types: ["노말", "비행"],
    id: 85,
    description: "두두의 진화형으로, 세 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    korean_name: "쥬쥬",
    types: ["물"],
    id: 86,
    description: "물 타입의 포켓몬으로, 귀여운 물개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    korean_name: "쥬레곤",
    types: ["물", "얼음"],
    id: 87,
    description: "쥬쥬의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    korean_name: "질퍽이",
    types: ["독"],
    id: 88,
    description: "독 타입의 포켓몬으로, 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    korean_name: "질뻐기",
    types: ["독"],
    id: 89,
    description: "질퍽이의 진화형으로, 더 큰 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    korean_name: "셀러",
    types: ["물"],
    id: 90,
    description: "물 타입의 포켓몬으로, 조개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    korean_name: "파르셀",
    types: ["물", "얼음"],
    id: 91,
    description: "셀러의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    korean_name: "고오스",
    types: ["고스트", "독"],
    id: 92,
    description: "고스트와 독 타입의 포켓몬으로, 유령 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    korean_name: "고우스트",
    types: ["고스트", "독"],
    id: 93,
    description: "고오스의 진화형으로, 더 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    korean_name: "팬텀",
    types: ["고스트", "독"],
    id: 94,
    description:
      "고우스트의 최종 진화형으로, 매우 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    korean_name: "롱스톤",
    types: ["바위", "땅"],
    id: 95,
    description: "바위와 땅 타입의 포켓몬으로, 긴 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    korean_name: "슬리프",
    types: ["에스퍼"],
    id: 96,
    description: "에스퍼 타입의 포켓몬으로, 최면 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    korean_name: "슬리퍼",
    types: ["에스퍼"],
    id: 97,
    description: "슬리프의 진화형으로, 더 강력한 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    korean_name: "크랩",
    types: ["물"],
    id: 98,
    description: "물 타입의 포켓몬으로, 작은 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    korean_name: "킹크랩",
    types: ["물"],
    id: 99,
    description: "크랩의 진화형으로, 더 큰 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    korean_name: "찌리리공",
    types: ["전기"],
    id: 100,
    description: "전기 타입의 포켓몬으로, 전기를 방출할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    korean_name: "붐볼",
    types: ["전기"],
    id: 101,
    description: "찌리리공의 진화형으로, 더 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    korean_name: "아라리",
    types: ["풀", "에스퍼"],
    id: 102,
    description: "풀과 에스퍼 타입의 포켓몬으로, 알 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    korean_name: "나시",
    types: ["풀", "에스퍼"],
    id: 103,
    description: "아라리의 진화형으로, 세 개의 머리를 가진 야자수 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    korean_name: "탕구리",
    types: ["땅"],
    id: 104,
    description: "땅 타입의 포켓몬으로, 작은 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    korean_name: "텅구리",
    types: ["땅"],
    id: 105,
    description:
      "탕구리의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    korean_name: "시라소몬",
    types: ["격투"],
    id: 106,
    description: "격투 타입의 포켓몬으로, 강한 발차기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    korean_name: "홍수몬",
    types: ["격투"],
    id: 107,
    description: "격투 타입의 포켓몬으로, 강한 펀치 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    korean_name: "내루미",
    types: ["노말"],
    id: 108,
    description: "노말 타입의 포켓몬으로, 긴 혀를 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    korean_name: "또가스",
    types: ["독"],
    id: 109,
    description: "독 타입의 포켓몬으로, 독가스를 내뿜습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    korean_name: "또도가스",
    types: ["독"],
    id: 110,
    description: "또가스의 진화형으로, 더 큰 독가스 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    korean_name: "뿔카노",
    types: ["땅", "바위"],
    id: 111,
    description: "땅과 바위 타입의 포켓몬으로, 큰 뿔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    korean_name: "코뿌리",
    types: ["땅", "바위"],
    id: 112,
    description: "뿔카노의 진화형으로, 더 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    korean_name: "럭키",
    types: ["노말"],
    id: 113,
    description: "노말 타입의 포켓몬으로, 높은 체력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    korean_name: "덩쿠리",
    types: ["풀"],
    id: 114,
    description: "풀 타입의 포켓몬으로, 덩굴 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    korean_name: "캥카",
    types: ["노말"],
    id: 115,
    description: "노말 타입의 포켓몬으로, 아기 캥거루를 보호합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    korean_name: "쏘드라",
    types: ["물"],
    id: 116,
    description: "물 타입의 포켓몬으로, 작은 해마 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    korean_name: "시드라",
    types: ["물"],
    id: 117,
    description: "쏘드라의 진화형으로, 더 크고 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    korean_name: "콘치",
    types: ["물"],
    id: 118,
    description: "물 타입의 포켓몬으로, 작은 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    korean_name: "왕콘치",
    types: ["물"],
    id: 119,
    description: "콘치의 진화형으로, 더 큰 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    korean_name: "별가사리",
    types: ["물"],
    id: 120,
    description: "물 타입의 포켓몬으로, 별 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    korean_name: "아쿠스타",
    types: ["물", "에스퍼"],
    id: 121,
    description: "별가사리의 진화형으로, 강력한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    korean_name: "마임맨",
    types: ["에스퍼", "페어리"],
    id: 122,
    description: "에스퍼와 페어리 타입의 포켓몬으로, 마임 동작에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    korean_name: "스라크",
    types: ["벌레", "비행"],
    id: 123,
    description: "벌레와 비행 타입의 포켓몬으로, 큰 낫 모양의 팔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    korean_name: "루주라",
    types: ["얼음", "에스퍼"],
    id: 124,
    description: "얼음과 에스퍼 타입의 포켓몬으로, 독특한 춤 동작을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    korean_name: "에레브",
    types: ["전기"],
    id: 125,
    description: "전기 타입의 포켓몬으로, 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    korean_name: "마그마",
    types: ["불꽃"],
    id: 126,
    description: "불꽃 타입의 포켓몬으로, 뜨거운 마그마를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    korean_name: "쁘사이저",
    types: ["벌레"],
    id: 127,
    description: "벌레 타입의 포켓몬으로, 강한 턱을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    korean_name: "켄타로스",
    types: ["노말"],
    id: 128,
    description: "노말 타입의 포켓몬으로, 강력한 뿔을 가진 황소 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    korean_name: "잉어킹",
    types: ["물"],
    id: 129,
    description: "물 타입의 포켓몬으로, 약하지만 끈기 있는 잉어 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    korean_name: "갸라도스",
    types: ["물", "비행"],
    id: 130,
    description: "잉어킹의 진화형으로, 매우 강력한 물과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    korean_name: "라프라스",
    types: ["물", "얼음"],
    id: 131,
    description: "물과 얼음 타입의 포켓몬으로, 큰 바다 거북 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    korean_name: "메타몽",
    types: ["노말"],
    id: 132,
    description:
      "노말 타입의 포켓몬으로, 다양한 포켓몬으로 변신할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    korean_name: "이브이",
    types: ["노말"],
    id: 133,
    description: "노말 타입의 포켓몬으로, 다양한 진화형을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    korean_name: "샤미드",
    types: ["물"],
    id: 134,
    description: "이브이의 물 타입 진화형으로, 강력한 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    korean_name: "쥬피썬더",
    types: ["전기"],
    id: 135,
    description: "이브이의 전기 타입 진화형으로, 강력한 전기 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    korean_name: "부스터",
    types: ["불꽃"],
    id: 136,
    description: "이브이의 불꽃 타입 진화형으로, 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    korean_name: "폴리곤",
    types: ["노말"],
    id: 137,
    description: "노말 타입의 포켓몬으로, 디지털 데이터로 이루어진 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    korean_name: "암나이트",
    types: ["바위", "물"],
    id: 138,
    description: "바위와 물 타입의 포켓몬으로, 고대 생물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    korean_name: "암스타",
    types: ["바위", "물"],
    id: 139,
    description: "암나이트의 진화형으로, 더 강력한 바위와 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    korean_name: "투구",
    types: ["바위", "물"],
    id: 140,
    description: "바위와 물 타입의 포켓몬으로, 고대 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    korean_name: "투구푸스",
    types: ["바위", "물"],
    id: 141,
    description: "투구의 진화형으로, 더 큰 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    korean_name: "프테라",
    types: ["바위", "비행"],
    id: 142,
    description: "바위와 비행 타입의 포켓몬으로, 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    korean_name: "잠만보",
    types: ["노말"],
    id: 143,
    description: "노말 타입의 포켓몬으로, 큰 몸집과 느긋한 성격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    korean_name: "프리져",
    types: ["얼음", "비행"],
    id: 144,
    description:
      "얼음과 비행 타입의 전설의 포켓몬으로, 차가운 바람을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    korean_name: "썬더",
    types: ["전기", "비행"],
    id: 145,
    description:
      "전기와 비행 타입의 전설의 포켓몬으로, 강력한 번개를 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    korean_name: "파이어",
    types: ["불꽃", "비행"],
    id: 146,
    description:
      "불꽃과 비행 타입의 전설의 포켓몬으로, 뜨거운 불꽃을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    korean_name: "미뇽",
    types: ["드래곤"],
    id: 147,
    description:
      "드래곤 타입의 포켓몬으로, 작고 귀여운 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    korean_name: "신뇽",
    types: ["드래곤"],
    id: 148,
    description: "미뇽의 진화형으로, 더 크고 강한 드래곤 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    korean_name: "망나뇽",
    types: ["드래곤", "비행"],
    id: 149,
    description:
      "신뇽의 최종 진화형으로, 강력한 드래곤과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    korean_name: "뮤츠",
    types: ["에스퍼"],
    id: 150,
    description: "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    korean_name: "뮤",
    types: ["에스퍼"],
    id: 151,
    description:
      "에스퍼 타입의 전설의 포켓몬으로, 희귀하고 신비로운 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    korean_name: "치코리타",
    types: ["풀"],
    id: 152,
    description: "풀 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    korean_name: "베이리프",
    types: ["풀"],
    id: 153,
    description: "치코리타의 진화형으로, 등에는 큰 잎이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    korean_name: "메가니움",
    types: ["풀"],
    id: 154,
    description: "베이리프의 최종 진화형으로, 등에는 큰 꽃이 피어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    korean_name: "브케인",
    types: ["불꽃"],
    id: 155,
    description: "불꽃 타입의 포켓몬으로, 등에 불꽃을 지닌다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    korean_name: "마그케인",
    types: ["불꽃"],
    id: 156,
    description: "브케인의 진화형으로, 더 강한 불꽃을 지닌다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    korean_name: "블레이범",
    types: ["불꽃"],
    id: 157,
    description: "마그케인의 최종 진화형으로, 매우 강력한 불꽃을 지닌다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    korean_name: "리아코",
    types: ["물"],
    id: 158,
    description: "물 타입의 포켓몬으로, 작고 귀여운 악어 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    korean_name: "엘리게이",
    types: ["물"],
    id: 159,
    description: "리아코의 진화형으로, 더 크고 강한 악어 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    korean_name: "장크로다일",
    types: ["물"],
    id: 160,
    description: "엘리게이의 최종 진화형으로, 매우 강력한 악어 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    korean_name: "꼬리선",
    types: ["노말"],
    id: 161,
    description: "노말 타입의 포켓몬으로, 긴 꼬리를 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    korean_name: "다꼬리",
    types: ["노말"],
    id: 162,
    description: "꼬리선의 진화형으로, 더 긴 꼬리를 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    korean_name: "부우부",
    types: ["노말", "비행"],
    id: 163,
    description: "노말과 비행 타입의 포켓몬으로, 작은 올빼미 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    korean_name: "야부엉",
    types: ["노말", "비행"],
    id: 164,
    description: "부우부의 진화형으로, 더 크고 강한 올빼미 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    korean_name: "레디바",
    types: ["벌레", "비행"],
    id: 165,
    description: "벌레와 비행 타입의 포켓몬으로, 작은 반딧불이 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    korean_name: "레디안",
    types: ["벌레", "비행"],
    id: 166,
    description: "레디바의 진화형으로, 더 크고 빛나는 반딧불이 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    korean_name: "페이검",
    types: ["벌레", "독"],
    id: 167,
    description: "벌레와 독 타입의 포켓몬으로, 작은 거미 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    korean_name: "아리아도스",
    types: ["벌레", "독"],
    id: 168,
    description: "페이검의 진화형으로, 더 크고 강한 거미 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    korean_name: "크로뱃",
    types: ["독", "비행"],
    id: 169,
    description: "골뱃의 진화형으로, 더 빠르고 강한 박쥐 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    korean_name: "초라기",
    types: ["물", "전기"],
    id: 170,
    description: "물과 전기 타입의 포켓몬으로, 작은 물고기 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    korean_name: "랜턴",
    types: ["물", "전기"],
    id: 171,
    description: "초라기의 진화형으로, 빛을 내는 물고기 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    korean_name: "피츄",
    types: ["전기"],
    id: 172,
    description: "전기 타입의 포켓몬으로, 피카츄의 아기 형태이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    korean_name: "삐",
    types: ["페어리"],
    id: 173,
    description: "페어리 타입의 포켓몬으로, 삐삐의 아기 형태이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    korean_name: "푸푸린",
    types: ["노말", "페어리"],
    id: 174,
    description: "노말과 페어리 타입의 포켓몬으로, 푸린의 아기 형태이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    korean_name: "토게피",
    types: ["노말", "페어리"],
    id: 175,
    description: "노말과 페어리 타입의 포켓몬으로, 토게틱의 아기 형태이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    korean_name: "토게틱",
    types: ["페어리", "비행"],
    id: 176,
    description: "토게피의 진화형으로, 날개를 가진 귀여운 모습이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    korean_name: "네이티",
    types: ["에스퍼", "비행"],
    id: 177,
    description: "에스퍼와 비행 타입의 포켓몬으로, 작은 새 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    korean_name: "네이티오",
    types: ["에스퍼", "비행"],
    id: 178,
    description: "네이티의 진화형으로, 더 크고 강한 새 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    korean_name: "메리프",
    types: ["전기"],
    id: 179,
    description: "전기 타입의 포켓몬으로, 양모에 전기가 있다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    korean_name: "보송송",
    types: ["전기"],
    id: 180,
    description: "메리프의 진화형으로, 더 많은 양모와 전기를 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    korean_name: "전룡",
    types: ["전기"],
    id: 181,
    description: "보송송의 최종 진화형으로, 매우 강력한 전기를 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    korean_name: "아르코",
    types: ["풀"],
    id: 182,
    description: "풀 타입의 포켓몬으로, 아름다운 꽃 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    korean_name: "마릴",
    types: ["물", "페어리"],
    id: 183,
    description: "물과 페어리 타입의 포켓몬으로, 귀여운 물쥐 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    korean_name: "마릴리",
    types: ["물", "페어리"],
    id: 184,
    description: "마릴의 진화형으로, 더 크고 강한 물쥐 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    korean_name: "꼬지모",
    types: ["바위"],
    id: 185,
    description: "바위 타입의 포켓몬으로, 나무 모양을 하고 있다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    korean_name: "왕구리",
    types: ["물"],
    id: 186,
    description: "물 타입의 포켓몬으로, 큰 개구리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    korean_name: "통통코",
    types: ["풀", "비행"],
    id: 187,
    description: "풀과 비행 타입의 포켓몬으로, 작은 민들레 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    korean_name: "두코",
    types: ["풀", "비행"],
    id: 188,
    description: "통통코의 진화형으로, 더 큰 민들레 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    korean_name: "솜솜코",
    types: ["풀", "비행"],
    id: 189,
    description: "두코의 최종 진화형으로, 매우 큰 민들레 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    korean_name: "에이팜",
    types: ["노말"],
    id: 190,
    description: "노말 타입의 포켓몬으로, 긴 꼬리를 가진 원숭이 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    korean_name: "해너츠",
    types: ["풀"],
    id: 191,
    description: "풀 타입의 포켓몬으로, 작은 해바라기 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    korean_name: "해루미",
    types: ["풀"],
    id: 192,
    description: "해너츠의 진화형으로, 더 큰 해바라기 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    korean_name: "왕자리",
    types: ["벌레", "비행"],
    id: 193,
    description: "벌레와 비행 타입의 포켓몬으로, 잠자리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    korean_name: "우파",
    types: ["물", "땅"],
    id: 194,
    description: "물과 땅 타입의 포켓몬으로, 작은 개구리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    korean_name: "누오",
    types: ["물", "땅"],
    id: 195,
    description: "우파의 진화형으로, 더 크고 강한 개구리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    korean_name: "에브이",
    types: ["노말"],
    id: 196,
    description: "노말 타입의 포켓몬으로, 다양한 진화형을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    korean_name: "블래키",
    types: ["악"],
    id: 197,
    description: "에브이의 악 타입 진화형으로, 어두운 성격을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    korean_name: "니로우",
    types: ["악", "비행"],
    id: 198,
    description: "악과 비행 타입의 포켓몬으로, 까마귀 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    korean_name: "야도킹",
    types: ["물", "에스퍼"],
    id: 199,
    description: "야도란의 진화형으로, 더 강력한 물과 에스퍼 속성을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    korean_name: "무우마",
    types: ["고스트"],
    id: 200,
    description: "고스트 타입의 포켓몬으로, 작은 유령 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    korean_name: "안농",
    types: ["에스퍼"],
    id: 201,
    description: "에스퍼 타입의 포켓몬으로, 알파벳 모양을 하고 있다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    korean_name: "마자용",
    types: ["에스퍼"],
    id: 202,
    description: "에스퍼 타입의 포켓몬으로, 강한 정신력을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    korean_name: "키링키",
    types: ["노말", "에스퍼"],
    id: 203,
    description: "노말과 에스퍼 타입의 포켓몬으로, 기린 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    korean_name: "피구왕",
    types: ["벌레"],
    id: 204,
    description: "벌레 타입의 포켓몬으로, 작은 나무 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    korean_name: "아그용",
    types: ["벌레", "강철"],
    id: 205,
    description: "피구왕의 진화형으로, 강철 껍질을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    korean_name: "노라키",
    types: ["노말"],
    id: 206,
    description: "노말 타입의 포켓몬으로, 긴 몸을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    korean_name: "꼬마돌",
    types: ["땅", "비행"],
    id: 207,
    description: "땅과 비행 타입의 포켓몬으로, 전갈 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    korean_name: "강철톤",
    types: ["강철"],
    id: 208,
    description: "강철 타입의 포켓몬으로, 강력한 강철 몸을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    korean_name: "블루",
    types: ["페어리"],
    id: 209,
    description: "페어리 타입의 포켓몬으로, 귀여운 개 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    korean_name: "그랑블루",
    types: ["페어리"],
    id: 210,
    description: "블루의 진화형으로, 더 크고 강한 개 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    korean_name: "침바루",
    types: ["물", "독"],
    id: 211,
    description: "물과 독 타입의 포켓몬으로, 가시가 있는 물고기 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    korean_name: "핫삼",
    types: ["벌레", "강철"],
    id: 212,
    description: "벌레와 강철 타입의 포켓몬으로, 강력한 집게를 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    korean_name: "단단지",
    types: ["벌레", "바위"],
    id: 213,
    description: "벌레와 바위 타입의 포켓몬으로, 단단한 껍질을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    korean_name: "헤라크로스",
    types: ["벌레", "격투"],
    id: 214,
    description: "벌레와 격투 타입의 포켓몬으로, 강력한 뿔을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    korean_name: "포푸니",
    types: ["악", "얼음"],
    id: 215,
    description: "악과 얼음 타입의 포켓몬으로, 작은 고양이 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    korean_name: "깜지곰",
    types: ["노말"],
    id: 216,
    description: "노말 타입의 포켓몬으로, 작은 곰 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    korean_name: "링곰",
    types: ["노말"],
    id: 217,
    description: "깜지곰의 진화형으로, 더 크고 강한 곰 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    korean_name: "마그마그",
    types: ["불꽃"],
    id: 218,
    description: "불꽃 타입의 포켓몬으로, 용암 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    korean_name: "마그카르고",
    types: ["불꽃", "바위"],
    id: 219,
    description: "마그마그의 진화형으로, 용암과 바위로 이루어진 모습이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    korean_name: "꾸꾸리",
    types: ["얼음", "땅"],
    id: 220,
    description: "얼음과 땅 타입의 포켓몬으로, 작은 돼지 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    korean_name: "메꾸리",
    types: ["얼음", "땅"],
    id: 221,
    description: "꾸꾸리의 진화형으로, 더 크고 강한 돼지 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    korean_name: "코산호",
    types: ["물", "바위"],
    id: 222,
    description: "물과 바위 타입의 포켓몬으로, 산호 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    korean_name: "총어",
    types: ["물"],
    id: 223,
    description: "물 타입의 포켓몬으로, 작은 총 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    korean_name: "대포무노",
    types: ["물"],
    id: 224,
    description: "총어의 진화형으로, 더 큰 대포 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    korean_name: "딜리버드",
    types: ["얼음", "비행"],
    id: 225,
    description: "얼음과 비행 타입의 포켓몬으로, 선물을 나르는 새 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    korean_name: "만타인",
    types: ["물", "비행"],
    id: 226,
    description: "물과 비행 타입의 포켓몬으로, 가오리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    korean_name: "무장조",
    types: ["강철", "비행"],
    id: 227,
    description: "강철과 비행 타입의 포켓몬으로, 강철 깃털을 가진 새 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    korean_name: "델빌",
    types: ["악", "불꽃"],
    id: 228,
    description: "악과 불꽃 타입의 포켓몬으로, 작은 개 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    korean_name: "헬가",
    types: ["악", "불꽃"],
    id: 229,
    description: "델빌의 진화형으로, 더 크고 강한 개 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    korean_name: "킹드라",
    types: ["물", "드래곤"],
    id: 230,
    description: "시드라의 진화형으로, 강력한 물과 드래곤 속성을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    korean_name: "코코리",
    types: ["땅"],
    id: 231,
    description: "땅 타입의 포켓몬으로, 작은 코끼리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    korean_name: "코리갑",
    types: ["땅"],
    id: 232,
    description: "코코리의 진화형으로, 더 크고 강한 코끼리 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    korean_name: "폴리곤2",
    types: ["노말"],
    id: 233,
    description: "노말 타입의 포켓몬으로, 업그레이드된 디지털 데이터 모습이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    korean_name: "노리키",
    types: ["노말"],
    id: 234,
    description: "노말 타입의 포켓몬으로, 사슴 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    korean_name: "루브도",
    types: ["노말"],
    id: 235,
    description: "노말 타입의 포켓몬으로, 그림을 그리는 능력을 가진다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    korean_name: "배루키",
    types: ["격투"],
    id: 236,
    description: "격투 타입의 포켓몬으로, 다양한 격투 기술을 배운다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    korean_name: "카포에라",
    types: ["격투"],
    id: 237,
    description:
      "격투 타입의 포켓몬으로, 댄스와 격투를 결합한 기술을 사용한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    korean_name: "뽀뽀라",
    types: ["얼음", "에스퍼"],
    id: 238,
    description: "얼음과 에스퍼 타입의 포켓몬으로, 키스로 상대를 얼린다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    korean_name: "에레키드",
    types: ["전기"],
    id: 239,
    description: "전기 타입의 포켓몬으로, 강한 전기를 방출한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    korean_name: "마그비",
    types: ["불꽃"],
    id: 240,
    description: "불꽃 타입의 포켓몬으로, 강한 불꽃을 방출한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    korean_name: "밀탱크",
    types: ["노말"],
    id: 241,
    description: "노말 타입의 포켓몬으로, 우유를 생산하는 소 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    korean_name: "해피너스",
    types: ["노말"],
    id: 242,
    description: "럭키의 진화형으로, 행복을 나누는 포켓몬이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    korean_name: "라이코",
    types: ["전기"],
    id: 243,
    description: "전기 타입의 전설의 포켓몬으로, 번개를 조종한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    korean_name: "엔테이",
    types: ["불꽃"],
    id: 244,
    description: "불꽃 타입의 전설의 포켓몬으로, 불을 조종한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    korean_name: "스이쿤",
    types: ["물"],
    id: 245,
    description: "물 타입의 전설의 포켓몬으로, 물을 조종한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    korean_name: "애버라스",
    types: ["바위", "땅"],
    id: 246,
    description: "바위와 땅 타입의 포켓몬으로, 작은 공룡 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    korean_name: "데기라스",
    types: ["바위", "땅"],
    id: 247,
    description: "애버라스의 진화형으로, 더 크고 강한 공룡 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    korean_name: "마기라스",
    types: ["바위", "악"],
    id: 248,
    description: "데기라스의 최종 진화형으로, 매우 강력한 공룡 모양이다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    korean_name: "루기아",
    types: ["에스퍼", "비행"],
    id: 249,
    description: "에스퍼와 비행 타입의 전설의 포켓몬으로, 바람을 조종한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    korean_name: "칠색조",
    types: ["불꽃", "비행"],
    id: 250,
    description: "불꽃과 비행 타입의 전설의 포켓몬으로, 불꽃을 조종한다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    korean_name: "세레비",
    types: ["에스퍼", "풀"],
    id: 251,
    description: "에스퍼와 풀 타입의 전설의 포켓몬으로, 시간을 넘나든다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    korean_name: "나무지기",
    types: ["풀"],
    id: 252,
    description: "풀 타입의 포켓몬으로, 작은 도마뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    korean_name: "나무돌이",
    types: ["풀"],
    id: 253,
    description: "나무지기의 진화형으로, 더 강력한 풀 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    korean_name: "나무킹",
    types: ["풀"],
    id: 254,
    description:
      "나무돌이의 최종 진화형으로, 매우 강력한 풀 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    korean_name: "아차모",
    types: ["불꽃"],
    id: 255,
    description: "불꽃 타입의 포켓몬으로, 작은 닭 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    korean_name: "영치코",
    types: ["불꽃", "격투"],
    id: 256,
    description: "아차모의 진화형으로, 격투 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    korean_name: "번치코",
    types: ["불꽃", "격투"],
    id: 257,
    description:
      "영치코의 최종 진화형으로, 매우 강력한 불꽃과 격투 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    korean_name: "물짱이",
    types: ["물"],
    id: 258,
    description: "물 타입의 포켓몬으로, 작은 악어 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    korean_name: "늪짱이",
    types: ["물", "땅"],
    id: 259,
    description: "물짱이의 진화형으로, 땅 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    korean_name: "대짱이",
    types: ["물", "땅"],
    id: 260,
    description:
      "늪짱이의 최종 진화형으로, 매우 강력한 물과 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    korean_name: "포챠나",
    types: ["악"],
    id: 261,
    description: "악 타입의 포켓몬으로, 작은 개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    korean_name: "그라에나",
    types: ["악"],
    id: 262,
    description: "포챠나의 진화형으로, 더 강력한 악 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    korean_name: "지그제구리",
    types: ["노말"],
    id: 263,
    description: "노말 타입의 포켓몬으로, 작은 너구리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    korean_name: "직구리",
    types: ["노말"],
    id: 264,
    description:
      "지그제구리의 진화형으로, 더 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    korean_name: "개무소",
    types: ["벌레"],
    id: 265,
    description: "벌레 타입의 포켓몬으로, 작은 애벌레 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    korean_name: "실쿤",
    types: ["벌레"],
    id: 266,
    description: "개무소의 진화형으로, 고치 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    korean_name: "뷰티플라이",
    types: ["벌레", "비행"],
    id: 267,
    description: "실쿤의 진화형으로, 아름다운 나비 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    korean_name: "카스쿤",
    types: ["벌레"],
    id: 268,
    description: "개무소의 다른 진화형으로, 고치 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    korean_name: "독케일",
    types: ["벌레", "독"],
    id: 269,
    description: "카스쿤의 진화형으로, 독 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    korean_name: "연꽃몬",
    types: ["물", "풀"],
    id: 270,
    description: "물과 풀 타입의 포켓몬으로, 연꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    korean_name: "로토스",
    types: ["물", "풀"],
    id: 271,
    description: "연꽃몬의 진화형으로, 더 강력한 물과 풀 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    korean_name: "로파파",
    types: ["물", "풀"],
    id: 272,
    description:
      "로토스의 최종 진화형으로, 매우 강력한 물과 풀 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    korean_name: "도토링",
    types: ["풀"],
    id: 273,
    description: "풀 타입의 포켓몬으로, 도토리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    korean_name: "잎새코",
    types: ["풀", "악"],
    id: 274,
    description: "도토링의 진화형으로, 악 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    korean_name: "다탱구",
    types: ["풀", "악"],
    id: 275,
    description:
      "잎새코의 최종 진화형으로, 매우 강력한 풀과 악 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    korean_name: "테일로",
    types: ["노말", "비행"],
    id: 276,
    description:
      "노말과 비행 타입의 포켓몬으로, 작은 제비 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    korean_name: "스왈로",
    types: ["노말", "비행"],
    id: 277,
    description: "테일로의 진화형으로, 더 강력한 노말과 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    korean_name: "갈모매",
    types: ["물", "비행"],
    id: 278,
    description: "물과 비행 타입의 포켓몬으로, 갈매기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    korean_name: "패리퍼",
    types: ["물", "비행"],
    id: 279,
    description: "갈모매의 진화형으로, 더 강력한 물과 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    korean_name: "랄토스",
    types: ["에스퍼", "페어리"],
    id: 280,
    description:
      "에스퍼와 페어리 타입의 포켓몬으로, 작은 인형 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    korean_name: "킬리아",
    types: ["에스퍼", "페어리"],
    id: 281,
    description:
      "랄토스의 진화형으로, 더 강력한 에스퍼와 페어리 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    korean_name: "가디안",
    types: ["에스퍼", "페어리"],
    id: 282,
    description:
      "킬리아의 최종 진화형으로, 매우 강력한 에스퍼와 페어리 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    korean_name: "비구술",
    types: ["벌레", "물"],
    id: 283,
    description:
      "벌레와 물 타입의 포켓몬으로, 작은 물방개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    korean_name: "비나방",
    types: ["벌레", "비행"],
    id: 284,
    description: "비구술의 진화형으로, 비행 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    korean_name: "버섯꼬",
    types: ["풀"],
    id: 285,
    description: "풀 타입의 포켓몬으로, 작은 버섯 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    korean_name: "버섯모",
    types: ["풀", "격투"],
    id: 286,
    description: "버섯꼬의 진화형으로, 격투 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    korean_name: "게을로",
    types: ["노말"],
    id: 287,
    description: "노말 타입의 포켓몬으로, 게으른 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    korean_name: "발바로",
    types: ["노말"],
    id: 288,
    description: "게을로의 진화형으로, 더 활발한 모습을 보입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    korean_name: "게을킹",
    types: ["노말"],
    id: 289,
    description:
      "발바로의 최종 진화형으로, 매우 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    korean_name: "토중몬",
    types: ["벌레", "땅"],
    id: 290,
    description: "벌레와 땅 타입의 포켓몬으로, 선인장 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    korean_name: "아이스크",
    types: ["벌레", "땅"],
    id: 291,
    description: "토중몬의 진화형으로, 더 강력한 벌레와 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    korean_name: "껍질몬",
    types: ["벌레", "고스트"],
    id: 292,
    description: "껍질몬의 다른 진화형으로, 고스트 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    korean_name: "소곤룡",
    types: ["노말"],
    id: 293,
    description: "노말 타입의 포켓몬으로, 작은 토끼 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    korean_name: "노공룡",
    types: ["노말"],
    id: 294,
    description: "소곤룡의 진화형으로, 더 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    korean_name: "폭음룡",
    types: ["노말"],
    id: 295,
    description:
      "노공룡의 최종 진화형으로, 매우 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    korean_name: "마크탕",
    types: ["격투"],
    id: 296,
    description: "격투 타입의 포켓몬으로, 작은 개구리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    korean_name: "하리뭉",
    types: ["격투"],
    id: 297,
    description: "마크탕의 진화형으로, 더 강력한 격투 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    korean_name: "루리리",
    types: ["노말", "페어리"],
    id: 298,
    description:
      "노말과 페어리 타입의 포켓몬으로, 귀여운 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    korean_name: "코코파스",
    types: ["바위"],
    id: 299,
    description: "바위 타입의 포켓몬으로, 코코넛 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    korean_name: "에나비",
    types: ["노말"],
    id: 300,
    description: "노말 타입의 포켓몬으로, 작은 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    korean_name: "델케티",
    types: ["노말"],
    id: 301,
    description: "에나비의 진화형으로, 더 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    korean_name: "깜까미",
    types: ["악", "고스트"],
    id: 302,
    description: "악과 고스트 타입의 포켓몬으로, 어두운 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    korean_name: "입치트",
    types: ["강철", "페어리"],
    id: 303,
    description:
      "강철과 페어리 타입의 포켓몬으로, 날카로운 이빨을 가지고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    korean_name: "가보리",
    types: ["강철", "바위"],
    id: 304,
    description:
      "강철과 바위 타입의 포켓몬으로, 작은 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    korean_name: "갱도라",
    types: ["강철", "바위"],
    id: 305,
    description: "가보리의 진화형으로, 더 강력한 강철과 바위 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    korean_name: "보스로라",
    types: ["강철", "바위"],
    id: 306,
    description:
      "갱도라의 최종 진화형으로, 매우 강력한 강철과 바위 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    korean_name: "요가랑",
    types: ["격투", "에스퍼"],
    id: 307,
    description:
      "격투와 에스퍼 타입의 포켓몬으로, 요가 자세를 취하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    korean_name: "요가램",
    types: ["격투", "에스퍼"],
    id: 308,
    description:
      "요가랑의 진화형으로, 더 강력한 격투와 에스퍼 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    korean_name: "썬더라이",
    types: ["전기"],
    id: 309,
    description: "전기 타입의 포켓몬으로, 작은 개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    korean_name: "썬더볼트",
    types: ["전기"],
    id: 310,
    description: "썬더라이의 진화형으로, 더 강력한 전기 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    korean_name: "플러시",
    types: ["전기"],
    id: 311,
    description: "전기 타입의 포켓몬으로, 플러스 기호 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    korean_name: "마이농",
    types: ["전기"],
    id: 312,
    description: "전기 타입의 포켓몬으로, 마이너스 기호 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    korean_name: "볼비트",
    types: ["벌레"],
    id: 313,
    description: "벌레 타입의 포켓몬으로, 반딧불이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    korean_name: "네오비트",
    types: ["벌레"],
    id: 314,
    description: "벌레 타입의 포켓몬으로, 반딧불이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    korean_name: "로젤리아",
    types: ["풀", "독"],
    id: 315,
    description: "풀과 독 타입의 포켓몬으로, 장미 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    korean_name: "꼴깍몬",
    types: ["독"],
    id: 316,
    description: "독 타입의 포켓몬으로, 작은 슬라임 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    korean_name: "꿀꺽몬",
    types: ["독"],
    id: 317,
    description: "꼴깍몬의 진화형으로, 더 강력한 독 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    korean_name: "샤프니아",
    types: ["물", "악"],
    id: 318,
    description: "물과 악 타입의 포켓몬으로, 상어 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    korean_name: "샤크니아",
    types: ["물", "악"],
    id: 319,
    description: "샤프니아의 진화형으로, 더 강력한 물과 악 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    korean_name: "고래왕자",
    types: ["물"],
    id: 320,
    description: "물 타입의 포켓몬으로, 작은 고래 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    korean_name: "고래왕",
    types: ["물"],
    id: 321,
    description: "고래왕자의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    korean_name: "둔타",
    types: ["불꽃", "땅"],
    id: 322,
    description: "불꽃과 땅 타입의 포켓몬으로, 낙타 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    korean_name: "폭타",
    types: ["불꽃", "땅"],
    id: 323,
    description: "둔타의 진화형으로, 더 강력한 불꽃과 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    korean_name: "코터스",
    types: ["불꽃"],
    id: 324,
    description: "불꽃 타입의 포켓몬으로, 거북이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    korean_name: "피그점프",
    types: ["에스퍼"],
    id: 325,
    description: "에스퍼 타입의 포켓몬으로, 돼지 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    korean_name: "피그킹",
    types: ["에스퍼"],
    id: 326,
    description:
      "피그점프의 진화형으로, 더 강력한 에스퍼 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    korean_name: "얼루기",
    types: ["노말"],
    id: 327,
    description: "노말 타입의 포켓몬으로, 얼룩말 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    korean_name: "톱치",
    types: ["땅"],
    id: 328,
    description: "땅 타입의 포켓몬으로, 개미귀신 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    korean_name: "비브라바",
    types: ["땅", "드래곤"],
    id: 329,
    description: "톱치의 진화형으로, 드래곤 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    korean_name: "플라이곤",
    types: ["땅", "드래곤"],
    id: 330,
    description:
      "비브라바의 최종 진화형으로, 매우 강력한 땅과 드래곤 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    korean_name: "선인왕",
    types: ["풀"],
    id: 331,
    description: "풀 타입의 포켓몬으로, 선인장 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    korean_name: "밤선인",
    types: ["풀", "악"],
    id: 332,
    description: "선인왕의 진화형으로, 악 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    korean_name: "파비코",
    types: ["노말", "비행"],
    id: 333,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    korean_name: "파비코리",
    types: ["드래곤", "비행"],
    id: 334,
    description: "파비코의 진화형으로, 드래곤 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    korean_name: "쟝고",
    types: ["노말"],
    id: 335,
    description: "노말 타입의 포켓몬으로, 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    korean_name: "세비퍼",
    types: ["독"],
    id: 336,
    description: "독 타입의 포켓몬으로, 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    korean_name: "루나톤",
    types: ["바위", "에스퍼"],
    id: 337,
    description: "바위와 에스퍼 타입의 포켓몬으로, 달 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    korean_name: "솔록",
    types: ["바위", "에스퍼"],
    id: 338,
    description: "바위와 에스퍼 타입의 포켓몬으로, 태양 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    korean_name: "미꾸리",
    types: ["물", "땅"],
    id: 339,
    description: "물과 땅 타입의 포켓몬으로, 미꾸라지 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    korean_name: "메깅",
    types: ["물", "땅"],
    id: 340,
    description: "미꾸리의 진화형으로, 더 강력한 물과 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    korean_name: "가재군",
    types: ["물"],
    id: 341,
    description: "물 타입의 포켓몬으로, 가재 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    korean_name: "가재장군",
    types: ["물", "악"],
    id: 342,
    description: "가재군의 진화형으로, 악 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    korean_name: "오뚝군",
    types: ["땅", "에스퍼"],
    id: 343,
    description: "땅과 에스퍼 타입의 포켓몬으로, 오뚝이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    korean_name: "점토도리",
    types: ["땅", "에스퍼"],
    id: 344,
    description: "오뚝군의 진화형으로, 더 강력한 땅과 에스퍼 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    korean_name: "릴링",
    types: ["바위", "풀"],
    id: 345,
    description: "바위와 풀 타입의 포켓몬으로, 릴리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    korean_name: "릴드릴",
    types: ["바위", "풀"],
    id: 346,
    description: "릴링의 진화형으로, 더 강력한 바위와 풀 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    korean_name: "아노딥스",
    types: ["바위", "벌레"],
    id: 347,
    description:
      "바위와 벌레 타입의 포켓몬으로, 고대 생물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    korean_name: "아말도",
    types: ["바위", "벌레"],
    id: 348,
    description:
      "아노딥스의 진화형으로, 더 강력한 바위와 벌레 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    korean_name: "꼬지지",
    types: ["물"],
    id: 349,
    description: "물 타입의 포켓몬으로, 작은 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    korean_name: "밀로틱",
    types: ["물"],
    id: 350,
    description: "꼬지지의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },

  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    korean_name: "캐스퐁",
    types: ["노말"],
    id: 351,
    description: "날씨에 따라 타입이 변하는 특별한 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    korean_name: "켈리몬",
    types: ["노말"],
    id: 352,
    description: "노말 타입의 포켓몬으로, 카멜레온 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    korean_name: "어둠대신",
    types: ["고스트"],
    id: 353,
    description: "고스트 타입의 포켓몬으로, 인형 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    korean_name: "다크펫",
    types: ["고스트"],
    id: 354,
    description:
      "어둠대신의 진화형으로, 더 강력한 고스트 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    korean_name: "해골몽",
    types: ["고스트"],
    id: 355,
    description: "고스트 타입의 포켓몬으로, 해골 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    korean_name: "미라몽",
    types: ["고스트"],
    id: 356,
    description: "해골몽의 진화형으로, 더 강력한 고스트 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    korean_name: "트로피우스",
    types: ["풀", "비행"],
    id: 357,
    description: "풀과 비행 타입의 포켓몬으로, 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    korean_name: "치렁",
    types: ["에스퍼"],
    id: 358,
    description: "에스퍼 타입의 포켓몬으로, 종 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    korean_name: "앱솔",
    types: ["악"],
    id: 359,
    description: "악 타입의 포켓몬으로, 검은 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    korean_name: "마자",
    types: ["에스퍼"],
    id: 360,
    description: "에스퍼 타입의 포켓몬으로, 작은 인형 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    korean_name: "눈꼬마",
    types: ["얼음"],
    id: 361,
    description: "얼음 타입의 포켓몬으로, 눈사람 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    korean_name: "얼음귀신",
    types: ["얼음"],
    id: 362,
    description: "눈꼬마의 진화형으로, 더 강력한 얼음 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    korean_name: "대굴레오",
    types: ["얼음", "물"],
    id: 363,
    description: "얼음과 물 타입의 포켓몬으로, 물개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    korean_name: "씨레오",
    types: ["얼음", "물"],
    id: 364,
    description: "대굴레오의 진화형으로, 더 강력한 얼음과 물 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    korean_name: "씨카이저",
    types: ["얼음", "물"],
    id: 365,
    description:
      "씨레오의 최종 진화형으로, 매우 강력한 얼음과 물 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    korean_name: "진주몽",
    types: ["물"],
    id: 366,
    description: "물 타입의 포켓몬으로, 진주 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    korean_name: "헌테일",
    types: ["물"],
    id: 367,
    description: "진주몽의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    korean_name: "분홍장이",
    types: ["물"],
    id: 368,
    description: "진주몽의 다른 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    korean_name: "시라칸",
    types: ["물", "바위"],
    id: 369,
    description:
      "물과 바위 타입의 포켓몬으로, 고대 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    korean_name: "사랑동이",
    types: ["물"],
    id: 370,
    description: "물 타입의 포켓몬으로, 하트 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    korean_name: "아공이",
    types: ["드래곤"],
    id: 371,
    description: "드래곤 타입의 포켓몬으로, 작은 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    korean_name: "쉘곤",
    types: ["드래곤"],
    id: 372,
    description: "아공이의 진화형으로, 더 강력한 드래곤 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    korean_name: "보만다",
    types: ["드래곤", "비행"],
    id: 373,
    description: "쉘곤의 최종 진화형으로, 비행 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    korean_name: "메탕",
    types: ["강철", "에스퍼"],
    id: 374,
    description:
      "강철과 에스퍼 타입의 포켓몬으로, 작은 로봇 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    korean_name: "메탕구",
    types: ["강철", "에스퍼"],
    id: 375,
    description: "메탕의 진화형으로, 더 강력한 강철과 에스퍼 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    korean_name: "메타그로스",
    types: ["강철", "에스퍼"],
    id: 376,
    description:
      "메탕구의 최종 진화형으로, 매우 강력한 강철과 에스퍼 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    korean_name: "레지락",
    types: ["바위"],
    id: 377,
    description: "전설의 바위 타입 포켓몬으로, 강력한 방어력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    korean_name: "레지아이스",
    types: ["얼음"],
    id: 378,
    description: "전설의 얼음 타입 포켓몬으로, 강력한 얼음 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    korean_name: "레지스틸",
    types: ["강철"],
    id: 379,
    description: "전설의 강철 타입 포켓몬으로, 강력한 강철 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    korean_name: "라티아스",
    types: ["드래곤", "에스퍼"],
    id: 380,
    description:
      "전설의 드래곤과 에스퍼 타입 포켓몬으로, 아름다운 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    korean_name: "라티오스",
    types: ["드래곤", "에스퍼"],
    id: 381,
    description:
      "전설의 드래곤과 에스퍼 타입 포켓몬으로, 강력한 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    korean_name: "가이오가",
    types: ["물"],
    id: 382,
    description: "전설의 물 타입 포켓몬으로, 바다를 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    korean_name: "그란돈",
    types: ["땅"],
    id: 383,
    description: "전설의 땅 타입 포켓몬으로, 대지를 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    korean_name: "레쿠쟈",
    types: ["드래곤", "비행"],
    id: 384,
    description:
      "전설의 드래곤과 비행 타입 포켓몬으로, 하늘을 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    korean_name: "지라치",
    types: ["강철", "에스퍼"],
    id: 385,
    description:
      "전설의 강철과 에스퍼 타입 포켓몬으로, 소원을 들어주는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    korean_name: "테오키스",
    types: ["에스퍼"],
    id: 386,
    description:
      "전설의 에스퍼 타입 포켓몬으로, 다양한 형태로 변신할 수 있습니다.",
  },

  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    korean_name: "모부기",
    types: ["풀"],
    id: 387,
    description: "풀 타입의 포켓몬으로, 작은 거북이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    korean_name: "수풀부기",
    types: ["풀"],
    id: 388,
    description: "모부기의 진화형으로, 더 강력한 풀 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    korean_name: "토대부기",
    types: ["풀", "땅"],
    id: 389,
    description: "수풀부기의 최종 진화형으로, 땅 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    korean_name: "불꽃숭이",
    types: ["불꽃"],
    id: 390,
    description: "불꽃 타입의 포켓몬으로, 작은 원숭이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    korean_name: "파이숭이",
    types: ["불꽃", "격투"],
    id: 391,
    description: "불꽃숭이의 진화형으로, 격투 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    korean_name: "초염몽",
    types: ["불꽃", "격투"],
    id: 392,
    description:
      "파이숭이의 최종 진화형으로, 매우 강력한 불꽃과 격투 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    korean_name: "팽도리",
    types: ["물"],
    id: 393,
    description: "물 타입의 포켓몬으로, 작은 펭귄 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    korean_name: "펭태자",
    types: ["물"],
    id: 394,
    description: "팽도리의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    korean_name: "엠페르트",
    types: ["물", "강철"],
    id: 395,
    description: "펭태자의 최종 진화형으로, 강철 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    korean_name: "찌르꼬",
    types: ["노말", "비행"],
    id: 396,
    description:
      "노말과 비행 타입의 포켓몬으로, 작은 참새 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    korean_name: "찌르버드",
    types: ["노말", "비행"],
    id: 397,
    description: "찌르꼬의 진화형으로, 더 강력한 노말과 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    korean_name: "찌르호크",
    types: ["노말", "비행"],
    id: 398,
    description:
      "찌르버드의 최종 진화형으로, 매우 강력한 노말과 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    korean_name: "비버니",
    types: ["노말"],
    id: 399,
    description: "노말 타입의 포켓몬으로, 작은 비버 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    korean_name: "비버통",
    types: ["노말", "물"],
    id: 400,
    description: "비버니의 진화형으로, 물 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    korean_name: "귀뚤뚜기",
    types: ["벌레"],
    id: 401,
    description: "벌레 타입의 포켓몬으로, 귀뚤뚜기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    korean_name: "귀뚤톡크",
    types: ["벌레"],
    id: 402,
    description: "귀뚤뚜기의 진화형으로, 더 강력한 벌레 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    korean_name: "꼬링크",
    types: ["전기"],
    id: 403,
    description: "전기 타입의 포켓몬으로, 작은 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    korean_name: "럭시오",
    types: ["전기"],
    id: 404,
    description: "꼬링크의 진화형으로, 더 강력한 전기 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    korean_name: "렌트라",
    types: ["전기"],
    id: 405,
    description:
      "럭시오의 최종 진화형으로, 매우 강력한 전기 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    korean_name: "꼬몽울",
    types: ["풀", "독"],
    id: 406,
    description: "풀과 독 타입의 포켓몬으로, 작은 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    korean_name: "로즈레이드",
    types: ["풀", "독"],
    id: 407,
    description: "꼬몽울의 진화형으로, 더 강력한 풀과 독 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    korean_name: "두개도스",
    types: ["바위"],
    id: 408,
    description: "바위 타입의 포켓몬으로, 두개골 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    korean_name: "램펄드",
    types: ["바위"],
    id: 409,
    description: "두개도스의 진화형으로, 더 강력한 바위 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    korean_name: "방패톱스",
    types: ["바위", "강철"],
    id: 410,
    description: "바위와 강철 타입의 포켓몬으로, 방패 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    korean_name: "바리톱스",
    types: ["바위", "강철"],
    id: 411,
    description:
      "방패톱스의 진화형으로, 더 강력한 바위와 강철 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    korean_name: "도롱충이",
    types: ["벌레"],
    id: 412,
    description: "벌레 타입의 포켓몬으로, 도롱뇽 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    korean_name: "도롱마담",
    types: ["벌레", "풀"],
    id: 413,
    description: "도롱충이의 진화형으로, 풀 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    korean_name: "나메일",
    types: ["벌레", "비행"],
    id: 414,
    description: "도롱충이의 다른 진화형으로, 비행 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    korean_name: "세꿀버리",
    types: ["벌레", "비행"],
    id: 415,
    description: "벌레와 비행 타입의 포켓몬으로, 꿀벌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    korean_name: "비퀸",
    types: ["벌레", "비행"],
    id: 416,
    description:
      "세꿀버리의 진화형으로, 더 강력한 벌레와 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    korean_name: "파치리스",
    types: ["전기"],
    id: 417,
    description: "전기 타입의 포켓몬으로, 작은 다람쥐 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    korean_name: "브이젤",
    types: ["물"],
    id: 418,
    description: "물 타입의 포켓몬으로, 작은 족제비 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    korean_name: "플로젤",
    types: ["물"],
    id: 419,
    description: "브이젤의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    korean_name: "체리버",
    types: ["풀"],
    id: 420,
    description: "풀 타입의 포켓몬으로, 체리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    korean_name: "체리꼬",
    types: ["풀"],
    id: 421,
    description: "체리버의 진화형으로, 더 강력한 풀 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    korean_name: "깝질무",
    types: ["물"],
    id: 422,
    description: "물 타입의 포켓몬으로, 해파리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    korean_name: "트리토돈",
    types: ["물", "땅"],
    id: 423,
    description: "깝질무의 진화형으로, 땅 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    korean_name: "겟핸보숭",
    types: ["노말"],
    id: 424,
    description:
      "노말 타입의 포켓몬으로, 긴 꼬리를 가진 원숭이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    korean_name: "흔들풍손",
    types: ["고스트", "비행"],
    id: 425,
    description: "고스트와 비행 타입의 포켓몬으로, 풍선 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    korean_name: "둥실라이드",
    types: ["고스트", "비행"],
    id: 426,
    description:
      "흔들풍손의 진화형으로, 더 강력한 고스트와 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    korean_name: "이어롤",
    types: ["노말"],
    id: 427,
    description: "노말 타입의 포켓몬으로, 작은 토끼 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    korean_name: "이어롭",
    types: ["노말"],
    id: 428,
    description: "이어롤의 진화형으로, 더 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    korean_name: "무우마직",
    types: ["고스트"],
    id: 429,
    description: "고스트 타입의 포켓몬으로, 귀여운 유령 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    korean_name: "돈크로우",
    types: ["악", "비행"],
    id: 430,
    description: "악과 비행 타입의 포켓몬으로, 까마귀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    korean_name: "나옹마",
    types: ["노말"],
    id: 431,
    description: "노말 타입의 포켓몬으로, 작은 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    korean_name: "몬냥이",
    types: ["노말"],
    id: 432,
    description: "나옹마의 진화형으로, 더 강력한 노말 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    korean_name: "랑딸랑",
    types: ["에스퍼"],
    id: 433,
    description: "에스퍼 타입의 포켓몬으로, 방울 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    korean_name: "스컹뿡",
    types: ["독"],
    id: 434,
    description: "독 타입의 포켓몬으로, 스컹크 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    korean_name: "스컹탱크",
    types: ["독"],
    id: 435,
    description: "스컹뿡의 진화형으로, 더 강력한 독 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    korean_name: "동미러",
    types: ["강철", "에스퍼"],
    id: 436,
    description: "강철과 에스퍼 타입의 포켓몬으로, 거울 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    korean_name: "동탁군",
    types: ["강철", "에스퍼"],
    id: 437,
    description:
      "동미러의 진화형으로, 더 강력한 강철과 에스퍼 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    korean_name: "꼬지지",
    types: ["바위"],
    id: 438,
    description: "바위 타입의 포켓몬으로, 작은 나무 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    korean_name: "흉내내",
    types: ["에스퍼", "페어리"],
    id: 439,
    description:
      "에스퍼와 페어리 타입의 포켓몬으로, 인형 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    korean_name: "핑복",
    types: ["노말"],
    id: 440,
    description: "노말 타입의 포켓몬으로, 작은 새 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    korean_name: "페라페",
    types: ["노말", "비행"],
    id: 441,
    description: "노말과 비행 타입의 포켓몬으로, 앵무새 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    korean_name: "화강돌",
    types: ["고스트", "악"],
    id: 442,
    description: "고스트와 악 타입의 포켓몬으로, 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    korean_name: "딥상어동",
    types: ["드래곤", "땅"],
    id: 443,
    description: "드래곤과 땅 타입의 포켓몬으로, 상어 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    korean_name: "한바이트",
    types: ["드래곤", "땅"],
    id: 444,
    description:
      "딥상어동의 진화형으로, 더 강력한 드래곤과 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    korean_name: "한카리아스",
    types: ["드래곤", "땅"],
    id: 445,
    description:
      "한바이트의 최종 진화형으로, 매우 강력한 드래곤과 땅 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    korean_name: "먹고자",
    types: ["노말"],
    id: 446,
    description: "노말 타입의 포켓몬으로, 작은 곰 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    korean_name: "리오르",
    types: ["격투"],
    id: 447,
    description: "격투 타입의 포켓몬으로, 작은 개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    korean_name: "루카리오",
    types: ["격투", "강철"],
    id: 448,
    description: "리오르의 진화형으로, 강철 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    korean_name: "히포포타스",
    types: ["땅"],
    id: 449,
    description: "땅 타입의 포켓몬으로, 하마 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    korean_name: "하마돈",
    types: ["땅"],
    id: 450,
    description: "히포포타스의 진화형으로, 더 강력한 땅 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    korean_name: "스콜피",
    types: ["독", "벌레"],
    id: 451,
    description: "독과 벌레 타입의 포켓몬으로, 전갈 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    korean_name: "드래피온",
    types: ["독", "악"],
    id: 452,
    description: "스콜피의 진화형으로, 악 타입이 추가되었습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    korean_name: "삐딱구리",
    types: ["독", "격투"],
    id: 453,
    description: "독과 격투 타입의 포켓몬으로, 개구리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    korean_name: "독개굴",
    types: ["독", "격투"],
    id: 454,
    description: "삐딱구리의 진화형으로, 더 강력한 독과 격투 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    korean_name: "무스틈니",
    types: ["풀"],
    id: 455,
    description: "풀 타입의 포켓몬으로, 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    korean_name: "형광어",
    types: ["물"],
    id: 456,
    description: "물 타입의 포켓몬으로, 형광 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    korean_name: "네오라이트",
    types: ["물"],
    id: 457,
    description: "형광어의 진화형으로, 더 강력한 물 타입 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    korean_name: "타만타",
    types: ["물", "비행"],
    id: 458,
    description: "물과 비행 타입의 포켓몬으로, 가오리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    korean_name: "눈쓰개",
    types: ["풀", "얼음"],
    id: 459,
    description: "풀과 얼음 타입의 포켓몬으로, 눈사람 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    korean_name: "눈설왕",
    types: ["풀", "얼음"],
    id: 460,
    description: "눈쓰개의 진화형으로, 더 강력한 풀과 얼음 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    korean_name: "포푸니라",
    types: ["악", "얼음"],
    id: 461,
    description: "악과 얼음 타입의 포켓몬으로, 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    korean_name: "자포코일",
    types: ["전기", "강철"],
    id: 462,
    description: "전기와 강철 타입의 포켓몬으로, 자석 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    korean_name: "내룸벨트",
    types: ["노말"],
    id: 463,
    description: "노말 타입의 포켓몬으로, 긴 혀를 가진 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    korean_name: "거대코",
    types: ["땅", "바위"],
    id: 464,
    description: "땅과 바위 타입의 포켓몬으로, 코뿔소 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    korean_name: "덩쿠림보",
    types: ["풀"],
    id: 465,
    description: "풀 타입의 포켓몬으로, 덩굴 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    korean_name: "에레키블",
    types: ["전기"],
    id: 466,
    description: "전기 타입의 포켓몬으로, 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    korean_name: "마그마번",
    types: ["불꽃"],
    id: 467,
    description: "불꽃 타입의 포켓몬으로, 강력한 불꽃 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    korean_name: "토게키스",
    types: ["페어리", "비행"],
    id: 468,
    description:
      "페어리와 비행 타입의 포켓몬으로, 귀여운 모습을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    korean_name: "메가자리",
    types: ["벌레", "비행"],
    id: 469,
    description: "벌레와 비행 타입의 포켓몬으로, 잠자리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    korean_name: "리피아",
    types: ["풀"],
    id: 470,
    description: "풀 타입의 포켓몬으로, 아름다운 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    korean_name: "글레이시아",
    types: ["얼음"],
    id: 471,
    description: "얼음 타입의 포켓몬으로, 아름다운 얼음 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    korean_name: "글라이온",
    types: ["땅", "비행"],
    id: 472,
    description: "땅과 비행 타입의 포켓몬으로, 전갈 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    korean_name: "맘모꾸리",
    types: ["얼음", "땅"],
    id: 473,
    description: "얼음과 땅 타입의 포켓몬으로, 매머드 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    korean_name: "폴리곤Z",
    types: ["노말"],
    id: 474,
    description: "노말 타입의 포켓몬으로, 디지털 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    korean_name: "엘레이드",
    types: ["에스퍼", "격투"],
    id: 475,
    description: "에스퍼와 격투 타입의 포켓몬으로, 기사 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    korean_name: "대코파스",
    types: ["바위", "강철"],
    id: 476,
    description: "바위와 강철 타입의 포켓몬으로, 자석 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    korean_name: "야느도몽",
    types: ["고스트"],
    id: 477,
    description: "고스트 타입의 포켓몬으로, 유령 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    korean_name: "눈여아",
    types: ["얼음", "고스트"],
    id: 478,
    description:
      "얼음과 고스트 타입의 포켓몬으로, 눈 여왕 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    korean_name: "로토무",
    types: ["전기", "고스트"],
    id: 479,
    description:
      "전기와 고스트 타입의 포켓몬으로, 다양한 형태로 변신할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    korean_name: "유크시",
    types: ["에스퍼"],
    id: 480,
    description: "전설의 에스퍼 타입 포켓몬으로, 지식의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    korean_name: "엠라이트",
    types: ["에스퍼"],
    id: 481,
    description: "전설의 에스퍼 타입 포켓몬으로, 감정의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    korean_name: "아그놈",
    types: ["에스퍼"],
    id: 482,
    description: "전설의 에스퍼 타입 포켓몬으로, 의지의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    korean_name: "디아루가",
    types: ["강철", "드래곤"],
    id: 483,
    description:
      "전설의 강철과 드래곤 타입 포켓몬으로, 시간을 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    korean_name: "펄기아",
    types: ["물", "드래곤"],
    id: 484,
    description:
      "전설의 물과 드래곤 타입 포켓몬으로, 공간을 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    korean_name: "히드런",
    types: ["불꽃", "강철"],
    id: 485,
    description:
      "전설의 불꽃과 강철 타입 포켓몬으로, 열을 다스리는 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    korean_name: "레지기가스",
    types: ["노말"],
    id: 486,
    description: "전설의 노말 타입 포켓몬으로, 창조의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    korean_name: "기라티나",
    types: ["고스트", "드래곤"],
    id: 487,
    description:
      "전설의 고스트와 드래곤 타입 포켓몬으로, 반물질의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    korean_name: "크레세리아",
    types: ["에스퍼"],
    id: 488,
    description: "전설의 에스퍼 타입 포켓몬으로, 달의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    korean_name: "피오네",
    types: ["물"],
    id: 489,
    description: "전설의 물 타입 포켓몬으로, 바다의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    korean_name: "마나피",
    types: ["물"],
    id: 490,
    description: "전설의 물 타입 포켓몬으로, 감사의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    korean_name: "다크라이",
    types: ["악"],
    id: 491,
    description: "전설의 악 타입 포켓몬으로, 악몽의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    korean_name: "쉐이미",
    types: ["풀"],
    id: 492,
    description: "전설의 풀 타입 포켓몬으로, 감사의 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    korean_name: "아르세우스",
    types: ["노말"],
    id: 493,
    description: "전설의 노말 타입 포켓몬으로, 모든 타입의 힘을 가집니다.",
  },
];

export default MOCK_DATA;
