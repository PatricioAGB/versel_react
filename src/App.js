import React from "react";
import FormsPeople from "./components/FormsPeople"; 
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
          {/* Navbar */}
          <Link to="formulario" className="btn btn-dark">
            formulario
          </Link>
          <Link to="evaluacion" className="btn btn-dark" > 
          formulario
          </Link>
        </div>
        {/* Rutas */}
        <Routes>
          <Route path="/" exact />
          {/* seleccionamo la ruta */}
          <Route path="/formulario" element={<FormsPeople />} />
          <Route path="/evaluacion" element={<EvaluationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
