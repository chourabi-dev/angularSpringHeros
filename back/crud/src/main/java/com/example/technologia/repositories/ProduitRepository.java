package com.example.technologia.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entities.Produits;

public interface ProduitRepository extends JpaRepository<Produits,Long> {

	public List<Produits> findByQuantity(int quantity);
}
