package com.example.technologia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.controller.request.SigninRequest;
import com.example.technologia.controller.response.ResponseJson;

@RestController()
@RequestMapping("/app")

public class AppController {

	// Demander result server GET
	
	@GetMapping("/somme")
	public int somme(@RequestParam String x,@RequestParam String y) {
		System.out.println(x);
		System.out.println(y);
		Integer xvalue = Integer.parseInt(x);
		Integer yvalue = Integer.parseInt(y);
		
		return (xvalue + yvalue);
	}
	
	@PostMapping("/signin")
	public ResponseJson signin(@RequestBody SigninRequest request) {
		System.out.println(request.getUsername());
		System.out.println(request.getPassword());
		
		// traitment..
		
		ResponseJson res = new ResponseJson();
		
		res.setMessage("welcome to our app");
		
		return res;
		
	}
	
}
