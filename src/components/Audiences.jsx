import { House, Buildings, Factory, Student } from '@phosphor-icons/react';

export default function Audiences() {
  return (
    <div className="audiences-bar">
      <div className="container audiences-grid">
        <div className="audience-item">
          <House size={32} weight="fill" /> <span>Residências</span>
        </div>
        <div className="audience-item">
          <Student size={32} weight="fill" /> <span>Escolas</span>
        </div>
        <div className="audience-item">
          <Buildings size={32} weight="fill" /> <span>Empresas</span>
        </div>
        <div className="audience-item">
          <Factory size={32} weight="fill" /> <span>Indústrias</span>
        </div>
      </div>
    </div>
  )
}