import { combineReducers } from "redux";
import pokemonTeamReducer from "../redux/PokemonTeamSlice";
import storage from "redux-persist/lib/storage"; // localStorage를 위한 storage 엔진
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
const rootReducer = combineReducers({
  pokemonTeam: pokemonTeamReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemonTeam"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const pokemonStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PAUSE, FLUSH, PURGE, PERSIST, REGISTER, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(pokemonStore);
