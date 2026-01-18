import { MapPin, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-info">
          <span>
            <MapPin size={18} weight="fill" />
            R. Machado de Assis, S/N, Termal, Caldas Novas - GO
          </span>
        </div>
        <div className="top-socials">
          <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
            <FacebookLogo size={22} weight="fill" />
          </a>
          <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" aria-label="Instagram">
            <InstagramLogo size={22} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  )
}