import React, { Component } from 'react';

class VerEmpleadoComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id
        }
    }
    render() {
        return (
            
       <div>
           <h1>Ver empleados</h1>
       </div>
        );
    }
}

export default VerEmpleadoComponent;