import React,{Fragment,useState} from 'react';


 //creando el formulario
const FormsPeople = () => {
const [Datos, setDatos] = useState({
  collection: 'people',
  name:'',
  lastnames:'',
  d_number:'',
  datebirth:'',
  address:'',
  Pathfoto:'',
  PathCv:''

})
// se guardan los datos 
const handleInputChange = (event) => {
  setDatos({
    ...Datos,
    [event.target.name]: event.target.value,
  });
};
// Se muestra los datos en consola 
const enviarFormulario = (event) =>{
  event.preventDefault();
  fetch('http://localhost:9100/application/api/v1/add',{
    method : 'Post',
    headers:{'Conten-Type': 'application/json'},
    mode: 'no-cors',
    body: JSON.stringify(Datos)
 })
}
  return (
    <Fragment>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Formulario de Personas</h3>
                <p>Llenar los campos.</p>
                {/* Se crea el formulario */}
                <form
                  className="requires-validation"
                  onSubmit={enviarFormulario}
                >
                  {/* Ingresar el nombre */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Nombre:
                  </label>
                    <input
                      placeholder="Ingresar Nombre"
                      className="form-control"
                      type="text"
                      name="name"
                      pattern='[a-z A-Z]+'
                      onChange={handleInputChange}
                      minLength={4} maxLength={20}
                      required
                    />
                  
                  </div>
                  {/* Ingresar el Apellidos */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Apellidos:
                  </label>
                    <input
                      placeholder="Ingresar Apellidos"
                      className="form-control"
                      type="text"
                      name="lastnames"
                      pattern='[a-z A-Z]+'
                      onChange={handleInputChange}
                      minLength={4} maxLength={20}
                      requiered
                    ></input>
                    <br />
                  </div>
                  <div className="col-md-12">
                  <label htmlFor="d_number">Número de Documento:</label>
                  <input className="form-control" type="text" name="d_number" placeholder="Ingrese número de documento" onChange={handleInputChange} required></input>
                  <div className="valid-feedback">d_number field is valid!</div>
                  <div className="invalid-feedback">d_number field cannot be blank!</div>
                </div>
                  {/* Ingresar fecha de nacimiento */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Fecha de Nacimiento:
                  </label>
                    <input
                      placeholder="Ingresar fecha de nacimiento"
                      className="form-control"
                      type="date"
                      name="datebirth"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  {/* Ingresar Dirección */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Dirección:
                  </label>
                    <input
                      placeholder="Ingresar Dirección"
                      className="form-control"
                      type="text"
                      name="address"
                      onChange={handleInputChange}
                      minLength={4} maxLength={30}
                      required
                    ></input>
                  </div>
                  {/* Ingresar Foto */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Enlace de Imágen:
                  </label>
                    <input
                      placeholder="Ingresar enlace de imágen"
                      className="form-control"
                      type="text"
                      name="Pathfoto"
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                  {/* Ingresar Curriculum Vitae */}
                  <div className="col-md-12">
                  <label htmlFor="level">
                    Currículum Vitae:
                  </label>
                    <input
                      placeholder="Ingresar Curriculum Vitae"
                      className="form-control"
                      type="text"
                      name="PathCv"
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                  {/* Boton */}
                  <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">Guardar</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default FormsPeople;