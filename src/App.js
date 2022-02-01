import React from "react";
import FormsPeople from "./components/FormsPeople";
import Hola from "./components/Hola";
import EvaluationForm from "./components/EvaluationForm";
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
          <Link to="evaluacion" className="btn btn-dark" > 
          formulario
          </Link>
        </div>
        <Routes>
          <Route path="/" exact />
          {/* seleccionamo la ruta */}
          <Route path="/formulario" element={<FormsPeople />} />
          {/* seleccionamos la ruta */}
          <Route path="/hola" element={<Hola />} />
          <Route path="/evaluacion" element={<EvaluationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
