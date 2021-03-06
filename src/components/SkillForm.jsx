import React, { Fragment, useState } from 'react';

const SkillForm = () => {
   //creando el formulario
   const [Datos, setDatos] = useState({
      name: '',
      description: '',
      level: ''
   })
   // se guardan los datos 
   const handleInputChange = (event) => {
      setDatos({
         ...Datos,
         [event.target.name]: event.target.value,
      });
   };
   // Se muestra los datos en consola 
   const sendForm = (event) => {
      event.preventDefault();
      console.log(Datos.name + ' ' + Datos.description + ' ' + Datos.level)
   }


   return (
      <div className="form-body " margin-left="auto" margin-right="auto">
         <div className="row">
            <div className="form-holder">
               <div className="form-content">
                  <div className="form-items">
                     <h3>Formulario de Habilidades</h3>
                     <p>Llenar los campos.</p>
                     <form className="requires-validation" onSubmit={sendForm} noValidate>

                        <div className="col-md-12">
                           <label htmlFor="name">Nombre:</label>
                           <input className="form-control" type="text" name="name" placeholder="nombre" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">date field is valid!</div>
                           <div className="invalid-feedback">date field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="description">Descripción:</label>
                           <input className="form-control" type="text" name="description" placeholder="descripcion" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">name field is valid!</div>
                           <div className="invalid-feedback">name field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="level">Nivel de Conocimiento:</label>
                           <input className="form-control" type="range" id="level" name="level" min="0" max="3" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">observations field is valid!</div>
                           <div className="invalid-feedback">observations field cannot be blank!</div>
                        </div>

                        <div className="form-button mt-3">
                           <button
                              id="submit"
                              type="submit"
                              className="btn btn-primary"
                           >Guardar</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SkillForm;