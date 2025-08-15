import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../PokemonCard/PokemonDetail";
import { Provider } from "react-redux";
import { persistor, pokemonStore } from "../redux/PokemonStore";
import { PersistGate } from "redux-persist/integration/react";

function Router() {
  return (
    <Provider store={pokemonStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Dex />} />
            <Route path="/" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Router;
