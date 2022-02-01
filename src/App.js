import React from "react";
<<<<<<< HEAD
import FormsPeople from "./components/FormsPeople";
import Hola from "./components/Hola";
import EvaluationForm from "./components/EvaluationForm";
=======
import FormsPeople from "./components/FormsPeople"; 
>>>>>>> 5657a7eef728b40ddbfc98b83eff7b7c8d9e12a1
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
<<<<<<< HEAD
          {/* seleccionamos la ruta */}
          <Route path="/hola" element={<Hola />} />
          <Route path="/evaluacion" element={<EvaluationForm />} />
=======
>>>>>>> 5657a7eef728b40ddbfc98b83eff7b7c8d9e12a1
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
