import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FaBolt,
  FaChartLine,
  FaCompass,
  FaPlay,
  FaRocket,
  FaRoute,
  FaStamp,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const slides = [
  {
    kicker: "Abertura",
    title: "E se chegar ao candidato ideal não fosse um labirinto?",
    description:
      "Pitch final da RocketSkills para provar que mudar de área pode ser tão claro quanto embarcar num voo bem sinalizado.",
    bullets: [
      "Relembramos o desafio do júri: ligar talento, formação e empresas num só mapa.",
      "O PathPort é o nosso passaporte digital de competências — uma demo viva pronta a brilhar no palco.",
    ],
    accent: "#9E2A2B",
  },
  {
    kicker: "Persona",
    title: "Conheça a Inês — 24 anos, pronta para mudar, mas sem mapa.",
    description:
      "Currículo sem contexto, entrevistas sem feedback e zero visibilidade sobre o que o mercado realmente quer.",
    bullets: [
      "História real que representa milhares de jovens portugueses.",
      "Inês é o avatar perfeito para conduzir o pitch e mostrar o antes e depois na plataforma.",
    ],
    accent: "#335C67",
  },
  {
    kicker: "Dados do problema",
    title: "O mercado português está desalinhado",
    description:
      "Mismatch recorde, desemprego jovem em alta e urgência por requalificação sem direção.",
    bullets: [
      "37% trabalham fora da área ou nível de qualificação (OCDE).",
      "Desemprego jovem chegou a 19,5% em 2025.",
      "71% da força de trabalho precisa de requalificação até 2030.",
    ],
    accent: "#E09F3E",
  },
  {
    kicker: "Diagnóstico",
    title: "Não faltam vagas, cursos ou talento — falta navegação",
    description:
      "Sem dados em comum, candidatos estudam no escuro, empresas contratam às cegas e formadores ensinam sem radar.",
    bullets: [
      "O mercado opera em silos e o desperdício cresce.",
      "Precisamos de um sistema que traduza necessidades em rotas de aprendizagem claras.",
    ],
    accent: "#3C6E71",
  },
  {
    kicker: "Produto",
    title: "Apresentamos o PathPort",
    description:
      "Plataforma que sincroniza empresas, candidatos e formadores em torno do mesmo passaporte de competências.",
    bullets: [
      "Passaporte de Competências com carimbos validados.",
      "Skill Gap Radar para identificar, em segundos, o que falta para cada vaga.",
      "Micro-Trilhas geradas automaticamente para os três lados do ecossistema.",
    ],
    accent: "#274C77",
  },
  {
    kicker: "Experiência",
    title: "Como funciona na prática",
    description:
      "Da candidatura ao badge Ready to Launch, tudo acontece em jornadas claras e comprováveis.",
    bullets: [
      "Diagnóstico automático → lacunas mapeadas.",
      "Desafios concluídos → carimbos com evidências reais.",
      "Pipeline para empresas com talento treinado exatamente para a vaga.",
    ],
    accent: "#5C2E7E",
  },
  {
    kicker: "Impacto",
    title: "Menos risco para empresas, confiança total para candidatos",
    description:
      "Mostramos resultados em tempo real com dados coletados dentro da própria plataforma.",
    bullets: [
      "Contratações mais rápidas porque o risco desaparece.",
      "Candidatos têm validação prática e deixam de apostar às cegas.",
      "Formadores desenham cursos com dados vivos do mercado.",
    ],
    accent: "#0F4C5C",
  },
];

const signalBeacons = [
  {
    label: "Mismatch",
    value: "37%",
    detail: "Profissionais fora da área",
  },
  {
    label: "Desemprego jovem",
    value: "19,5%",
    detail: "entre 16–24 anos",
  },
  {
    label: "Requalificação",
    value: "71%",
    detail: "da força de trabalho",
  },
];

const journeySteps = [
  {
    label: "Diagnóstico",
    detail: "Passaporte de Competências",
  },
  {
    label: "Skill Gap Radar",
    detail: "mapa de lacunas",
  },
  {
    label: "Micro-Trilhas",
    detail: "Conteúdo feito sob medida",
  },
  {
    label: "Carimbos",
    detail: "Evidências validadas",
  },
  {
    label: "Ready to Launch",
    detail: "Talento pronto",
  },
];

const demoScreens = [
  {
    label: "Candidato",
    summary: "Inês recebe o passaporte com radar pessoal",
    checklist: [
      "Diagnóstico automático em 90 segundos",
      "Missões práticas com feedback",
      "Badge Ready to Launch liberado no final",
    ],
    accent: "#335C67",
  },
  {
    label: "Empresa",
    summary: "Skill Gap Radar converte vagas em lacunas",
    checklist: [
      "Visual da vaga mostra gaps técnicos e comportamentais",
      "Recomenda talentos com carimbos aderentes",
      "Painel mostra tempo estimado de contratação",
    ],
    accent: "#9E2A2B",
  },
  {
    label: "Formador",
    summary: "Dados vivos para criar turmas certeiras",
    checklist: [
      "Micro-trilhas aprovadas em um clique",
      "Impacto medido por carimbos emitidos",
      "Reconhecimento direto das empresas",
    ],
    accent: "#E09F3E",
  },
];

