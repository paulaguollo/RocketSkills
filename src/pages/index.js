import Link from 'next/link';
import {
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaRegStar,
  FaGamepad,
  FaChartLine,
  FaUsers,
  FaCompass,
  FaMagic,
  FaLayerGroup,
  FaShieldAlt,
  FaTrophy,
  FaFlagCheckered,
  FaSatellite
} from 'react-icons/fa';

const statusCards = [
  {
    title: 'Match Médio',
    value: '82%',
    detail: 'Baseado em 12k combinações',
    icon: FaChartLine,
    accent: '#66A6FF'
  },
  {
    title: 'Missões Concluídas',
    value: '48.3k',
    detail: 'Quests entregues nas últimas 12 semanas',
    icon: FaGamepad,
    accent: '#FF8C00'
  },
  {
    title: 'Equipes Contratadas',
    value: '487',
    detail: 'Empregos preenchidos com talentos prontos',
    icon: FaBriefcase,
    accent: '#C6A667'
  }
];

const questSteps = [
  {
    title: 'Scan de Skills',
    description: 'Radar identifica lacunas com IA multi-fontes',
    icon: FaCompass
  },
  {
    title: 'Quests Personalizadas',
    description: 'Micro-desafios desbloqueados toda semana',
    icon: FaGamepad
  },
  {
    title: 'Patentes & Match',
    description: 'Badges ativam recomendações de carreira e vagas',
    icon: FaTrophy
  }
];

const personaTracks = [
  {
    label: 'Candidatos',
    description: 'Trilhas interativas com XP, mentorias ao vivo e score de prontidão.',
    icon: FaRocket,
    accent: '#66A6FF',
    href: '/candidate/dashboard'
  },
  {
    label: 'Empresas',
    description: 'Match instantâneo, squads prontos e missão de upskilling.',
    icon: FaBriefcase,
    accent: '#C6A667',
    href: '/employer/dashboard'
  },
  {
    label: 'Mentores',
    description: 'Crie micro-missões, monetize expertise e acompanhe impacto real.',
    icon: FaGraduationCap,
    accent: '#3BAA78',
    href: '/trainer/dashboard'
  }
];

const badgeBelt = [
  {
    title: 'Ready to Launch',
    subtitle: 'Score acima de 70%',
    icon: FaFlagCheckered,
    accent: '#FFD166'
  },
  {
    title: 'Mentor Radar',
    subtitle: 'Feedback aplicado em 3 ciclos',
    icon: FaMagic,
    accent: '#A855F7'
  },
  {
    title: 'Squad Hero',
    subtitle: 'Match perfeito com equipe parceira',
    icon: FaShieldAlt,
    accent: '#4ADE80'
  },
  {
    title: 'Galaxy Builder',
    subtitle: 'Empresa cria jornada completa de skills',
    icon: FaLayerGroup,
    accent: '#60A5FA'
  }
];

export default function Landing() {
  return (
    <div className="space-bg min-h-screen text-white cosmic-grid">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient" />
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="flex-1">
            <div className="badge-chip mb-6">Nova temporada • Edição Orbital</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Plataforma gamificada para acelerar carreiras tech e missões de talento.
            </h1>
            <p className="text-lg md:text-xl mt-6 text-slate-200 max-w-xl">
              RocketSkills conecta candidatos, empresas e mentores em uma experiência imersiva.
              Cada clique destrava dados reais, quests relevantes e decisões com confiança.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/skill-gap">
                <button className="btn-primary text-lg">
                  <FaRocket />
                  Fazer meu scan gratuito
                </button>
              </Link>
              <Link href="/skill-gap-radar">
                <button className="btn-secondary text-lg">
                  <FaRegStar />
                  Ver radar em ação
                </button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {statusCards.map(card => (
                <div key={card.title} className="stat-card">
                  <div className="stat-icon" style={{ color: card.accent }}>
                    <card.icon />
                  </div>
                  <div className="text-3xl font-extrabold">{card.value}</div>
                  <p className="text-xs uppercase tracking-wide text-slate-300">{card.title}</p>
                  <span className="text-xs text-slate-400">{card.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="mission-panel">
              <div className="mission-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mission Control</p>
                  <h2 className="text-2xl font-bold mt-1">Pronto para a decolagem</h2>
                </div>
                <div className="glow-ring">
                  <FaSatellite />
                </div>
              </div>
              <div className="mission-body">
                {questSteps.map(step => (
                  <div key={step.title} className="mission-step">
                    <div className="step-icon">
                      <step.icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="text-xs text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mission-footer">
                <div>
                  <p className="text-xs uppercase text-slate-400">Streak coletiva</p>
                  <p className="text-3xl font-bold">12 dias</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400">Boost Mentoria</p>
                  <p className="text-3xl font-bold">+37%</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-400">Squads ativos</p>
                  <p className="text-3xl font-bold">58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="badge-grid">
          {badgeBelt.map(badge => (
            <div key={badge.title} className="badge-card">
              <div className="badge-icon" style={{ background: badge.accent }}>
                <badge.icon />
              </div>
              <div>
                <p className="text-lg font-bold">{badge.title}</p>
                <p className="text-sm text-slate-300">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="section-heading">
          <div>
            <p className="section-tag">Experiência gamificada</p>
            <h2 className="section-title">Escolha sua missão</h2>
          </div>
          <p className="section-description">
            Cada jornada foi desenhada com game design real, telemetria e storytelling para criar fluxo contínuo entre aprender,
            aplicar e contratar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {personaTracks.map(track => (
            <div key={track.label} className="persona-card" style={{ borderColor: track.accent }}>
              <div className="persona-icon" style={{ color: track.accent }}>
                <track.icon />
              </div>
              <h3 className="text-2xl font-bold mb-2">{track.label}</h3>
              <p className="text-sm text-slate-300 flex-1">{track.description}</p>
              <Link href={track.href} className="persona-link">
                Entrar no hub
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="section-heading">
          <div>
            <p className="section-tag">Telemetria de progresso</p>
            <h2 className="section-title">Fluxo do jogador</h2>
          </div>
          <Link href="/learning-path" className="section-link">
            Ver trilhas completas
          </Link>
        </div>
        <div className="timeline">
          {[
            {
              title: 'Onboarding Imersivo',
              description: 'Score instantâneo com IA, validação em portfólio e squads sugeridos.',
              icon: FaUsers,
              highlight: 'Duração média: 9 minutos'
            },
            {
              title: 'Ciclos de Experimento',
              description: 'Quests com pair programming, live reviews e XP aplicado.',
              icon: FaMagic,
              highlight: 'Taxa de conclusão: 92%'
            },
            {
              title: 'Match & Deployment',
              description: 'Recomendações acionáveis, contratos e métricas de impacto.',
              icon: FaFlagCheckered,
              highlight: 'Contratações em 21 dias'
            }
          ].map(step => (
            <div key={step.title} className="timeline-step">
              <div className="step-badge">
                <step.icon />
              </div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
                <span className="step-highlight">{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="cta-card">
          <div>
            <p className="section-tag">Pronto para o próximo capítulo?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ative sua central de missões e acompanhe o impacto em tempo real.
            </h2>
            <p className="text-slate-300 text-lg">
              Transforme currículos em narrativas, entrevistas em co-criação e relatórios em painéis vivos.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/ready-to-lauch">
              <button className="btn-primary text-lg">
                <FaRocket />
                Receber meu passaporte
              </button>
            </Link>
            <Link href="/stats">
              <button className="btn-secondary text-lg">
                <FaChartLine />
                Explorar impacto
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
