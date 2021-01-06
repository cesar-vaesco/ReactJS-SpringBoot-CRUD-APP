import React, { Component } from "react";
import EmpleadoService from "../services/EmpleadoService";

class ListaEmpleadosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: [],
    }
    this.addEmpleado = this.addEmpleado.bind(this); 
  }

  componentDidMount(){
    EmpleadoService.getEmpleados().then((res) => {
        this.setState({ empleados: res.data});
    });
  }

  addEmpleado(){
    this.props.history.push('/add-empleado');
  }
  render() {
    return (
      <div>
        <h2 className="text-center mb-3">Lista de empleados</h2>
        <div className="row">
          <button className="btn btn-primary mb-5" onClick={this.addEmpleado}>Agregar empleado</button>
        </div>
        <div className="row">
          <table className="table table-hover table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Nombre del empleado</th>
                <th>Apellido del empleado</th>
                <th>Correo del empleado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.empleados.map((empleado) => (
                <tr key ={empleado.id}>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaEmpleadosComponent;
