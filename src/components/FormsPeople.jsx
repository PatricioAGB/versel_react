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
const handleInputChange = (event) => {
  setDatos({
    ...Datos,
    [event.target.name]: event.target.value,
  });
};
const enviarFormulario = (event) =>{
  event.preventDefault();
console.log(Datos.name +' '+ Datos.lastname +' '+Datos.datebirth+' '+Datos.address+' '+Datos.Pathfoto+' '+Datos.PathCv)
}
  return (
    <Fragment>
      <h1>Formulario</h1>
      {/* Se crea el formulario */}
      <form className="row"  onSubmit={enviarFormulario}>
        {/* Ingresar el nombre */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar Nombre"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        {/* Ingresar el Apellido */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar Apellido"
            className="form-control"
            type="text"
            name="lastname"
            onChange={handleInputChange}
          ></input>
        </div>
        {/* Boton */}
        <div className="col-md-1">
          <button className="btn btn-primary">enviar</button>
        </div>
        {/* Ingresar fecha de nacimiento */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar fecha de nacimiento"
            className="form-control"
            type="date"
            name="datebirth"
            onChange={handleInputChange}
          ></input>
        </div>
        {/* Ingresar Dirección */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar Dirección"
            className="form-control"
            type="text"
            name="address"
            onChange={handleInputChange}
          ></input>
        </div>
        {/* Ingresar Foto */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar foto"
            className="form-control"
            type="text"
            name="Pathfoto"
            onChange={handleInputChange}
          ></input>
        </div>
        {/* Ingresar Curriculum Vitae */}
        <div className="col-md-5">
          <input
            placeholder="Ingresar Curriculum Vitae"
            className="form-control"
            type="text"
            name="PathCv"
            onChange={handleInputChange}
          ></input>
        </div>
 
      </form>
    </Fragment>
  );
}
export default FormsPeople;