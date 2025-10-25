package com.kteam.superfarmax.Data;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import com.kteam.superfarmax.model.Categoria;
import com.kteam.superfarmax.model.Producto;
import com.kteam.superfarmax.repository.CategoriaRepository;
import com.kteam.superfarmax.repository.ProductoRepository;

@Configuration
public class DataProductos {

    @Bean
    @Order(2)
    CommandLineRunner dataProductos(ProductoRepository producto, CategoriaRepository categoria) {
        return (String[] args) -> {
            try {
                if (producto.count() == 0) {
                    List<Producto> productos = new ArrayList<>();
                    Categoria medicamentos = categoria.findByNombre("Medicamentos");

                    productos.add(new Producto("Ener Zinc Sulfato De Zinc 120ML", "", 2000, "L123", 6, null, "Ener", medicamentos));
                    producto.saveAll(productos);
                    System.out.println("✅ Productos iniciales agregados.");
                } else {
                    System.out.println("ℹ️ Productos ya existen en la BD, no se cargaron nuevos.");
                }
            } catch (Exception e) {
                System.err.println("❌ Error cargando productos iniciales:");
                e.printStackTrace();
            }
        };
    }
}
