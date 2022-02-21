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

<<<<<<< HEAD
          if(!valores.correo){
            errores.correo='Porfavor ingresa correo';
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo='El correo solo puede tener letras, numeros, puntos , guiones y gion bajo.';
          }
          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
            // resetForm();
            function uuidv4() {
              return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace("/[018]/g", c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
            }
            var uuid = null;
            var ws = null;             
                    ws = new WebSocket("ws://localhost:9998/application/api/ws/v1/add");

                   
                    ws.onclose = function(evt) {
                      // websocket is closed.
                      alert("Connection is closed...");
                    };
                    ws.onopen = function(evt) {
                      alert("Connection is Open...");
                            if(uuid == null) {
                                    uuid = uuidv4();
                                    ws.send(JSON.stringify(valores));
                                    registWSChannel();
                            } else { 
                                    sendMessageThroughWS()
                            }
                    };
                    function sendMessageThroughWS() {
                      var message = JSON.stringify(valores)
                      if(message != "")
                              ws.send('{"message":"'+message+'"}');
                    }
            function registWSChannel() {
                    console.log(uuid)
                    ws.send('{"token":"'+uuid+'"}');
            }
            console.log(valores); 
             cambiarFormularioEnviado(true);
             setTimeout(()=> cambiarFormularioEnviado(false),5000);
      }}>
        {({values,errors , touched, handleChange, handleBlur}) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder="John Doe" 
                />
                <ErrorMessage name="nombre" component={()=>(<div className='error'>{errors.nombre}</div>)}/>
            </div>
            <div>
              <label htmlFor="direccion">Direccion</label>
              <Field 
                type="text" 
                id="direccion" 
                name="direccion" 
                placeholder="San Manrtin de los Andes 1357" 
                />
                <ErrorMessage name="direccion" component={()=>(<div className='error'>{errors.direccion}</div>)}/>
            </div>
            <div>
              <label htmlFor="fecha">Fecha</label>
              <Field 
                type="date" 
                id="fecha" 
                name="fecha" 
                placeholder="fecha de nacimiento" 
                />
                <ErrorMessage name="fecha" component={()=>(<div className='error'>{errors.fecha}</div>)}/>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field 
                type="text" 
                id="correo" 
                name="correo" 
                placeholder="JohnDoe@gmail.com" 
                />
                <ErrorMessage name="correo" component={()=>(<div className='error'>{errors.correo}</div>)}/>
=======

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
>>>>>>> 6a1656712e08397cc202dd4073c5e063d5e2cb86
            </div>
         </div>

         <Toaster />
      </div>
   );
}

export default Curriculum;