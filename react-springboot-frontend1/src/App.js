import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListaEmpleadosComponent from "./components/ListaEmpleadosComponent";
import CreateEmpleadoComponent from './components/CreateEmpleadoComponent';
import VerEmpleadoComponent from './components/VerEmpleadoComponent';
//import UpdateEmpleadoComponent from './components/UpdateEmpleadoComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListaEmpleadosComponent}></Route>
                        <Route path="/empleados" component={ListaEmpleadosComponent}></Route>
                        <Route path="/add-empleado/:id" component={CreateEmpleadoComponent}></Route>
                        <Route path="/ver-empleado/:id" component={VerEmpleadoComponent}></Route>
                 </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
