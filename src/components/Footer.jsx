import { WhatsappLogo, Phone, MapPin, CaretRight, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
import logoImg from '../assets/logo.png'; 

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-content">
        
        {/* Coluna 1: Marca e Redes */}
        <div className="footer-col">
          {/* Logo Branco no fundo Preto */}
          <img src={logoImg} alt="Inset Lar" style={{height: '55px', marginBottom: '20px'}} />
          
          <p style={{marginBottom: '20px', lineHeight: '1.7', fontSize: '0.95rem'}}>
            Há 25 anos cuidando do seu patrimônio. 
            Líder em dedetização e desentupimento em Caldas Novas, Goiânia e região.
          </p>
          <div className="top-socials">
            <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
                <FacebookLogo size={32} />
            </a>
            <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" aria-label="Instagram">
                <InstagramLogo size={32} />
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h3>Links Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#home"><CaretRight size={14} color="#FF7600" /> Início</a></li>
            <li><a href="#servicos"><CaretRight size={14} color="#FF7600" /> Nossos Serviços</a></li>
            <li><a href="#sobre"><CaretRight size={14} color="#FF7600" /> Quem Somos</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank"><CaretRight size={14} color="#FF7600" /> Solicitar Orçamento</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div className="footer-col">
          <h3>Fale Conosco</h3>
          <ul className="contact-list">
            <li>
              <Phone weight="fill" /> 
              <div>
                <strong style={{color:'white'}}>Telefone Fixo:</strong><br/>
                (64) 3455-4400
              </div>
            </li>
            <li>
              <WhatsappLogo weight="fill" /> 
              <div>
                <strong style={{color:'white'}}>Plantão 24h:</strong><br/>
                <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" style={{color: '#00A859', textDecoration:'underline'}}>
                  (64) 99288-6851
                </a>
              </div>
            </li>
            <li>
              <MapPin weight="fill" />
              <div>
                <strong style={{color:'white'}}>Endereço:</strong><br/>
                R. Machado de Assis, S/N<br/>
                Termal, Caldas Novas - GO
              </div>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© 2023 - 2026 Inset Lar. Inset Lar Dedetizadora. Todos os direitos reservados.</p>
          <p style={{marginTop: '8px', opacity: 0.6}}>
            Desenvolvido por <strong style={{color: '#FF7600'}}>Optima Sistemas</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}