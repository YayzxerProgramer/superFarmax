package com.kteam.superfarmax.Data;

import java.io.InputStream;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kteam.superfarmax.model.Categoria;
import com.kteam.superfarmax.model.Producto;
import com.kteam.superfarmax.repository.CategoriaRepository;
import com.kteam.superfarmax.repository.ProductoRepository;

@Configuration
public class DataProductos {

    @Bean
    CommandLineRunner dataProductos(ProductoRepository productoRepository, CategoriaRepository categoriaRepository) {
        return args -> {
            if (productoRepository.count() == 0) {
                ObjectMapper mapper = new ObjectMapper();
                InputStream is = new ClassPathResource("data/productos.json").getInputStream();

                ProductoDTO[] productos = mapper.readValue(is, ProductoDTO[].class);

                for (ProductoDTO dto : productos) {
                    // dto.getCategoria() debe devolver el nombre de la categoría (String)
                    Categoria categoria = categoriaRepository.findByNombre(dto.getCategoria());

                    // manejar nulls para tipos primitivos en el constructor
                    double precio = dto.getPrecioActual() != null ? dto.getPrecioActual() : 0.0;
                    int cantidad = dto.getCantidad() != null ? dto.getCantidad() : 0;

                    Producto p = new Producto(
                            dto.getNombre(),
                            dto.getDescripcion(),
                            precio,
                            dto.getLote(),
                            cantidad,
                            dto.getImagenUrl(),
                            dto.getLaboratorio_marca(),
                            categoria
                    );

                    productoRepository.save(p);
                }

                System.out.println("✅ Productos cargados desde JSON");
            }
        };
    }
}
