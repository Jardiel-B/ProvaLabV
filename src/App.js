import NavBar from "./components/NavBar/Nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header.js";
import { Routes, Route } from "react-router-dom"
import Home from "./paginas/Home/Home.js";
import About from "./paginas/About/About.js";
import Cardapio from "./paginas/Cardapio/cardapio.js";
import Carrinho from "./paginas/Carrinho/Carrinho.js";
import Cupons from "./paginas/Cupons/Cupons.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="sobre" element={ <About/> } />
        <Route path="cupons" element={ <Cupons/> } />
        <Route path="cardapio" element={ <Cardapio/> } />
        <Route path="carrinho" element={ <Carrinho/> } />
      </Routes>
    </div>
  );
}

export default App;
