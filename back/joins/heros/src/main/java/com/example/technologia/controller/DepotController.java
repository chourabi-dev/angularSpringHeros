package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entities.Depot;
import com.example.technologia.repositories.DepotRepository;

@RestController()
@RequestMapping("/depot")
public class DepotController {

	@Autowired
	DepotRepository dr;
	
	// insert
	@PostMapping("/add")
	public Depot addNewDepot(@RequestBody Depot depot) {
		return this.dr.save(depot);
	}
	
	// select
	@GetMapping("/list")
	public List<Depot> findAll(){
		return this.dr.findAll();
	}
	
}
