package com.example.technologia.controller.request;

public class ProduitRequest {

	private String name;
	private double price;
	private int quantity;
	private Long depot;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Long getDepot() {
		return depot;
	}
	public void setDepot(Long depot) {
		this.depot = depot;
	}
	
	
	
}
