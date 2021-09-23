package com.example.technologia.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table ( name="clients" )
public class Clients {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private long id;

	private String fullname;
	private String phone;
	private String email;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
	public Clients(long id, String fullname, String phone, String email) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.phone = phone;
		this.email = email;
	}
	public Clients() {
		super();
	}
	
}
