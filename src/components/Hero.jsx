import { useState, useEffect } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import heroBg1 from '../assets/fachada.webp';
import heroBg2 from '../assets/serviços/caminhao-desentupimento.webp';
import heroBg3 from '../assets/serviços/desentupimento2.webp';

export default function Hero() {
  const images = [heroBg1, heroBg2, heroBg3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="hero">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <span className="badge">HÁ 25 ANOS NO MERCADO</span>
        <h1>
          Dedetização e <span style={{color: '#00A859'}}>Desentupimento</span>
        </h1>
        <p style={{marginBottom: '40px', fontSize: '1.2rem', color: '#f0f0f0'}}>
          Soluções modernas e eficazes para o controle de pragas urbanas. 
          Garantia de um ambiente limpo e seguro para sua família ou empresa.
        </p>
        <div className="hero-btns">
          <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" className="btn btn-primary">
            <WhatsappLogo size={24} weight="fill" style={{marginRight: '10px'}} />
             Solicite um Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}