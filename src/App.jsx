import { Helmet } from "react-helmet";
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audiences from './components/Audiences';
import Technology from './components/Technology';
import Services from './components/Services';
import Differentials from './components/Differentials';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';
import { WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <Helmet>
        <title>Inset Lar | Dedetizadora Premium em Caldas Novas</title>
        <meta name="description" content="Dedetização e desentupimento com 25 anos de mercado. Tecnologia Quimiway exclusiva e atendimento 24h em Caldas Novas e região." />
      </Helmet>

      <TopBar />
      <Navbar />
      <Hero />
      <Audiences />
      <Technology />
      <Services />

      {/* Seção Vídeo CTA */}
      <section className="section" style={{
        background: 'linear-gradient(to right, #111111, #1a1a1a)',
        textAlign: 'center',
        padding: '80px 0',
        color: '#ffffff'
      }}>
        <div className="container">
            <h2 style={{
              fontFamily: 'Montserrat', 
              fontSize: '2rem', 
              marginBottom: '15px', 
              fontWeight: '800',
              color: '#ffffff'
            }}>
              CONHEÇA NOSSOS SERVIÇOS EM VÍDEOS!
            </h2>
            <p style={{color: '#a3a3a3', marginBottom: '30px', fontSize: '1.1rem'}}>
              Veja nossa equipe técnica em ação no YouTube.
            </p>
            <a 
              href="https://www.youtube.com/@InsetLarDedetizadora" 
              target="_blank" 
              className="btn btn-outline"
              style={{borderColor: '#fff', color: '#fff', padding: '12px 30px'}}
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={24} weight="fill" style={{marginRight: '10px'}} />
              Acessar Canal
            </a>
        </div>
      </section>

      <Differentials />
      <About />
      
      {/* Localização (Google Maps) */}
      <Location />

      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <a 
        href="https://api.whatsapp.com/send/?phone=5564992886851&text=Ol%C3%A1%21+Vim+pelo+site+e+quero+um+or%C3%A7amento+premium." 
        className="float-whatsapp" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </>
  )
}

export default App