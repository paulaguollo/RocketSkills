import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaRobot, FaBolt, FaCheckCircle } from 'react-icons/fa';

export default function SkillGapRadar() {
  const [animateChart, setAnimateChart] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 400);
    const interval = setInterval(() => {
      setAnalysisStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const skills = [
    { name: 'JavaScript', available: 85, demanded: 90 },
    { name: 'React', available: 70, demanded: 85 },
    { name: 'Node.js', available: 60, demanded: 80 },
    { name: 'SQL', available: 50, demanded: 75 },
    { name: 'Python', available: 30, demanded: 70 },
    { name: 'Git', available: 80, demanded: 85 },
    { name: 'Docker', available: 40, demanded: 65 },
    { name: 'AWS', available: 35, demanded: 70 },
  ];

  const missingSkills = skills.filter((skill) => skill.available < skill.demanded);

  const matchScore = Math.round(
    skills.reduce((acc, skill) => acc + Math.min((skill.available / skill.demanded) * 100, 100), 0) / skills.length
  );

  const aiSteps = [
    'Analisando gaps de competências do mercado',
    'Cruzando requisitos de vagas com skills disponíveis',
    'Identificando trilhas de aprendizagem necessárias',
    'Conectando candidatos, vagas e formadores',
  ];

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container space-y-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="outline-button">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div className="section-heading">
              <span>Radar de rotas</span>
              <h1>Análise de Gaps de competências com IA</h1>
              <p className="text-[var(--pathport-slate)]">
                A inteligência artificial cruza o que o mercado exige com as skills disponíveis e conecta as três pontas: candidatos, vagas e formadores.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">

            {/* CENTRO - RADAR */}
            <div className="lg:col-span-6 pathport-card">
              <div className="section-heading">
                <h2>Maiores gaps de formação do mercado</h2>
              </div>
              
              {/* LISTA DE SKILLS COM GAP - ORDENADO POR MAIOR GAP */}
              <div className="mt-6 space-y-2">
                <div className="space-y-3">
                  {missingSkills
                    .sort((a, b) => (b.demanded - b.available) - (a.demanded - a.available))
                    .map((skill, index) => {
                      const gap = skill.demanded - skill.available;
                      const isTopGap = index === 0;
                      
                      return (
                        <div 
                          key={skill.name} 
                          className={`ticket-card ${isTopGap ? 'border-2 border-[var(--pathport-crimson)]' : ''}`}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              {isTopGap && <span className="text-lg">🔥</span>}
                              <p className="font-semibold">{skill.name}</p>
                            </div>
                            <span className={`text-sm font-bold ${isTopGap ? 'text-[var(--pathport-crimson)] text-lg' : 'text-[var(--pathport-crimson)]'}`}>
                              Faltam {gap}%
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-2 bg-[var(--pathport-border)] rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[var(--pathport-teal)]"
                                style={{ width: `${(skill.available / skill.demanded) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-[var(--pathport-slate)]">
                              {Math.round((skill.available / skill.demanded) * 100)}%
                            </span>
                          </div>
                          {isTopGap && (
                            <p className="text-xs text-[var(--pathport-crimson)] mt-2">
                              Maior carência no mercado - alta demanda por formadores
                            </p>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* SIDEBAR DIREITA - AI */}
            <div className="lg:col-span-6 pathport-card space-y-4">
              <div className="section-heading">
                <h2>Matching inteligente</h2>
              </div>
              <div className="ai-steps">
                {aiSteps.map((step, index) => (
                  <div key={step} className={`ai-step ${analysisStep === index ? 'active' : ''}`}>
                    <strong>
                      {analysisStep === index ? (
                        <FaRobot className="animate-pulse text-[var(--pathport-crimson)]" />
                      ) : analysisStep > index ? (
                        <FaCheckCircle className="text-[var(--pathport-teal)]" />
                      ) : (
                        <FaBolt className="text-[var(--pathport-muted)]" />
                      )}
                    </strong>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">
                        {index === 0 && 'Mapeando skills exigidas vs disponíveis no mercado atual.'}
                        {index === 1 && 'Comparando requisitos de centenas de vagas com portfólios.'}
                        {index === 2 && 'Sugerindo cursos e mentores para fechar os gaps.'}
                        {index === 3 && 'Conectando automaticamente as três pontas do ecossistema.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ticket-card mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)] mb-2">
                  Como funciona
                </p>
                <div className="space-y-2 text-sm text-[var(--pathport-slate)]">
                  <p>🎯 <strong>Candidatos</strong> veem suas lacunas</p>
                  <p>💼 <strong>Empresas</strong> encontram talentos prontos</p>
                  <p>🎓 <strong>Formadores</strong> criam trilhas sob demanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}