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
  Link,
} from "react-router-dom";
const image = document.createElement('img')
image.src  = 'https://scontent.fscl21-1.fna.fbcdn.net/v/t1.6435-9/186037485_3891032487629176_9188266185559198408_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5anwDgwVcQQAX8v_Fik&_nc_ht=scontent.fscl21-1.fna&oh=00_AT_YZoVdncuw5geIok6Hqd5DooArzYDlBg8t3uKKRa88ug&oe=6231F766'
image.width=20;
image.height=20;
function App() {
  return ( 
    <>
      <BrowserRouter>
        <div className="container">
          <div className="btn-group">
            {/* Navbar */}
            <a  className="btn p-0" href="https://www.acl.cl/">
            <img width="50" height="50" className="p-0" src="https://scontent.fscl21-1.fna.fbcdn.net/v/t1.6435-9/186037485_3891032487629176_9188266185559198408_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5anwDgwVcQQAX8v_Fik&_nc_ht=scontent.fscl21-1.fna&oh=00_AT_YZoVdncuw5geIok6Hqd5DooArzYDlBg8t3uKKRa88ug&oe=6231F766" alt=""/>
          </a> 
          <Link to="persona" className="btn-primary d-flex align-items-center" >
            <center>Persona</center>
          </Link>
          <Link to="curriculum" className="btn-primary d-flex align-items-center" > 
            <center>Currículum</center>
          </Link>
          <Link to="evaluacion" className="btn-primary d-flex align-items-center" > 
          <center>Evaluación</center>
          </Link>
          <Link to="habilidad" className="btn-primary d-flex align-items-center" > 
          <center>habilidad</center>
          </Link>
          </div>
          {/* Rutas */}
          <Routes>
            <Route path="/" element={<FormsPeople />}/>
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
