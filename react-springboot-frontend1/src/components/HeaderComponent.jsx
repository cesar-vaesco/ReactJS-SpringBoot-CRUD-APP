import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                        <div><a href="https://mobile.twitter.com/vargas_dev" className="navbar-brand">Aplicación de gestión de empleados</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;