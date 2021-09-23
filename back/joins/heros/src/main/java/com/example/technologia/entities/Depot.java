package com.example.technologia.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table ( name="depots" )
public class Depot {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private long id;

	private String name;
	
	private String address;
	
	
	@OneToMany( mappedBy = "depot", fetch  = FetchType.LAZY )
	private List<Produits> produits;
	
	
	
	

	public List<Produits> getProduits() {
		return produits;
	}

	public void setProduits(List<Produits> produits) {
		this.produits = produits;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Depot(long id, String name, String address) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
	}

	public Depot() {
		super();
	}
	
	
	
	
}
