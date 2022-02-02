import React from "react";
import Curriculum from './components/Curriculum';
import FormsPeople from "./components/FormsPeople";
import Hola from "./components/Hola";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="btn-group">
          <Link to="formulario" className="btn btn-dark" > 
          formulario
          </Link>
          <Link to="hola" className="btn btn-dark" > 
          hola
          </Link>
          <Link to="curriculum" className="btn btn-dark" > 
          Curriculum
          </Link>
        </div>
        <Routes>
          <Route path="/" exact />
          {/* seleccionamo la ruta */}
          <Route path="/formulario" element={<FormsPeople />} />
          {/* seleccionamos la ruta */}
          <Route path="/hola" element={<Hola />} />
          {/* seleccionamos la ruta */}
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
