import React, { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

// RED ACL #de2c58

const Curriculum = () => {
   //creando el formulario
   const [Datos, setDatos] = useState({
    collection: 'curriculum',
    name: '',
    d_number: '',
    date: '',
    address: '',
    email: '',
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
      console.log(Datos.name + ' ' + Datos.d_number+ ' ' + Datos.date + ' ' + Datos.address + ' ' + Datos.email)
      fetch('http://localhost:9100/application/api/v1/add',{
         method : 'Post',
         headers:{'Conten-Type': 'application/json'},
         mode: 'no-cors',
         body: JSON.stringify(Datos)
      })
      .then(res => {
         toast('Registro con exito');
         return console.log( res );
      })

   }


   return (
      <div className="form-body " margin-left="auto" margin-right="auto">
         <div className="row">
            <div className="form-holder">
               <div className="form-content">
                  <div className="form-items">
                     <h3>Currículum</h3>
                     <p>Llenar los campos.</p>
                     <form className="requires-validation" onSubmit={sendForm} noValidate>

                        <div className="col-md-12">
                           <label htmlFor="name">Nombre:</label>
                           <input className="form-control" type="text" name="name" placeholder="Ingrese nombre y apellidos" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">name field is valid!</div>
                           <div className="invalid-feedback">name field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="d_number">Número de Documento:</label>
                           <input className="form-control" type="text" name="d_number" placeholder="Ingrese número de documento" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">d_number field is valid!</div>
                           <div className="invalid-feedback">d_number field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="date">Fecha de nacimiento:</label>
                           <input className="form-control" type="date" name="date" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">date field is valid!</div>
                           <div className="invalid-feedback">date field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="address">Dirección:</label>
                           <input className="form-control" type="text" name="address" placeholder="Ingrese País Y Ciudad" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">address field is valid!</div>
                           <div className="invalid-feedback">address field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                           <label htmlFor="email">Corrreo Electrónico:</label>
                           <input className="form-control" type="text" name="email" placeholder="usuario@ejemplo.xx" onChange={handleInputChange} required></input>
                           <div className="valid-feedback">email field is valid!</div>
                           <div className="invalid-feedback">email field cannot be blank!</div>
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

         <Toaster />
      </div>
   );
}

export default Curriculum;