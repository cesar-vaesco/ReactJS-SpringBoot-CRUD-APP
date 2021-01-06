import axios from 'axios';

/**
 * Traemos la API con la cual enviamos a la vista la lista de empleados y se guarda en una constante
 */

const EMPLEADO_API_BASE_URL = "http://localhost:8080/api/v1/empleados";

class EmpleadoService {

    getEmpleados() {
        return axios.get(EMPLEADO_API_BASE_URL);
    }
}

export default new EmpleadoService()