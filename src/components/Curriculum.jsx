import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Curriculum = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik 
        initialValues={{
          nombre: '',
          direccion: '',
          correo: '',
          fecha: '',
         }}
        validate={(valores)=> {
          let errores={};
          if(!valores.nombre){
            errores.nombre='Porfavor ingresa Nombre';
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre='El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo.';
          }
          if(!valores.direccion){
            errores.direccion='Porfavor ingresa direccion';
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.direccion)) {
            errores.direccion='El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo.';
          }


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
            </div>
            <button type="submit"> Enviar</button>
            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
}
export default Curriculum;