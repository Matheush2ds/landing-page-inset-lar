import { MapPin, Clock, Phone } from '@phosphor-icons/react';

export default function Location() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="location-grid">
          
          <div className="location-info">
            <span className="sub-title">ONDE ESTAMOS</span>
            <h3>Visite nossa sede em Caldas Novas</h3>
            
            <div className="info-row">
              <MapPin weight="fill" />
              <p>
                <strong>Endereço:</strong><br/>
                R. Machado de Assis, S/N - Quadra 07, Lote 22<br/>
                Termal, Caldas Novas - GO, 75680-074
              </p>
            </div>

            <div className="info-row">
              <Clock weight="fill" />
              <p>
                <strong>Horário de Atendimento:</strong><br/>
                Segunda a Sexta: 08:00 - 18:00<br/>
                Sábado: 08:00 - 12:00<br/>
                <span style={{color: '#00A859', fontWeight: 'bold'}}>Plantão 24h para emergências</span>
              </p>
            </div>

            <div className="info-row">
              <Phone weight="fill" />
              <p>
                <strong>Telefones:</strong><br/>
                (64) 3455-4400<br/>
                (64) 99288-6851
              </p>
            </div>
          </div>

          <div className="location-map">
            <div className="location-wrapper">
              <iframe 
                src="https://www.google.com/maps?q=R.+Machado+de+Assis,+Termal,+Caldas+Novas+-+GO&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Inset Lar"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}