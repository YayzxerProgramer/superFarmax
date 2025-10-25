import '../css/index.css';
import '../css/consejos.css';
import consejos from '../data/Consejos.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const opciones = {
    type: 'loop',
    perPage: 2,
    perMove: 2,
     gap: '1rem'
};

function Consejos() {
    return (
        <section className="consejos">
            <h2>Consejos para el uso seguro de cualquier Medicamento</h2>
            <div className="consejoscontainer">
                <Splide options={opciones} aria-label="Consejos">
                    {consejos.map((c) => (
                        <SplideSlide key={c.id}>
                            <article className="consejo">
                                {/* {c.imagen && (
                                    <img src={c.imagen} alt={c.titulo} className="consejo-imagen" />
                                )} */}
                                <h3>{c.titulo}</h3>
                                <p>{c.descripcion}</p>
                            </article>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
}

export default Consejos;
