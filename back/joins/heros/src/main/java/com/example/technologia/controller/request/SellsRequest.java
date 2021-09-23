package com.example.technologia.controller.request;

  

public class SellsRequest {
 
	private Long produit;
	private Long client;  
	private int quantity;
	public Long getProduit() {
		return produit;
	}
	public void setProduit(Long produit) {
		this.produit = produit;
	}
	public Long getClient() {
		return client;
	}
	public void setClient(Long client) {
		this.client = client;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
