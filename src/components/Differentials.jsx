import { CheckCircle, Flask, FileText, ShieldCheck, MapPin, UsersThree } from '@phosphor-icons/react';

export default function Differentials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>POR QUE CONTRATAR A INSET LAR?</h2>
          <div className="separator"></div>
        </div>
        <div className="diferenciais-grid">
          <div className="dif-item">
            <CheckCircle size={40} color="#2C7E44" />
            <span>Há mais de 20 anos no mercado</span>
          </div>
          <div className="dif-item">
            <Flask size={40} color="#2C7E44" />
            <span>Químico Responsável</span>
          </div>
          <div className="dif-item">
            <FileText size={40} color="#2C7E44" />
            <span>Emitimos Laudo Técnico</span>
          </div>
          <div className="dif-item">
            <ShieldCheck size={40} color="#2C7E44" />
            <span>Garantia de qualidade</span>
          </div>
          <div className="dif-item">
            <MapPin size={40} color="#2C7E44" />
            <span>Atendemos em Caldas Novas e região</span>
          </div>
          <div className="dif-item">
            <UsersThree size={40} color="#2C7E44" />
            <span>Equipe Treinada e Capacitada</span>
          </div>
        </div>
      </div>
    </section>
  )
}