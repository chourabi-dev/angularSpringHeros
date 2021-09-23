package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.controller.request.Managerrequest;
import com.example.technologia.entities.Depot;
import com.example.technologia.entities.Manager;
import com.example.technologia.repositories.DepotRepository;
import com.example.technologia.repositories.ManagersRepository;

@RestController()
@RequestMapping("/managers")
public class ManagersController {
	
	
	@Autowired
	ManagersRepository managersRepository;
	
	@Autowired
	DepotRepository depotRepository;
	
	

	
	// insert
	@PostMapping("/add")
	public Manager addNew(@RequestBody Managerrequest mr) {
		Manager m = new Manager();
		
		m.setFullname(mr.getFullname());
		m.setEmail(mr.getEmail());
		m.setPhone(mr.getPhone());
		
		m.setDepot(this.depotRepository.findById(mr.getDepot()).get());
		
		
		return this.managersRepository.save(m );
	}
	
	// select
	@GetMapping("/list")
	public List<Manager> findAll(){
		return this.managersRepository.findAll();
	}
}
