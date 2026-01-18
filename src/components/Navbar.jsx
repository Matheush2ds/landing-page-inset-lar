import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
            <img src={logoImg} alt="Inset Lar Logo" className="logo-img" />
        </a>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre Nós</a></li>
          <li><a href="#contato" className="btn-nav" onClick={() => setIsOpen(false)}>Contato</a></li>
        </ul>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </div>
      </div>
    </nav>
  )
}