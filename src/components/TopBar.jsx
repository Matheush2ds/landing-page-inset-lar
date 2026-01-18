import { MapPin, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-info">
          <span>
            <MapPin size={16} color="#00A859" weight="fill" />
            R. Machado de Assis, S/N, Termal, Caldas Novas - GO (794C+56)
          </span>
        </div>
        <div className="top-socials">
          <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
            <FacebookLogo size={20} />
          </a>
          <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" aria-label="Instagram">
            <InstagramLogo size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}