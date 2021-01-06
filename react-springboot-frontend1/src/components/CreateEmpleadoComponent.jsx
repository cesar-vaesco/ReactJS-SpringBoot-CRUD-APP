import React, { Component } from "react";

class CreateEmpleadoComponent extends Component {
  constructor(prop) {
    super(prop);

    /**Inicializa los valores de los atributos del formulario vacios */
    this.state = {
        nombre:'',
        apellido:'',
        email:''
    };
    this.changeNombreHandler = this.changeNombreHandler.bind(this);
    this.changeApellidoHandler = this.changeApellidoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmpleado = this.saveEmpleado.bind(this);
  }

  /** Método para salvar empleados*/
  saveEmpleado =(e)=>{
      e.preventDefault();
      let empleado = {nombre: this.state.nombre, apellido: this.state.apellido, email: this.state.email};
      console.log('empleado => ' + JSON.stringify(empleado));
  } 
  /**Métodos que permiten asignar valores a los atributos del formulario */
  changeNombreHandler=(event) =>{
    this.setState({nombre:event.target.value});
  }
  changeApellidoHandler=(event) =>{
    this.setState({apellido:event.target.value});
  }
  changeEmailHandler=(event) =>{
    this.setState({email:event.target.value});
  }

  cancel(){
      this.props.history.push('/empleados');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 mt-4 bg-dark">
            <h3 className="text-center text-white mt-4 ">Agregar empleado</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="text-white">Nombre:</label>
                  <input
                    placeholder="Nombre"
                    name="nombre"
                    className="form-control"
                    value={this.state.nombre}
                    onChange={this.changeNombreHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="text-white">Apellido:</label>
                  <input
                    placeholder="Apellido"
                    name="apellido"
                    className="form-control"
                    value={this.state.apellido}
                    onChange={this.changeApellidoHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="text-white">Correo:</label>
                  <input
                    placeholder="Correo electronico"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={this.saveEmpleado}>Guardar</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmpleadoComponent;
