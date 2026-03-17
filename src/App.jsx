import './App.css';
import logoGrande from './assets/logo_grande.png';
import logoPequena from './assets/logo_pequena.png';

// ─────────────────────────────────────────────
// PLACEHOLDERS PARA IMAGENS PNG TRANSPARENTES
// Substitua os caminhos abaixo pelas suas imagens:
//   import heroPng    from './assets/imagem_hero.png';
//   import contatoPng from './assets/imagem_contato.png';
// E troque as constantes null pelos imports acima.
const heroPng    = null; // ex: imagem decorativa no hero
const contatoPng = null; // ex: ícone/ilustração na seção contato
// ─────────────────────────────────────────────

export default function App() {
  return (
    <div className="lp">

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={logoPequena} alt="daBerling arquitetura e interiores" />
        </div>
        <ul className="nav-links">
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        {/* Menu hamburguer mobile */}
        <button className="nav-hamburguer" aria-label="Menu" onClick={() => {
          document.querySelector('.nav-links').classList.toggle('open');
        }}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Arquitetura &amp; Interiores · Araçatuba, SP</p>
          <h1 className="hero-title">
            Espaços que<br />materializam<br /><em>sonhos</em>
          </h1>
          <p className="hero-subtitle">
            Representar visualmente o que você sonha e imagina. Esse é o meu propósito —
            transformar ideias em ambientes que unem estética, conforto e identidade.
          </p>
          <a href="#projetos" className="btn">Conheça os projetos</a>

          {/* PLACEHOLDER HERO — coloque sua imagem PNG transparente aqui */}
          <div className="hero-png-slot">
            {heroPng
              ? <img src={heroPng} alt="Elemento decorativo" className="hero-png-img" />
              : <div className="hero-png-placeholder">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="40" height="40" rx="2" stroke="#d6cec7" strokeWidth="1" strokeDasharray="4 3"/>
                    <path d="M18 24h12M24 18v12" stroke="#d6cec7" strokeWidth="1.5"/>
                  </svg>
                  <span>imagem_hero.png</span>
                </div>
            }
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-B" aria-hidden="true">B</div>
          <div className="hero-photo-label">
            <svg viewBox="0 0 60 60" fill="none">
              <rect x="4" y="12" width="52" height="36" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
              <circle cx="20" cy="26" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
              <polyline points="4,40 18,30 28,36 40,24 56,38" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none"/>
            </svg>
            <p>foto principal</p>
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="processo">
        <p className="section-label">Nossa jornada</p>
        <div className="processo-grid">
          {[
            { fase: 'ovo',       nome: 'Briefing',           desc: 'Ouvimos suas expectativas, desejos e o que você sonha para o espaço.' },
            { fase: 'lagarta',   nome: 'Estudo Preliminar',  desc: 'Levantamento e apresentação das primeiras imagens e ideias do projeto.' },
            { fase: 'casulo',    nome: 'Projeto Executivo',  desc: 'Transformamos tudo em projeto real, com todos os dados para execução.' },
            { fase: 'borboleta', nome: 'Entrega Final',      desc: 'Apresentação e entrega do projeto finalizado. É hora de voar.' },
          ].map((item) => (
            <div className="processo-item" key={item.fase}>
              <div className="fase-num">{item.fase}</div>
              <div className="fase-name">{item.nome}</div>
              <div className="fase-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="servicos" id="servicos">
        <p className="section-label">Serviços</p>
        <div className="services-grid">
          {[
            { num: '01', nome: 'Arquitetura Residencial',  desc: 'Projetos completos do conceito à entrega — plantas, cortes, fachada, 3D e acompanhamento de obra.' },
            { num: '02', nome: 'Design de Interiores',     desc: 'Layout, cores, marcenaria, mobiliário e acabamentos. Unidade estética e funcionalidade no dia a dia.' },
            { num: '03', nome: 'Projetos Complementares',  desc: 'Iluminação, paisagismo, estrutural, hidrossanitário e elétrico para um resultado completo.' },
          ].map((s) => (
            <div className="srv" key={s.num}>
              <div className="srv-num">{s.num}</div>
              <div className="srv-name">{s.nome}</div>
              <div className="srv-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFÓLIO ── */}
      <section className="portfolio" id="projetos">
        <p className="section-label">Portfólio</p>
        <div className="port-grid">
          <div className="port-item port-destaque"><p className="port-label">projeto em destaque</p></div>
          <div className="port-item"><p className="port-label">residencial</p></div>
          <div className="port-item"><p className="port-label">interiores</p></div>
          <div className="port-item"><p className="port-label">comercial</p></div>
        </div>
        <div className="port-cta">
          <button className="btn">Ver todos os projetos</button>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="sobre" id="sobre">
        <div className="sobre-img">
          <img className="sobre-logo" src={logoGrande} alt="daBerling arquitetura e interiores" />
          <div className="sobre-img-placeholder">
            <svg viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="20" r="10" stroke="#635c57" strokeWidth="0.8"/>
              <path d="M10 52c0-11 9-18 20-18s20 7 20 18" stroke="#635c57" strokeWidth="0.8"/>
            </svg>
            <p>foto da arquiteta</p>
          </div>
        </div>
        <div className="sobre-text">
          <p className="section-label">Sobre</p>
          <h2 className="sobre-title">Daniela<br /><em>Berling</em></h2>
          <p className="sobre-body">
            Meu trabalho é representar visualmente o que você sonha e imagina — através de imagens,
            cenas em 3D e projetos com todos os dados para execução. Cada projeto começa com uma
            escuta cuidadosa: suas necessidades, seu estilo de vida, suas referências e o que você
            deseja sentir no espaço.
          </p>
          <p className="sobre-quote">
            Borboletas carregam o pólen para nos oferecer lindas flores.
            Que o meu trabalho leve cores, beleza e alegria no viver.
          </p>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section className="contato" id="contato">
        <p className="section-label">Contato</p>
        <div className="contato-inner">
          <div className="contato-left">
            <h2 className="contato-title">
              Vamos criar<br />algo <em>juntos?</em>
            </h2>
            <p className="contato-sub">
              Conte-me sobre o seu espaço.<br />
              Será um prazer imenso estar com você nessa fase.
            </p>
            <div className="contato-info">
              <div className="ci"><label>Telefone</label><span>(18) 99170-1268</span></div>
              <div className="ci"><label>E-mail</label><span>arquiteta@daberling.com.br</span></div>
            </div>

            {/* PLACEHOLDER CONTATO — coloque sua imagem PNG transparente aqui */}
            <div className="contato-png-slot">
              {contatoPng
                ? <img src={contatoPng} alt="Ícone decorativo" className="contato-png-img" />
                : <div className="contato-png-placeholder">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="40" height="40" rx="2" stroke="rgba(214,206,199,0.4)" strokeWidth="1" strokeDasharray="4 3"/>
                      <path d="M18 24h12M24 18v12" stroke="rgba(214,206,199,0.4)" strokeWidth="1.5"/>
                    </svg>
                    <span>imagem_contato.png</span>
                  </div>
              }
            </div>
          </div>

          <div className="contato-form">
            <div className="fg"><input type="text"  placeholder="Seu nome" /></div>
            <div className="fg"><input type="email" placeholder="E-mail" /></div>
            <div className="fg"><input type="text"  placeholder="Tipo de projeto" /></div>
            <div className="fg"><textarea placeholder="Conte um pouco sobre o que você sonha..." /></div>
            <button className="btn btn-dark">Enviar mensagem</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>daBerling arquitetura e interiores</p>
        <p>© 2025 · Daniela Ferrari Berling Moreno</p>
      </footer>

    </div>
  );
}
