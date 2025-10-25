import '../css/carrusel.css';
import { useState, useEffect } from 'react';
import anuncio1 from '../img/Anuncios/Anuncio1.png';
import anuncio2 from '../img/Anuncios/anuncio2.png';
import anuncio3 from '../img/Anuncios/anuncio3.png';

const Carrusel = () => {
    const anuncios = [
        { src: anuncio1, alt: "Imagen 1" },
        { src: anuncio2, alt: "Imagen 2" },
        { src: anuncio3, alt: "Imagen 3" }
    ];

    const [paginaActual, setpaginaActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setpaginaActual((siguiente) =>
                siguiente === anuncios.length - 1 ? 0 : siguiente + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, [anuncios.length]);
    const paginaAnterior = () => {
        setpaginaActual(paginaActual === 0 ? anuncios.length - 1 : paginaActual - 1);
    };

    const paginaSiguiente = () => {
        setpaginaActual(paginaActual === anuncios.length - 1 ? 0 : paginaActual + 1);
    };

    return (
        <div className="contenedor-carrusel">
            <div className="carrusel" style={{ transform: `translateX(-${paginaActual * 100}%)` }}>
                {anuncios.map((anuncio, idx) => (
                    <div key={idx} className="seccion">
                        <img src={anuncio.src} alt={anuncio.alt} />
                    </div>
                ))}
            </div> 
            <button className="btn-ant" onClick={paginaAnterior}>❮</button>
            <button className="btn-sig" onClick={paginaSiguiente}>❯</button>
        </div>
    );
}

export default Carrusel;
