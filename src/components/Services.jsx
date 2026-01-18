import imgDedetizacao from '../assets/serviços/dedetizando.webp';
import imgDesentupimento from '../assets/serviços/desentupimento.webp';
import imgCaixaGordura from '../assets/serviços/caminhao-desentupimento.webp';
import imgCaixaAgua from '../assets/serviços/limpeza caixa.webp';
import imgDescupinizacao from '../assets/serviços/descupinização.webp';
import imgDesratizacao from '../assets/serviços/desratização.webp';
import imgSanitizacao from '../assets/serviços/termonebulização.webp';
import imgFumace from '../assets/serviços/fumace.webp';

export default function Services() {
  const servicesData = [
    { 
      title: "Dedetização", 
      img: imgDedetizacao, 
      text: "Controle completo de multinsetos (Aranhas, Escorpiões, Baratas, Formigas). Utilizamos Bomba Costal e Micropulverização de alta pressão para criar barreiras químicas em rodapés e muros." 
    },
    { 
      title: "Desentupimento", 
      img: imgDesentupimento, 
      text: "Hidrojateamento profissional em fossas e caixas de gordura. Limpeza profunda e imediata sem quebrar pisos ou agredir o meio ambiente." 
    },
    { 
      title: "Limpeza de C. de Gordura", 
      img: imgCaixaGordura, 
      text: "Caminhão equipado para sucção e limpeza de redes de esgoto e caixas de gordura industriais e residenciais." 
    },
    { 
      title: "Limpeza de Caixa d'Água", 
      img: imgCaixaAgua, 
      text: "Higienização completa seguindo normas da ANVISA. Garanta a qualidade da água e a saúde da sua família." 
    },
    { 
      title: "Descupinização", 
      img: imgDescupinizacao, 
      text: "Barreira química contra cupins de solo e brocas de madeira. Proteção garantida para seus móveis e estruturas." 
    },
    { 
      title: "Desratização", 
      img: imgDesratizacao, 
      text: "Estratégia inteligente com iscas para controle de ratos e ratazanas em residências, comércios e indústrias." 
    },
    { 
      title: "Sanitização", 
      img: imgSanitizacao, 
      text: "Elimina vírus e bactérias do ambiente. Essencial para clínicas, escolas e locais com grande fluxo de pessoas." 
    },
    { 
      title: "Fumacê", 
      img: imgFumace, 
      text: "Combate massivo a pernilongos e mosquitos da dengue em áreas externas e grandes terrenos." 
    },
  ];

  return (
    <section id="servicos" className="section">
      <div className="container">
        <div className="section-header">
          <h2>NOSSOS SERVIÇOS</h2>
          <div className="separator"></div>
          <p>Atendemos residências, escolas, empresas e indústrias com frota própria e equipe especializada.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article key={index} className="service-card">
              <div className="card-image-wrapper">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}