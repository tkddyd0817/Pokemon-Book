import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: [],
};

const pokemonTeamSlice = createSlice({
  name: "pokemonTeam",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const addId = action.payload;
      state.team.push(addId);
    },

    deletePokemon: (state, action) => {
      const deleteId = action.payload;
      state.team = state.team.filter((p) => p.id !== deleteId.id);
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonTeamSlice.actions;
export default pokemonTeamSlice.reducer;
