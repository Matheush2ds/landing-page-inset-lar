import { CheckCircle, Flask, FileText, ShieldCheck, MapPin, UsersThree } from '@phosphor-icons/react';

export default function Differentials() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2>POR QUE CONTRATAR A INSET LAR?</h2>
          <div className="separator"></div>
        </div>
        <div className="diferenciais-grid">
          <div className="dif-item">
            <CheckCircle size={40} color="#00A859" weight="fill" />
            <span>Há 25 anos no mercado</span>
          </div>
          <div className="dif-item">
            <Flask size={40} color="#00A859" weight="fill" />
            <span>Químico Responsável</span>
          </div>
          <div className="dif-item">
            <FileText size={40} color="#00A859" weight="fill" />
            <span>Emitimos Laudo Técnico</span>
          </div>
          <div className="dif-item">
            <ShieldCheck size={40} color="#00A859" weight="fill" />
            <span>Garantia de Qualidade</span>
          </div>
          <div className="dif-item">
            <MapPin size={40} color="#00A859" weight="fill" />
            <span>Atendemos Toda Região</span>
          </div>
          <div className="dif-item">
            <UsersThree size={40} color="#00A859" weight="fill" />
            <span>Equipe Capacitada</span>
          </div>
        </div>
      </div>
    </section>
  )
}