package com.example.technologia.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table ( name="sells" )
public class Sells {
	
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private long id;
	
	
	@ManyToOne()
	@JoinColumn( nullable = true, name = "produits_id" )
	private Produits produit;
	
	@ManyToOne()
	@JoinColumn( nullable = true, name = "clients_id" )
	private Clients client; 
	
	
	
	private int quantity;
	
	private LocalDateTime date = LocalDateTime.now();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Produits getProduit() {
		return produit;
	}

	public void setProduit(Produits produit) {
		this.produit = produit;
	}

	public Clients getClient() {
		return client;
	}

	public void setClient(Clients client) {
		this.client = client;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public Sells(long id, Produits produit, Clients client, int quantity, LocalDateTime date) {
		super();
		this.id = id;
		this.produit = produit;
		this.client = client;
		this.quantity = quantity;
		this.date = date;
	}

	public Sells() {
		super();
	}
	
	
	

}
