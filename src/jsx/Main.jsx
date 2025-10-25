import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Carrusel from './Carrusel.jsx'
import CarruselProductos from './CarruselProductos.jsx'
import Footer from './Footer.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { esES } from "@clerk/localizations";
import Consejos from './Consejos.jsx'
import '../css/Index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('VITE_CLERK_PUBLISHABLE_KEY no está definida')
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      localization={esES}>
      <Header />
      <Carrusel />
      <CarruselProductos />
      <Consejos />
      <Footer />
    </ClerkProvider>
  </StrictMode>
) 
