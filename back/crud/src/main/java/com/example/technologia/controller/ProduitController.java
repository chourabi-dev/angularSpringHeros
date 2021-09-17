package com.example.technologia.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.controller.response.ResponseJson;
import com.example.technologia.entities.Produits;
import com.example.technologia.repositories.ProduitRepository;

@RestController()
@RequestMapping("/produit")
public class ProduitController {

	
	
	// relation between the controller and the JPA repository
	
	@Autowired
	ProduitRepository pr;
	
	
	// INSERT
	@PostMapping("/add")
	public ResponseJson addProduct(@RequestBody Produits p) {
		ResponseJson res = new ResponseJson();
		
		this.pr.save(p);
		res.setMessage("produit added successfully !");

		return res;
		
	}
	
	// SELECT
	@GetMapping("/list")
	public List<Produits> getAll(){
		return this.pr.findAll();
	}
	
	// SLECT * ... WHERE ID = ?
	@GetMapping("/details/{id}")
	public Produits findById( @PathVariable long id ) {
		try {
			return this.pr.findById(id).get();
		}catch(NoSuchElementException e) {
			return new Produits();
		}
		
	}
	
	// SELECT WHERE quantity = ?
	
	@GetMapping("/find-by-quantity/{quantity}")
	public List<Produits> findByQuantity( @PathVariable int quantity ) {
		return this.pr.findByQuantity(quantity);
		
	}
	
	
	// update 
	
	@PostMapping("/update")
	public ResponseJson update( @RequestBody Produits p ) {
		ResponseJson res = new ResponseJson();
		
		// get the old product
		Produits old = this.pr.findById(p.getId()).get();
		
		old.setName(p.getName());
		old.setPrice(p.getPrice());
		old.setQuantity(p.getQuantity());
		
		this.pr.save(old);
		
		res.setMessage("produit updated successfully !");

		return res;
		
	}
	
	
	
	// delete
	@DeleteMapping("/delete/{id}")
	public ResponseJson deleteById( @PathVariable long id ) {
		ResponseJson res = new ResponseJson();
		
		try {
			Produits old = this.pr.findById(id).get();
			
			this.pr.delete(old);
			
			res.setMessage("produit deleted successfully");
			
			return res;
		}catch(NoSuchElementException e) {
			res.setMessage("404 not found");
			return res;
		}
		
	}
	
	
	
	
}
