import { WhatsappLogo, Phone, EnvelopeSimple } from '@phosphor-icons/react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <img src={logoImg} alt="Inset Lar" style={{maxWidth: '150px', marginBottom: '20px'}} />
          <p>Combata pragas sem odores desagradáveis em espaços internos com a eficiência da Inset Lar. Atendemos residências, comércios e indústrias.</p>
        </div>
        
        <div className="footer-col">
          <h3>Entre em contato conosco</h3>
          <ul className="contact-list">
            <li>
              <WhatsappLogo size={24} /> 
              <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank">(64) 99288-6851</a>
            </li>
            <li>
              <Phone size={24} /> 
              <span>(64) 3455-4400</span>
            </li>
            <li>
              <EnvelopeSimple size={24} /> 
              <span>insetlarcaldasnovas@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© 2023 - 2026 - Inset Lar Dedetizadora em Caldas Novas</p>
          <p>
            Desenvolvido por <a href="https://www.instagram.com/optima_sistemas/" target="_blank" className="dev-link">Optima Sistemas</a>
          </p>
        </div>
      </div>
    </footer>
  )
}