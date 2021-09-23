package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.entities.Clients; 
import com.example.technologia.repositories.ClientsRepository; 

@RestController()
@RequestMapping("/clients")


public class ClientsController {

	

	@Autowired
	ClientsRepository cr;
	
	// insert
	@PostMapping("/add")
	public Clients addNewDepot(@RequestBody Clients clients) {
		return this.cr.save(clients);
	}
	
	// select
	@GetMapping("/list")
	public List<Clients> findAll(){
		return this.cr.findAll();
	}
	
	
}
