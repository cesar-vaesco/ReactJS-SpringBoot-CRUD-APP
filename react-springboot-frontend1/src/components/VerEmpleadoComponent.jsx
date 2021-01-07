import React, { Component } from "react";
import EmpleadoService from "../services/EmpleadoService";

class VerEmpleadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      empleado: {},
    };
  }
  componentDidMount() {
    EmpleadoService.getEmpleadoById(this.state.id).then((res) => {
      this.setState({ empleado: res.data });
    });
  }
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3 offset-md-3 mt-4 bg-dark border border-info">
          <h3 className="card-title text-center text-white m-4">
            Ver Detalles del Empleado
          </h3>
          <div className="card-body text-white ">
            <div className="row">
              <label className="font-weight-bold">ID del empleado: </label>
              <div className="font-italic ml-2">{this.state.empleado.id} </div>
            </div>
            <div className="row">
              <label  className="font-weight-bold">Nombre del empleado: </label>
              <div className="font-italic ml-2"> {this.state.empleado.nombre} </div>
            </div>
            <div className="row">
              <label  className="font-weight-bold">Apellido del empleado: </label>
              <div className="font-italic ml-2"> {this.state.empleado.apellido} </div>
            </div>
            <div className="row">
              <label  className="font-weight-bold">Correo del empleado: </label>
              <div className="font-italic ml-2"> {this.state.empleado.email} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerEmpleadoComponent;
