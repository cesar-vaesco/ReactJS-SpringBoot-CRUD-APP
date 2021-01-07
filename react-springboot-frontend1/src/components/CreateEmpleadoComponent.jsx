import React, { Component } from "react";
import EmpleadoService from "../services/EmpleadoService";

class CreateEmpleadoComponent extends Component {
  constructor(prop) {
    super(prop);

    /**Inicializa los valores de los atributos del formulario vacios */
    this.state = {
      //paso 2
      id: this.props.match.params.id,
      nombre: "",
      apellido: "",
      email: "",
    };
    this.changeNombreHandler = this.changeNombreHandler.bind(this);
    this.changeApellidoHandler = this.changeApellidoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmpleado = this.saveOrUpdateEmpleado.bind(this);
  }

  //paso 3
  componentDidMount() {
    //paso 4
    if (this.state.id === '_add') {
      return;
    } else {
      EmpleadoService.getEmpleadoById(this.state.id).then((res) => {
        let empleado = res.data;
        this.setState({
          nombre: empleado.nombre,
          apellido: empleado.apellido,
          email: empleado.email,
        });
      });
    }
  }
  /** Método para salvar empleados*/
  saveOrUpdateEmpleado = (e) => {
    e.preventDefault();
    let empleado = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
    };
    console.log("empleado => " + JSON.stringify(empleado));
    // paso 5
    if (this.state.id === '_add') {
      EmpleadoService.createEmpleado(empleado).then((res) => {
        /**URL usada del back para el intercambio de datos */
        this.props.history.push("/empleados");
      });
    } else {
      EmpleadoService.updateEmpleado(empleado, this.state.id).then(res =>{
        this.props.history.push('/empleados');
    });
    }
  
  };

  /**Métodos que permiten asignar valores a los atributos del formulario */
  changeNombreHandler = (event) => {
    this.setState({ nombre: event.target.value });
  };
  changeApellidoHandler = (event) => {
    this.setState({ apellido: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  /**Método que permite redirigir a una nueva vista cuando se cancela el empleado */
  cancel() {
    this.props.history.push("/empleados");
  }

  getTitulo(){
    if (this.state.id === '_add' ) {
      return <h3 className="text-center text-white mt-4 ">Agregar empleado</h3>
    }else{
      return <h3 className="text-center text-white mt-4 ">Editar empleado</h3>
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 mt-4 bg-dark">
          {/*  { <h3 className="text-center text-white mt-4 ">Agregar empleado</h3>} */}
          {
            this.getTitulo()
          }
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
                <button className="btn btn-success" onClick={this.saveOrUpdateEmpleado}>
                  Guardar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmpleadoComponent;
