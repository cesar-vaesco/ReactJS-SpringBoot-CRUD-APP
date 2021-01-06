package com.vaescode.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vaescode.backend.model.Empleado;
import com.vaescode.backend.repository.EmpleadoRepository;

@RestController
@RequestMapping("/api/v1/")
public class EmpleadoController {
	
	@Autowired
	private EmpleadoRepository empleadoRepository;
	
	//listar todos los empleados
	@GetMapping("/empleados")
	public List<Empleado> listarEmpleados(){
		return empleadoRepository.findAll();
	}

}
