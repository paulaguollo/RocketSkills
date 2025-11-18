import { useMemo } from "react";
import { FaPassport, FaRoute, FaBell } from "react-icons/fa";
import Image from "next/image";

const skills = [
  { name: "React", candidate: 0, required: 100 },
  { name: "Node.js", candidate: 0, required: 100 },
  { name: "UX Writing", candidate: 0, required: 60 },
  { name: "Criatividade", candidate: 95, required: 20 },
  { name: "JavaScript", candidate: 95, required: 85 },
  { name: "MongoDB", candidate: 90, required: 85 },
];

const stamps = [
  {
    label: "Tech Visa",
    country: "Canadá",
    status: "Hard skill",
    color: "#9E2A2B",
  },
  {
    label: "People Seal",
    country: "Portugal",
    status: "Soft skill",
    color: "#E09F3E",
  },
  {
    label: "Leadership Tag",
    country: "Irlanda",
    status: "Trilha em progresso",
    color: "#335C67",
  },
  {
    label: "Product Trail",
    country: "Chile",
    status: "Mentoria ativa",
    color: "#8C4A3F",
  },
];

// 🔹 AGORA: rotas do concierge = cursos / trilhas para aumentar o match
const learningRoutes = [
  {
    title: "React",
    impact: "+18 pontos no match estimado",
    visas: ["React", "Componentização", "Hooks"],
    status: "Ideal para os próximos 30 dias",
  },
  {
    title: "Node.js + APIs REST",
    impact: "+15 pontos no match backend",
    visas: ["Node.js", "APIs REST", "Autenticação"],
    status: "Recomendado antes de aplicar para vagas fullstack",
  },
  {
    title: "UX Writing",
    impact: "+8 pontos em vagas voltadas a produto",
    visas: ["UX Writing", "Microcopy", "Fluxos de onboarding"],
    status: "Complementa bem o teu background de design",
  },
];

// 🔹 NOVO: possíveis destinos = vagas sugeridas
const destinations = [
  {
    title: "Full Stack Júnior",
    match: 62,
    visas: ["JavaScript", "MongoDB", "React"],
    status: "Remoto",
  },
  {
    title: "Frontend Júnior",
    match: 58,
    visas: ["JavaScript", "UX", "Comunicação"],
    status: "Porto",
  },
  {
    title: "Junior Developer",
    match: 55,
    visas: ["JavaScript", "Inglês", "Trabalho em equipe"],
    status: "Lisboa",
  },
];

const conciergeSteps = [
  "Validando identidade e idiomas",
  "Atualizando vistos de tecnologia",
  "Comparando rotas com empresas parceiras",
  "Liberando briefing de entrevista",
];

export default function CandidateDashboard() {
  const matchScore = useMemo(() => {
    return Math.round(
      (skills.reduce(
        (acc, skill) => acc + Math.min(skill.candidate / skill.required, 1),
        0
      ) /
        skills.length) *
        100
    );
  }, []);

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          {/* HEADER */}
          <header className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="passport-card space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[var(--pathport-muted)]">
                    Passaporte do candidato
                  </p>
                  <h1 className="text-4xl">Joana Ribeiro</h1>
                  <p className="text-[var(--pathport-slate)]">
                    Product Designer → FullStack Developer
                  </p>
                </div>
                <FaPassport className="text-5xl text-[var(--pathport-crimson)]" />
              </div>

              {/* CARIMBOS ADQUIRIDOS */}
              <div className="ticket-card text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">
                  Carimbos adquiridos
                </p>

                {/* PRIMEIRA LINHA */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Image
                    src="/6.png"
                    alt="Carimbo 6"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <Image
                    src="/7.png"
                    alt="Carimbo 7"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </div>

                {/* SEGUNDA LINHA */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Image
                    src="/1.png"
                    alt="Carimbo 1"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <Image
                    src="/3.png"
                    alt="Carimbo 3"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <Image
                    src="/4.png"
                    alt="Carimbo 4"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* RADAR / MATCH */}
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Radar pessoal</span>
                <h2>Mapa de rotas</h2>
              </div>
              <div className="radar-wrapper">
                <svg viewBox="0 0 220 220">
                  {[30, 50, 70, 90].map((radius) => (
                    <circle
                      key={radius}
                      cx="110"
                      cy="110"
                      r={radius}
                      fill="none"
                      stroke="rgba(51,92,103,0.2)"
                      strokeWidth="1"
                    />
                  ))}
                  {skills.map((skill, index) => {
                    const angle =
                      ((index * 360) / skills.length - 90) * (Math.PI / 180);
                    const x = 110 + Math.cos(angle) * 90;
                    const y = 110 + Math.sin(angle) * 90;
                    return (
                      <line
                        key={skill.name}
                        x1="110"
                        y1="110"
                        x2={x}
                        y2={y}
                        stroke="rgba(51,92,103,0.25)"
                      />
                    );
                  })}
                  {/* Requisito das vagas */}
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle =
                          ((index * 360) / skills.length - 90) *
                          (Math.PI / 180);
                        const distance = (skill.required / 100) * 90;
                        const x = 110 + Math.cos(angle) * distance;
                        const y = 110 + Math.sin(angle) * distance;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="rgba(158,42,43,0.6)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  {/* Nível da Joana */}
                  <polygon
                    points={skills
                      .map((skill, index) => {
                        const angle =
                          ((index * 360) / skills.length - 90) *
                          (Math.PI / 180);
                        const distance = (skill.candidate / 100) * 90;
                        const x = 110 + Math.cos(angle) * distance;
                        const y = 110 + Math.sin(angle) * distance;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="rgba(51,92,103,0.25)"
                    stroke="var(--pathport-teal)"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="ticket-card text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">
                      Chance de embarque
                    </p>
                    <p className="text-3xl font-bold text-[var(--pathport-crimson)]">
                      {matchScore}%
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--pathport-slate)] text-center">
                Comparação entre o nível esperado pelos empregadores e os vistos
                já carimbados.
              </p>
            </div>
          </header>

          {/* ROTAS DO CONCIERGE → CURSOS / TRILHAS */}
          <section className="pathport-card space-y-6 mt-10">
            <div className="section-heading">
              <span>Recomendações da IA para as próximas formações</span>
              <h2>Rotas sugeridas pelo concierge</h2>
            </div>
            <div className="journey-grid">
              {learningRoutes.map((route) => (
                <div key={route.title} className="ticket-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">{route.title}</h3>
                    <span className="status-pill">
                      {route.impact}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--pathport-slate)]">
                    {route.status}
                  </p>
                  <div className="divider-dotted" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)] mb-2">
                    Skills reforçadas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {route.visas.map((visa) => (
                      <span key={visa} className="status-pill warning">
                        {visa}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NOVO BLOCO: POSSÍVEIS DESTINOS → VAGAS */}
          <section className="pathport-card space-y-6 mt-6">
            <div className="section-heading">
              <span>Vagas sugeridas pela IA para o seu perfil</span>
              <h2>Destinos sugeridos pelo concierge</h2>
            </div>
            <div className="journey-grid">
              {destinations.map((job) => (
                <div key={job.title} className="ticket-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaRoute className="text-[var(--pathport-crimson)]" />
                      <h3 className="text-xl">{job.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--pathport-slate)]">
                    {job.status}
                  </p>
                  <div className="divider-dotted" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)] mb-2">
                    Carimbos considerados
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.visas.map((visa) => (
                      <span key={visa} className="status-pill">
                        {visa}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}