package com.kteam.superfarmax.model; // Define el paquete donde se encuentra la clase

import com.fasterxml.jackson.annotation.JsonProperty; // Importa la anotación para manejar propiedades JSON

import jakarta.persistence.Entity; // Importa la anotación para definir una entidad JPA
import jakarta.persistence.GeneratedValue; // Importa la anotación para la generación automática de valores
import jakarta.persistence.GenerationType; // Importa la estrategia de generación de valores
import jakarta.persistence.Id; // Importa la anotación para definir el ID de la entidad
import jakarta.validation.constraints.NotNull; // Importa la anotación para validar que un campo no sea nulo

@Entity // Indica que esta clase es una entidad JPA
public class Usuario { // Define la clase Usuario

    @Id // Indica que este campo es la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Indica que el valor se generará automáticamente
    private Long id; // Declara el campo id de tipo Long

    @NotNull(message = "Tu nombre es obligatorio") // Valida que el nombre no sea nulo
    private String nombre; // Declara el campo nombre de tipo String

    @NotNull(message = "Tu apellido es obligatorio") // Valida que el apellido no sea nulo
    private String apellido; // Declara el campo apellido de tipo String

    @NotNull(message = "Tu telefono es obligatorio") // Valida que el teléfono no sea nulo
    private String telefono; // Declara el campo teléfono de tipo String

    @NotNull(message = "Tu correo es obligatorio") // Valida que el correo no sea nulo
    private String correo; // Declara el campo correo de tipo String

    @NotNull(message = "Tu contraseña es obligatoria") // Valida que la contraseña no sea nula
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Indica que la contraseña no se debe devolver en JSON
    private String contrasena; // Declara el campo contraseña de tipo String

    // Constructor requerido por JPA
    public Usuario() {} // Constructor vacío para JPA

    // Constructor con parámetros para crear un nuevo usuario
    public Usuario(String nombre, String apellido, String telefono, String correo, String contrasena) {
        this.nombre = nombre; // Asigna el nombre
        this.apellido = apellido; // Asigna el apellido
        this.telefono = telefono; // Asigna el teléfono
        this.correo = correo; // Asigna el correo
        this.contrasena = contrasena; // Asigna la contraseña
    }

    public Long getId() { // Método getter para el id
        return id; // Devuelve el id
    }

    public void setId(Long id) { // Método setter para el id
        this.id = id; // Asigna el id
    }

    public String getNombre() { // Método getter para el nombre
        return nombre; // Devuelve el nombre
    }

    public void setNombre(String nombre) { // Método setter para el nombre
        this.nombre = nombre; // Asigna el nombre
    }

    public String getApellido() { // Método getter para el apellido
        return apellido; // Devuelve el apellido
    }

    public void setApellido(String apellido) { // Método setter para el apellido
        this.apellido = apellido; // Asigna el apellido
    }

    public String getTelefono() { // Método getter para el teléfono
        return telefono; // Devuelve el teléfono
    }

    public void setTelefono(String telefono) { // Método setter para el teléfono
        this.telefono = telefono; // Asigna el teléfono
    }

    public String getCorreo() { // Método getter para el correo
        return correo; // Devuelve el correo
    }

    public void setCorreo(String correo) { // Método setter para el correo
        this.correo = correo; // Asigna el correo
    }

    public String getContrasena() { // Método getter para la contraseña
        return contrasena; // Devuelve la contraseña
    }

    public void setContrasena(String contrasena) { // Método setter para la contraseña
        this.contrasena = contrasena; // Asigna la contraseña
    }
}

//Sí. Hay dos puntos importantes para que JPA/Spring funcione correctamente y puedas obtener el id:
//JPA necesita un constructor sin argumentos (default) para crear la entidad al leerla/escribirla.
//Cuando guardes, usa el objeto devuelto por repository.save(...) — ese objeto ya contiene el id generado.