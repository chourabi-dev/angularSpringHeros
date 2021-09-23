package com.example.technologia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entities.Clients;

public interface ClientsRepository extends JpaRepository<Clients,Long> {

}
