import { useEffect, useState } from "react";
import { getProductos } from "../services/productService";
import Cartas from "./Cartas.jsx";

export default function Productos({ titulo }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(setProductos).catch(console.error);
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
    }

    return (
        <div className="contenedor">
            <h2 className="productos-titulo">{titulo || "Productos disponibles"}</h2>
            <div className="productos-cuadricula">
                {productos.map((producto) => (
                    <Cartas key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}
