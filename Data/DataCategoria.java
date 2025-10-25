package com.kteam.superfarmax.Data;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.kteam.superfarmax.model.Categoria;
import com.kteam.superfarmax.repository.CategoriaRepository;

@Configuration
public class DataCategoria {

    @Bean
    CommandLineRunner cargarCategorias(CategoriaRepository categoriaRepository) {
        return args -> {
            if (categoriaRepository.count() == 0) {
                List<Categoria> categorias = List.of(
                        new Categoria("Medicamentos"),
                        new Categoria("Bebidas"),
                        new Categoria("Belleza"),
                        new Categoria("Cuidado Personal"),
                        new Categoria("Cuidado del bebe"),
                        new Categoria("Cuidado Sexual")
                );

                categoriaRepository.saveAll(categorias);
                System.out.println("✅ Categorías iniciales cargadas correctamente.");
            } else {
                System.out.println("ℹ️ Las categorías ya existen, no se cargaron nuevamente.");
            }
        };
    }
}
