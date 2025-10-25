package com.kteam.superfarmax.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Tu nombre es obligatorio")
    private String nombre;

    private String descripcion;

    @NotNull(message = "El precio es obligatorio")
    private double precio;

    @NotNull(message = "El lote es obligatorio")
    private String lote;

    @NotNull(message = "La cantidad es obligatoria")
    private int cantidad;

    @NotNull(message = "La URL de la imagen es obligatoria")
    private String imagenUrl;

    @NotNull(message = "El laboratorio o marca es obligatorio")
    private String laboratorio_marca;

    @ManyToOne
    @NotNull(message = "La categoría es obligatoria")
    private Categoria id_categoria;

    public Producto(String nombre, String descripcion, double precio, String lote, int cantidad, String imagenUrl, String laboratorio_marca, Categoria id_categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.lote = lote;
        this.cantidad = cantidad;
        this.imagenUrl = imagenUrl;
        this.laboratorio_marca = laboratorio_marca;
        this.id_categoria = id_categoria;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getLote() {
        return lote;
    }

    public void setLote(String lote) {
        this.lote = lote;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLaboratorio_marca() {
        return laboratorio_marca;
    }

    public void setLaboratorio_marca(String laboratorio_marca) {
        this.laboratorio_marca = laboratorio_marca;
    }

    public Categoria getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(Categoria id_categoria) {
        this.id_categoria = id_categoria;
    }
}