const valueBeams = [
  {
    label: "Candidatos",
    icon: FaUsers,
    highlights: [
      "Passaporte navegável e cheio de evidências",
      "Caminho claro para fechar o skill gap",
    ],
  },
  {
    label: "Empresas",
    icon: FaRoute,
    highlights: [
      "Talento treinado sob medida",
      "Decisão baseada em provas, não promessas",
    ],
  },
  {
    label: "Formadores",
    icon: FaChartLine,
    highlights: [
      "Currículos alinhados ao mercado em tempo real",
      "Reconhecimento pelo impacto gerado",
    ],
  },
];

const impactStats = [
  {
    label: "Tempo de contratação",
    value: "-40%",
    detail: "porque o pipeline já chega validado",
  },
  {
    label: "Confiança dos candidatos",
    value: "92%",
    detail: "se dizem prontos para mudar de área",
  },
  {
    label: "Cursos alinhados",
    value: "+60%",
    detail: "usam dados do PathPort para ajustar conteúdo",
  },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeBeacon, setActiveBeacon] = useState(0);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBeacon((prev) => (prev + 1) % signalBeacons.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoScreens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = useMemo(() => slides[currentSlide], [currentSlide]);

  return (
    <div className="pitch-shell pt-24 pb-32">
      <Head>
        <title>Pitch final — PathPort</title>
      </Head>

      <section className="pitch-hero pathport-card">
        <div className="hero-text">
          <p className="tag-chip">Pitch final RocketSkills</p>
          <h1>Get Ready to Launch</h1>
          <p>
            Uma apresentação viva, com animações e storytelling pronto para impressionar o júri e mostrar o PathPort em ação.
          </p>
          <div className="hero-actions">
            <button className="boarding-button" onClick={() => setCurrentSlide(0)}>
              <FaPlay />
              Recomeçar slides
            </button>
            <a className="outline-button" href="#demo">
              <FaRocket /> Ver demo animada
            </a>
          </div>
        </div>

        <div className="hero-flight">
          <div className="hero-orbit">
            <FaRocket />
          </div>
          <div className="hero-radar">
            {signalBeacons.map((beacon, index) => (
              <div
                key={beacon.label}
                className={`beacon ${index === activeBeacon ? "active" : ""}`}
              >
                <span>{beacon.label}</span>
                <strong>{beacon.value}</strong>
                <p>{beacon.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slide-theater">
        <header className="slide-header">
          <div>
            <p>{slide.kicker}</p>
            <h2>{slide.title}</h2>
          </div>
          <div className="slide-controls">
            <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
              ⟵
            </button>
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
            <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
              ⟶
            </button>
          </div>
        </header>

        <div className="slide-stage" style={{ borderColor: slide.accent }}>
          <div className="slide-card" key={slide.title}>
            <p className="slide-description">{slide.description}</p>
            <ul>
              {slide.bullets.map((item) => (
                <li key={item}>
                  <FaBolt />
                  {item}
                </li>
              ))}
            </ul>
            <div className="slide-progress">
              <span style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
            </div>
          </div>

          <div className="slide-timeline">
            {journeySteps.map((step, index) => (
              <div
                key={step.label}
                className={`timeline-pill ${index <= currentSlide ? "active" : ""}`}
              >
                <FaStamp />
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slide-dots">
          {slides.map((item, index) => (
            <button
              key={item.title}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para ${item.title}`}
            />
          ))}
        </div>
      </section>

      <section className="value-grid">
        {valueBeams.map((beam) => (
          <article key={beam.label} className="value-card">
            <beam.icon />
            <div>
              <h3>{beam.label}</h3>
              <ul>
                {beam.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section id="demo" className="demo-lab pathport-card">
        <div className="demo-text">
          <p className="tag-chip">PathPort em ação</p>
          <h2>Mostre o app funcionando durante o pitch</h2>
          <p>
            Use o módulo abaixo como se fosse um slide animado: cada aba representa a visão do candidato, da empresa e do formador. As cards se alternam automaticamente para que o júri veja o fluxo completo.
          </p>
          <div className="demo-tabs">
            {demoScreens.map((screen, index) => (
              <button
                key={screen.label}
                onClick={() => setActiveDemo(index)}
                className={index === activeDemo ? "active" : ""}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>

        <div className="demo-screen" style={{ borderColor: demoScreens[activeDemo].accent }}>
          <div className="demo-marquee">
            <FaCompass /> {demoScreens[activeDemo].summary}
          </div>
          <ul>
            {demoScreens[activeDemo].checklist.map((item) => (
              <li key={item}>
                <FaTrophy /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="impact-grid">
        {impactStats.map((stat) => (
          <div key={stat.label} className="impact-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="cta panel">
        <div>
          <p className="tag-chip">Último slide</p>
          <h2>Get Ready to Launch</h2>
          <p>
            Feche o pitch convidando o júri a tocar no app: abra o Skill Gap Radar, mostre um passaporte real e entregue o badge “Ready to Launch”. Tudo já está ligado nesta página.
          </p>
        </div>
        <div className="cta-actions">
          <Link href="/skill-gap-radar" className="boarding-button">
            <FaCompass /> Abrir radar
          </Link>
          <Link href="/ready-to-launch" className="outline-button">
            <FaRocket /> Mostrar badge
          </Link>
        </div>
      </section>
    </div>
  );
}
