import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



const EvaluationForm = () => {
  const [Datos, setDatos] = useState({
    collection: 'evaluation',
    date: '',
    name: '',
    observations: '',
    score: '',

  })
  const handleInputChange = (event) => {
    setDatos({
      ...Datos,
      [event.target.name]: event.target.value,
    });
  };
  // Se muestra los datos en consola 
  const sendForm = (event) => {
    event.preventDefault();
    console.log(Datos.date + ' ' + Datos.name + ' ' + Datos.observations + ' ' + Datos.score)
    fetch('http://localhost:9400/application/api/v1/add', {
      method: 'Post',
      headers: { 'Conten-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify(Datos)
    })
      .then(res => {
        toast('Registro con exito');
        return console.log(res);
      })
  }
  return (
    <div className="form-body " margin-left="auto" margin-right="auto">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Formulario de Evaluación</h3>
              <p>Llenar los campos.</p>
              <form className="requires-validation" onSubmit={sendForm} noValidate>

                <div className="col-md-12">
                  <input className="form-control" type="date" name="date" onChange={handleInputChange} required></input>
                  <div className="valid-feedback">date field is valid!</div>
                  <div className="invalid-feedback">date field cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="text" name="name" onChange={handleInputChange} placeholder="Nombre" required></input>
                  <div className="valid-feedback">name field is valid!</div>
                  <div className="invalid-feedback">name field cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="text" name="observations" onChange={handleInputChange} placeholder="Observaciones" required></input>
                  <div className="valid-feedback">observations field is valid!</div>
                  <div className="invalid-feedback">observations field cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <select className="form-select mt-3" name="score" onChange={handleInputChange} required>
                    <option disabled defaultValue="">Evaluación</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                  </select>
                  <div className="valid-feedback">You selected a score!</div>
                  <div className="invalid-feedback">Please select a score!</div>
                </div>


                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvaluationForm;