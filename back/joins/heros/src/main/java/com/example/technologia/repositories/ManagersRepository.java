package com.example.technologia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.entities.Manager;

public interface ManagersRepository extends JpaRepository<Manager,Long> {

}
