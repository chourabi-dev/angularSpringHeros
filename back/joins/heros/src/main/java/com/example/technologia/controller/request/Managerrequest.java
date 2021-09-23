package com.example.technologia.controller.request;

 

import com.example.technologia.entities.Depot;

public class Managerrequest {

	private String fullname;
	private String phone;
	private String email; 
	private Long depot;
	
	
	
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getDepot() {
		return depot;
	}
	public void setDepot(Long depot) {
		this.depot = depot;
	}
	
	
	
}
