import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { productosDestacados } from '../data/Data.js';
import '../css/destacados.css';

function CarruselProductos() {
    return (
        <div className="carrusel-productos" id="productos-destacados">
            <h2 id="titulo-destacados">Productos Destacados</h2>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 4,
                    autoplay: true,
                    gap: '1rem',     
                    padding: '0rem', 
                    arrows: true,
                    pagination: true,
                }}
                aria-label="Productos destacados"
            >
                {productosDestacados.map((producto) => (
                    <SplideSlide key={producto.id}>
                        <div className="producto">
                            <span className="descuento">{producto.descuento}</span>
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="producto-img" />
                            <h3>{producto.nombre}</h3>
                            <p className="precio-anterior">Antes {producto.precioAnterior}</p>
                            <p className="precio-actual">{producto.precioActual}</p>
                            <p>Presentación: {producto.presentacion}</p>
                            <button className="comprar-btn">
                                Comprar
                            </button>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default CarruselProductos;
