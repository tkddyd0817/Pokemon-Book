import "./App.css";
import Router from "./shared/Router";
import { PokemonProvider } from "../src/Context/PokemonContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <PokemonProvider>
      <Router />
      <ToastContainer />
    </PokemonProvider>
  );
}

export default App;
