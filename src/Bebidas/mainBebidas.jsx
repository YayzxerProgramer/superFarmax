import React from "react";
import { createRoot } from 'react-dom/client'
import Header from "../jsx/Header";
import Productos from "../jsx/Productos.jsx";
import { Bebidas } from "../data/Data.js";
import Filtro from "../jsx/Filtro.jsx";
import { categoriasFiltroBebidas, rangoPrecioBebidas } from "../data/filtros.js";
import { ClerkProvider } from '@clerk/clerk-react'
import "../css/Producto.css";
import { esES } from "@clerk/localizations";
import Footer from "../jsx/Footer.jsx";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('VITE_CLERK_PUBLISHABLE_KEY no está definida')
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}
        localization={esES}>
        <Header />
        <div className="contenido-principal">
            <Filtro categorias={categoriasFiltroBebidas} 
                    rangoPrecio={rangoPrecioBebidas}
            />
            <Productos productos={Bebidas} titulo="Catálogo Bebidas" />
        </div>
        <Footer />
        </ClerkProvider>
    </React.StrictMode>
);