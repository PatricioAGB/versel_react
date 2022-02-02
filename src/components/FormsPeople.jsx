import React,{Fragment,useState} from 'react';


 //creando el formulario
const FormsPeople = () => {
const [Datos, setDatos] = useState({
  name:'',
  lastname:'',
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
console.log(Datos.name +' '+ Datos.lastname +' '+Datos.datebirth+' '+Datos.address+' '+Datos.Pathfoto+' '+Datos.PathCv)
}
  return (
    <Fragment>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Formulario de Personas</h3>
                <p>Ingrese sus datos</p>
                {/* Se crea el formulario */}
                <form
                  className="requires-validation"
                  onSubmit={enviarFormulario}
                >
                  {/* Ingresar el nombre */}
                  <div className="col-md-12">
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
                  {/* Ingresar el Apellido */}
                  <div className="col-md-12">
                    <input
                      placeholder="Ingresar Apellido"
                      className="form-control"
                      type="text"
                      name="lastname"
                      pattern='[a-z A-Z]+'
                      onChange={handleInputChange}
                      minLength={4} maxLength={20}
                      requiered
                    ></input>
                    <br />
                  </div>
                  {/* Ingresar fecha de nacimiento */}
                  <div className="col-md-12">
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
                    <input
                      placeholder="Ingresar foto"
                      className="form-control"
                      type="text"
                      name="Pathfoto"
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                  {/* Ingresar Curriculum Vitae */}
                  <div className="col-md-12">
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
                  <div className="col-md-1">
                    <button className="btn btn-primary">enviar</button>
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