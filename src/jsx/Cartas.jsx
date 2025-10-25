import "../css/Producto.css";

export default function Cartas({ producto }) {
    const precioAnterior = producto.precioAnterior
        ? `$${producto.precioAnterior.toLocaleString()}`
        : "";
    const precioActual = producto.precioActual
        ? `$${producto.precioActual.toLocaleString()}`
        : "";

    return (
        <div className="tarjeta">
            {producto.descuento && (
                <span className="descuento">{producto.descuento}</span>
            )}

            <img
                src={`http://localhost:8080/${producto.imagenUrl}`}
                alt={producto.nombre}
                className="tarjeta-img"
            />

            <h3 className="tarjeta-titulo">{producto.nombre}</h3>

            {producto.precioAnterior && (
                <p className="tarjeta-precio-antiguo">Antes: {precioAnterior}</p>
            )}
            <p className="tarjeta-precio">{precioActual}</p>

            {producto.presentacion && (
                <p className="tarjeta-presentacion">{producto.presentacion}</p>
            )}

            <button className="boton-comprar">Comprar</button>
        </div>
    );
}
