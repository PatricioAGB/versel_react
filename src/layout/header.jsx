import React from  'react';
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  
  return(
    <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand">JP</Link>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item" >
              <Link to="formulario" className="nav-link text-danger">Datos Personales</Link>
            </li>
            
            {/*<li className="nav-item" >
              <Link to="/habilidad" className="nav-link text-danger">Habilidades</Link>
            </li>*/}
            
            <li className="nav-item" >
              <Link to="/curriculum" className="nav-link text-danger">CV</Link>
            </li>
            
            <li className="nav-item" >
              <Link to="/evaluacion" className="nav-link text-danger">Evaluar</Link>
            </li>
          </ul>

        </div>

        <button className="navbar-toggler" type="button"      data-toggle="collapse" data-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
    
  </BrowserRouter>  
  );
}

export default Header;