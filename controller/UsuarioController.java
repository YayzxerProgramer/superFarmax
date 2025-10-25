package com.kteam.superfarmax.controller; // Define el paquete donde se encuentra la clase

import java.util.List; // Importa la clase HttpStatus para manejar códigos de estado HTTP

import org.springframework.http.HttpStatus; // Importa la clase ResponseEntity para construir respuestas HTTP
import org.springframework.http.ResponseEntity; // Importa la anotación para permitir CORS
import org.springframework.web.bind.annotation.CrossOrigin; // Importa la anotación para manejar solicitudes GET
import org.springframework.web.bind.annotation.GetMapping; // Importa la anotación para extraer variables de la URL
import org.springframework.web.bind.annotation.PathVariable; // Importa la anotación para manejar solicitudes POST
import org.springframework.web.bind.annotation.PostMapping; // Importa la anotación para manejar el cuerpo de la solicitud
import org.springframework.web.bind.annotation.RequestBody; // Importa la anotación para definir la ruta base
import org.springframework.web.bind.annotation.RequestMapping; // Importa la anotación para definir un controlador REST
import org.springframework.web.bind.annotation.RestController; // Importa la clase Usuario para usarla en el controlador

import com.kteam.superfarmax.model.Usuario; // Importa el repositorio de Usuario
import com.kteam.superfarmax.repository.UsuarioRepository; // Importa la anotación para validar el cuerpo de la solicitud

import jakarta.validation.Valid; // Importa la clase List para manejar listas de usuarios

@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/api/usuarios") // Define la ruta base para las solicitudes a este controlador
@CrossOrigin(origins = "*") // Permite solicitudes CORS desde cualquier origen
public class UsuarioController { // Define la clase UsuarioController

    private final UsuarioRepository repo; // Declara el repositorio de usuarios

    // Constructor que inyecta el repositorio
    public UsuarioController(UsuarioRepository repo) { 
        this.repo = repo; // Asigna el repositorio a la variable de instancia
    }

    @GetMapping // Maneja solicitudes GET a la ruta base
    public ResponseEntity<List<Usuario>> listarUsuarios() { // Método para listar todos los usuarios
        return ResponseEntity.ok(repo.findAll()); // Devuelve la lista de usuarios con un código de estado 200 OK
    }

    @GetMapping("/{id}") // Maneja solicitudes GET a la ruta base seguida de un ID
    public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Long id) { // Método para obtener un usuario por ID
        return repo.findById(id) // Busca el usuario por ID
            .map(ResponseEntity::ok) // Si se encuentra, devuelve el usuario con un código de estado 200 OK
            .orElse(ResponseEntity.notFound().build()); // Si no se encuentra, devuelve un código de estado 404 Not Found
    }

    @PostMapping // Maneja solicitudes POST a la ruta base
    public ResponseEntity<Usuario> crearUsuario(@Valid @RequestBody Usuario usuario) { // Método para crear un nuevo usuario
        Usuario guardado = repo.save(usuario); // Guarda el usuario en la base de datos
        return ResponseEntity.status(HttpStatus.CREATED).body(guardado); // Devuelve el usuario creado con un código de estado 201 Created
    }
}

//Un endpoint es un punto final de comunicación en una API REST - 
//es básicamente una URL específica donde tu API puede recibir 
//solicitudes y enviar respuestas.
//@PathVariable es una anotación de Spring que 
//se utiliza para extraer valores de las variables en la URL del endpoint.