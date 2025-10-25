import { useState } from "react";
import "../css/Filtro.css";
import { FaChevronDown } from "react-icons/fa";

export default function Filtro({ categorias, rangoPrecio }) {
    const [precio, setPrecio] = useState(rangoPrecio?.inicial || 50000);
    const [abierto, setAbierto] = useState({});

    const alternarCategoria = (clave) => {
        setAbierto((anterior) => ({
            ...anterior,
            [clave]: !anterior[clave]
        }));
    };

    return (
        <div className="filtro-caja">
            <div className="filtro-encabezado">
                <span>⚙️</span>
                Filtrar por:
            </div>

            {categorias?.map((categoria) => (
                <div key={categoria.id}>
                    <div className="filtro-item" onClick={() => alternarCategoria(categoria.id)}>
                        <span>{categoria.nombre}</span>
                        <FaChevronDown className={`icono ${abierto[categoria.id] ? "rotar" : ""}`} />
                    </div>
                    {abierto[categoria.id] && (
                        <div className="filtro-contenido">
                            {categoria.opciones.map((opcion, indice) => (
                                <label key={indice}>
                                    <input type="checkbox" />
                                    {opcion}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {rangoPrecio && (
                <div className="filtro-precio">
                    <label>Rangos de precio</label>
                    <input
                        type="range"
                        min={rangoPrecio.min}
                        max={rangoPrecio.max}
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                    <div className="precio-valores">
                        <span>${rangoPrecio.min.toLocaleString()}</span>
                        <span>${rangoPrecio.max.toLocaleString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
}