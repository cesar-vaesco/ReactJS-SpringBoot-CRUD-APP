import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListaEmpleadosComponent from "./components/ListaEmpleadosComponent";

function App() {
    return (
        <div>
            <HeaderComponent />
            <div className="container">
                <ListaEmpleadosComponent />
            </div>
                <FooterComponent />
        </div>
    );
}

export default App;
