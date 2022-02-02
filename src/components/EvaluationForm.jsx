import React from 'react';

const EvaluationForm =() =>{
  return(
    <div class="form-body "margin-left="auto" margin-right="auto">
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
          <div class="form-items">
            <h3>Formulario de Evaluación</h3>
            <p>Llenar los campos.</p>
            <form class="requires-validation" novalidate>
            
              <div class="col-md-12">
                <input class="form-control" type="date" name="fecha" required></input>
                <div class="valid-feedback">date field is valid!</div>
                <div class="invalid-feedback">date field cannot be blank!</div>            
              </div>
              
              <div class="col-md-12">
                <input class="form-control" type="text" name="name" placeholder="Nombre" required></input>
                <div class="valid-feedback">name field is valid!</div>
                <div class="invalid-feedback">name field cannot be blank!</div>
               </div>

               <div class="col-md-12">
                <input class="form-control" type="text" name="observations" placeholder="Observaciones" required></input>
                <div class="valid-feedback">observations field is valid!</div>
                <div class="invalid-feedback">observations field cannot be blank!</div>
               </div>

                <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option selected disabled value="">Evaluación</option>
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
                                <div class="valid-feedback">You selected a score!</div>
                                <div class="invalid-feedback">Please select a score!</div>
                           </div>
               

              <div class="form-button mt-3">
                <button id="submit" type="submit" class="btn btn-primary">Guardar</button>
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