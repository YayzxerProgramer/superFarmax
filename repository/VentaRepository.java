package com.kteam.superfarmax.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kteam.superfarmax.model.Venta;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {

}
