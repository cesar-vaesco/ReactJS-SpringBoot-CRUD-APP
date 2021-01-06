import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListaEmpleadosComponent from "./components/ListaEmpleadosComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path="/" component={ListaEmpleadosComponent}></Route>
                        <Route path="/empleados" component={ListaEmpleadosComponent}></Route>
                        <ListaEmpleadosComponent />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
