import { Skull, ShieldCheck, Wind, Lightning } from '@phosphor-icons/react';

export default function Technology() {
  return (
    <section className="section tech-section">
      <div className="container tech-content">
        <div className="tech-text">
          <span style={{color: '#FF7600', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem'}}>NOSSA TECNOLOGIA</span>
          <h2>Produtos de Alta Performance</h2>
          <p>
            Utilizamos a formulação exclusiva <strong>Quarteto da linha profissional Quimiway</strong>. 
            Uma solução que atua em quatro frentes simultâneas, garantindo o extermínio total da colônia.
          </p>
          <div className="highlight-box">
             <p style={{margin:0, color: '#111', fontSize: '1.1rem'}}>Eficácia comprovada e segurança total para o seu ambiente.</p>
          </div>
        </div>
        
        <div className="tech-grid">
          <div className="tech-card">
            <Lightning size={32} color="#00A859" style={{marginBottom: '10px'}} weight="fill" />
            <h4>Ação Inseticida</h4>
            <p>Elimina os insetos adultos imediatamente após o contato.</p>
          </div>
          <div className="tech-card">
            <ShieldCheck size={32} color="#00A859" style={{marginBottom: '10px'}} weight="fill" />
            <h4>Ação Residual</h4>
            <p>O produto permanece ativo nas superfícies, protegendo por semanas.</p>
          </div>
          <div className="tech-card">
            <Wind size={32} color="#00A859" style={{marginBottom: '10px'}} weight="fill" />
            <h4>Ação Desalojante</h4>
            <p>Força os insetos a saírem de frestas profundas para serem eliminados.</p>
          </div>
          <div className="tech-card">
            <Skull size={32} color="#00A859" style={{marginBottom: '10px'}} weight="fill" />
            <h4>Controle Total</h4>
            <p>Quebra o ciclo de reprodução da colônia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}