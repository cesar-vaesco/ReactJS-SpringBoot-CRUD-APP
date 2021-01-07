import axios from 'axios';

/**
 * Traemos la API con la cual enviamos a la vista la lista de empleados y se guarda en una constante
 */

const EMPLEADO_API_BASE_URL = "http://localhost:8080/api/v1/empleados";

class EmpleadoService {

    getEmpleados() {
        return axios.get(EMPLEADO_API_BASE_URL);
    }

    createEmpleado(empleado) {
        return axios.post(EMPLEADO_API_BASE_URL, empleado);
    }

    getEmpleadoById(empleadoId) {
        return axios.get(EMPLEADO_API_BASE_URL + '/' + empleadoId);
    }

    updateEmpleado(empleado, empleadoId) {
        return axios.put(EMPLEADO_API_BASE_URL + '/' + empleadoId, empleado);
    }

    deleteEmpleado(empleadoId){
        return axios.delete(EMPLEADO_API_BASE_URL + '/' + empleadoId);
    }
}

export default new EmpleadoService()