import '../css/index.css';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='logoFooter'>
                    <img src="/src/img/Otros/IconoSuperFarmax.png" alt="SuperFarmax Logo" />
                </div>
                <div className='categoriasFooter'>
                    <h3>Categorías</h3>
                    <ul className='listaFooter'>
                        <li><a href="/src/Medicamentos/Medicamentos.html">Medicamentos</a></li>
                        <li><a href="/src/Salud/Salud.html">Salud</a></li>
                        <li><a href="/src/CuidadoPersonal/CuidadoPersonal.html">Cuidado Personal</a></li>
                        <li><a href="/src/Belleza/Belleza.html">Belleza</a></li>
                        <li><a href="/src/Bebes/Bebes.html">Bebés</a></li>
                        <li><a href="/src/Hogar/Hogar.html">Hogar</a></li>
                        <li><a href="/src/Promociones/Promociones.html">Promociones</a></li>
                    </ul>
                </div>
                <div className='infoFooter'>
                    <h3>Información de Contacto</h3>
                    <ul>
                        <li>Cl. 32 #35-66, Alcibia, Cartagena de Indias, Provincia de Cartagena, Bolívar</li>
                        <li>Teléfono: +57 314 5418026</li>
                        <li>Email: </li>
                    </ul>
                </div>
            </div>
            <div className='derechosFooter'>
                <p>&copy; 2025 SuperFarmax. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
