package com.kteam.superfarmax.repository; // Define el paquete donde se encuentra la interfaz

import org.springframework.data.jpa.repository.JpaRepository; // Importa la interfaz JpaRepository para operaciones CRUD
import org.springframework.stereotype.Repository; // Importa la anotación para marcar la clase como repositorio

import com.kteam.superfarmax.model.Usuario; // Importa la clase Usuario para usarla en el repositorio

@Repository // Indica que esta interfaz es un repositorio de Spring
public interface UsuarioRepository extends JpaRepository<Usuario, Long> { // Define la interfaz UsuarioRepository que extiende JpaRepository
    // JpaRepository proporciona métodos CRUD automáticamente para la entidad Usuario
}
