package com.vaescode.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.vaescode.backend.exception.ResourceNotFoundException;
import com.vaescode.backend.model.Empleado;
import com.vaescode.backend.repository.EmpleadoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmpleadoController {

	@Autowired
	private EmpleadoRepository empleadoRepository;

	// listar todos los empleados
	/* http://localhost:8080/api/v1/empleados */
	@GetMapping("/empleados")
	public List<Empleado> listarEmpleados() {
		return empleadoRepository.findAll();
	}

	// crear empleado rest api
	/* http://localhost:8080/api/v1/empleados */
	/*
	 * { "nombre":"***", "apellido":"***", "email":"****@correo.com" }
	 */
	@PostMapping("/empleados")
	public Empleado crearEmpleado(@RequestBody Empleado empleado) {
		return empleadoRepository.save(empleado);
	}

	// Listar empleado por id rest api
	/**http://localhost:8080/api/v1/empleados/10*/
	@GetMapping("/empleados/{id}")
	public  ResponseEntity<Empleado> listarEmpleadoById(@PathVariable Long id) {
		Empleado empleado = empleadoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empleado no existe con el id: " + id));
		return ResponseEntity.ok(empleado);
	}

}
