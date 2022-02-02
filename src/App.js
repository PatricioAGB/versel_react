import React from "react";
//components
import Curriculum from './components/Curriculum';
import FormsPeople from "./components/FormsPeople";
import EvaluationForm from "./components/EvaluationForm";
import SkillForm from "./components/SkillForm";

//routes
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="btn-group">
            {/* Navbar */}
          <Link to="persona" className="btn btn-dark">
            Persona
          </Link>
          <Link to="curriculum" className="btn btn-dark" > 
            Curriculum
          </Link>
          <Link to="evaluacion" className="btn btn-dark" > 
            Evaluacion
          </Link>
          <Link to="habilidad" className="btn btn-dark" > 
            Habilidades
          </Link>
          </div>
          {/* Rutas */}
          <Routes>
            <Route path="/" exact />
            <Route path="/persona" element={<FormsPeople />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/evaluacion" element={<EvaluationForm />} />
            <Route path="/habilidad" element={<SkillForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
