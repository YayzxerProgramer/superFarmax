import React from 'react';
import '../css/header.css';

import logo from '../img/Otros/IconoSuperFarmax.png';
import buscarIcon from '../img/IconNav/Buscar.png';
import inicioSesionIcon from '../img/IconNav/InicioSesion.png';
import carritoIcon from '../img/IconNav/CarritoCompra.png';
import cuidadoBebeIcon from '../img/IconNav/CuidadoBebe.png';
import cuidadoPersonalIcon from '../img/IconNav/CuidadoPersonal.png';
import cuidadoSexualIcon from '../img/IconNav/CuidadoSexual.png';
import bebidasIcon from '../img/IconNav/Bebidas.png';
import bellezaIcon from '../img/IconNav/Belleza.png';
import medicamentosIcon from '../img/IconNav/Medicamentos.png';
import ofertaIcon from '../img/IconNav/Oferta.png';
import { SignedOut, SignIn } from '@clerk/clerk-react';
import { SignUp } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import { aparencia } from '../data/Data.js';

const Header = () => {
    const [mostrarLogin, setMostrarLogin] = React.useState(false);
    const [mostrarRegistro, setMostrarRegistro] = React.useState(false);
    const [mostrarCarrito, setMostrarCarrito] = React.useState(false);

    const abrirLogin = () => {
        setMostrarRegistro(false);
        setMostrarLogin(true);
    };
    const cerrarLogin = () => setMostrarLogin(false);
    const abrirCarrito = () => setMostrarCarrito(true);
    const cerrarCarrito = () => setMostrarCarrito(false);
    const abrirRegistro = () => {
        setMostrarLogin(false);
        setMostrarRegistro(true);
    };
    const cerrarRegistro = () => setMostrarRegistro(false);

    React.useEffect(() => {
        const salirForm = (tecla) => {
            if (tecla.key === 'Escape') {
                setMostrarLogin(false);
                setMostrarRegistro(false);
                setMostrarCarrito(false);
            }
        };
        document.addEventListener('keydown', salirForm);
        return () => document.removeEventListener('keydown', salirForm);
    },);

    function PerfilUsuario() {
        const { user } = useUser();
        if (!user) {
            return <div className="imgiconos">
                <img src={inicioSesionIcon} alt="Inicio Sesion Icon" />
                <button className="boton-ventana" id="login" onClick={abrirLogin}> Iniciar Sesión </button>
            </div >
        }
        return (
            <div>
                <p className="usuario">Bienvenido, {user.firstName}</p>
            </div>
        );
    }

    return (
        <>
            <header className="header">
                <h1>
                    <a href="/">
                        <img src={logo} alt="SuperFarmax Logo" className="Logo" />
                    </a>
                </h1>

                <div className="search-bar">
                    <input type="text" placeholder="Busca aquí tu producto" />
                    <button className="search-btn">
                        <img src={buscarIcon} alt="Buscar" className="Buscar" />
                    </button>
                </div>

                <section className="imgiconosh">
                    <PerfilUsuario />
                    <div className="imgiconos">
                        <img src={carritoIcon} alt="Carrito Compras Icon" />
                        <button className="btn-carrito" id="carrito-btn" onClick={abrirCarrito}> Carrito de Compras </button>
                        <UserButton />
                    </div>
                </section>
            </header>

            {mostrarLogin && (
                <div className="ventana" onClick={cerrarLogin}>
                    <div className="ventana-contenido" onClick={(e) => e.stopPropagation()}>
                        <button className="ventana-cerrar" onClick={cerrarLogin}>×</button>
                        <SignedOut>
                            <SignIn
                                appearance={aparencia}
                            />
                        </SignedOut>
                        <div className="contenidoTexto">
                            <p className='textoForm'>
                                ¿No tienes cuenta?{' '}
                                <button className='btnForm' onClick={abrirRegistro}>Regístrate aquí</button>
                            </p>
                        </div>
                    </div>
                </div>
            )}


            {mostrarRegistro && (
                <div className="ventana" onClick={cerrarRegistro}>
                    <div className="ventana-contenido" onClick={(e) => e.stopPropagation()}>
                        <button className="ventana-cerrar" onClick={cerrarRegistro}>×</button>
                        <SignedOut>
                            <SignUp
                                appearance={aparencia}
                                afterSignInUrl="/"
                                afterSignUpUrl="/"
                            />
                        </SignedOut>
                        <div className="contenidoTexto">
                            <p className='textoForm'>
                                ¿Ya tienes cuenta?{' '}
                                <button className='btnForm' onClick={abrirLogin}> Inicia sesión aquí </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {mostrarCarrito && (
                <div id="carrito" className="carrito open">
                    <span className="cerrar" onClick={cerrarCarrito}> &times; </span>
                    <h2>🛒 Carrito</h2>
                    <p>Tu Carrito Está Vacío</p>
                </div>
            )}

            <div className="separador">
                <ul>
                    <li><a href="/"><img src={ofertaIcon} alt="Ofertas" width="15"></img>Ofertas</a></li>
                    <li><a href="/src/medicamentos/Medicamentos.html"><img src={medicamentosIcon} alt="Medicamentos" width="15"></img>Medicamentos</a></li>
                    <li><a href="/src/belleza/Belleza.html"><img src={bellezaIcon} alt="Belleza" width="15"></img>Belleza</a></li>
                    <li><a href="/src/CuidadoBebe/CuidadoBebe.html"><img src={cuidadoBebeIcon} alt="Cuidado del bebé" width="15"></img>Cuidado del bebé</a></li>
                    <li><a href="/src/cuidadoPersonal/CuidadoPersonal.html"><img src={cuidadoPersonalIcon} alt="Cuidado personal" width="15"></img>Cuidado personal</a></li>
                    <li><a href="/src/Bebidas/Bebidas.html"><img src={bebidasIcon} alt="Bebidas" width="15"></img>Bebidas</a></li>
                    <li><a href="/src/cuidadoSexual/cuidadosexual.html"><img src={cuidadoSexualIcon} alt="Cuidado sexual" width="15"></img>Cuidado sexual</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
