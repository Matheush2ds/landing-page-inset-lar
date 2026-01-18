import { MapPin, Clock, Phone } from '@phosphor-icons/react';

export default function Location() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="location-grid">
          
          <div className="location-info">
            <span style={{
              color: '#FF7600', 
              fontWeight: 'bold', 
              letterSpacing: '2px', 
              fontSize: '0.9rem', 
              display:'block', 
              marginBottom:'10px'
            }}>
              ONDE ESTAMOS
            </span>
            <h3 style={{
              fontSize: '2rem', 
              fontWeight: '800', 
              color: '#111', 
              marginBottom: '25px'
            }}>
              Visite nossa sede em Caldas Novas
            </h3>
            
            <div className="info-row" style={{display:'flex', gap:'15px', marginBottom:'25px'}}>
              <MapPin size={32} weight="fill" color="#00A859" style={{flexShrink:0}} />
              <p style={{fontSize:'1.05rem', color:'#444'}}>
                <strong>Endereço:</strong><br/>
                R. Machado de Assis, S/N - Quadra 07, Lote 22<br/>
                Termal, Caldas Novas - GO, 75680-074
              </p>
            </div>

            <div className="info-row" style={{display:'flex', gap:'15px', marginBottom:'25px'}}>
              <Clock size={32} weight="fill" color="#00A859" style={{flexShrink:0}} />
              <p style={{fontSize:'1.05rem', color:'#444'}}>
                <strong>Horário de Atendimento:</strong><br/>
                Segunda a Sexta: 08:00 - 18:00<br/>
                Sábado: 08:00 - 12:00<br/>
                <span style={{color: '#00A859', fontWeight: 'bold'}}>Plantão 24h para emergências</span>
              </p>
            </div>

            <div className="info-row" style={{display:'flex', gap:'15px', marginBottom:'25px'}}>
              <Phone size={32} weight="fill" color="#00A859" style={{flexShrink:0}} />
              <p style={{fontSize:'1.05rem', color:'#444'}}>
                <strong>Telefones:</strong><br/>
                (64) 3455-4400<br/>
                (64) 99288-6851
              </p>
            </div>
          </div>

          <div className="location-map">
            <div className="location-wrapper" style={{
              width: '100%', 
              height: '450px', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 12px 24px rgba(0,0,0,0.08)', 
              border: '4px solid white'
            }}>
              {/* Mapa Oficial Embutido */}
              <iframe 
                src="https://maps.google.com/maps?q=R.+Machado+de+Assis,+S/N+-+Quadra+07,+Lote+22+-+Termal,+Caldas+Novas+-+GO&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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