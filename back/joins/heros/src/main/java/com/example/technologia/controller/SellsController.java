package com.example.technologia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.controller.request.SellsRequest;
import com.example.technologia.controller.response.SellsResponse;
import com.example.technologia.entities.Produits;
import com.example.technologia.entities.Sells;
import com.example.technologia.repositories.ClientsRepository;
import com.example.technologia.repositories.ProduitRepository;
import com.example.technologia.repositories.SellsRepository;

@RestController()
@RequestMapping("/sells")


public class SellsController {

	
	// repo client , produit, sells
	@Autowired
	ProduitRepository pr;
	
	
	@Autowired
	ClientsRepository cr;
	
	@Autowired
	SellsRepository sellsRepo;
	
	
	
	
	@PostMapping("/add")
	public SellsResponse addNew(@RequestBody SellsRequest sr ) {
		SellsResponse res = new SellsResponse();
		
		// we need to get the product
		Produits p = this.pr.findById(sr.getProduit()).get();
		
		if( sr.getQuantity() <= p .getQuantity() ) {
			// we can
			
			p.setQuantity( (p.getQuantity() - sr.getQuantity()) );
			
			this.pr.save(p);
			
			// sell !!
			Sells s = new Sells();
			
			s.setQuantity(sr.getQuantity());
			s.setProduit(p);
			s.setClient(this.cr.findById(sr.getClient()).get());
			
			this.sellsRepo.save(s);
			
			res.setMessage("Transactions successfull");
			res.setSuccess(true);
			
			
			
		}else {
			// we can't !!
			
			res.setMessage("we are out of stock ");
			res.setSuccess(false);
		}
		
		
		
		return res;
		
		
	}
}
