export default function About() {
  return (
    <section id="sobre" className="section bg-light">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <span className="sub-title">SOBRE NÓS</span>
            <h2>EMPRESA DE CONTROLE DE PRAGAS EM CALDAS NOVAS E REGIÃO</h2>
            <p>
              A Inset Lar é uma empresa familiar com mais de 20 anos de experiência em Caldas Novas, 
              especializada no controle de pragas, desentupimentos, impermeabilizações e limpeza de caixas d’água.
            </p>
            <p>
              Atendemos também em Goiânia e Uberlândia, com soluções modernas, equipe qualificada e ótimo custo-benefício. 
              Confiança, qualidade e atendimento personalizado para garantir sua satisfação.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="card-info">
              <h4>Nossa Missão</h4>
              <p>Proporcionar proteção, saúde e bem-estar aos nossos clientes e à comunidade por meio de soluções seguras e eficazes.</p>
            </div>
            <div className="card-info">
              <h4>Nossa Visão</h4>
              <p>Ser referência nacional, reconhecida pela qualidade no atendimento, transparência e inovação no setor.</p>
            </div>
            <div className="card-info">
              <h4>Nossos Valores</h4>
              <ul>
                <li>Respeito ao cliente</li>
                <li>Transparência em todas as ações</li>
                <li>Melhoria contínua dos processos</li>
                <li>Inovação tecnológica</li>
                <li>Compromisso social e ambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}