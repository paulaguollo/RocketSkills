import { useState } from 'react';
import { FaPlus, FaUsers, FaStamp, FaCity } from 'react-icons/fa';

const crewPipelines = [
  { route: 'Full Stack remoto - Lisboa', applicants: 42, match: 86, eta: '18 dias', mood: 'Verde' },
  { route: 'DevOps híbrido - Porto', applicants: 27, match: 78, eta: '25 dias', mood: 'Ambar' },
  { route: 'UX Research - São Paulo', applicants: 33, match: 81, eta: '21 dias', mood: 'Verde' },
];

const conciergeAlerts = [
  {
    title: 'Candidatos prontos para entrevista',
    detail: '3 perfis com carimbos completos aguardam agendamento com a equipa de produto.',
  },
  {
    title: 'Rever requisitos',
    detail: 'Atualize o idioma exigido na vaga Full Stack para abrir o funil para candidatos da LATAM.',
  },
  {
    title: 'Mentoria sugerida',
    detail: 'Emparelhe Joana Ribeiro com o hub de Lisboa para acelerar o onboarding.',
  },
];

export default function EmployerDashboard() {
  const [newJob, setNewJob] = useState({ title: '', location: '', squad: '', visas: '' });

  return (
    <div className="journey-bg min-h-screen">
      <main className="pathport-shell">
        <div className="terminal-container">
          {/* HEADER */}
          <header className="pathport-card space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="tag-chip">Painel do empregador</div>
                <h1 className="text-4xl">PathPort – Visão geral da TechCorp</h1>
                <p className="text-[var(--pathport-slate)]">
                  Todas as vagas, candidatos e carimbos de skills ficam concentrados nesta única tela. 
                  O PathPort organiza o funil de contratação para que a sua equipa não se perca entre abas e sistemas diferentes.
                </p>
              </div>
            </div>

            <div className="journey-grid">
              {[
                { label: 'Vagas abertas', value: 12 },
                { label: 'Candidatos em análise', value: 487 },
                { label: 'Match médio', value: '82%' },
                { label: 'Tempo médio até contratação', value: '21 dias' },
              ].map((stat) => (
                <div key={stat.label} className="ticket-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--pathport-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* LISTA DE VAGAS + CRIAR VAGA */}
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Vagas em andamento</span>
                <h2>Funil de recrutamento</h2>
              </div>

              <div className="space-y-4">
                {crewPipelines.map((pipeline) => (
                  <div key={pipeline.route} className="ticket-card space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">{pipeline.route}</h3>
                    </div>
                    <p className="text-sm text-[var(--pathport-slate)]">
                      {pipeline.applicants} passaportes em análise
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="status-pill success">Match {pipeline.match}%</span>
                      <span className="status-pill warning">Tempo estimado {pipeline.eta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-5">
              <div className="section-heading">
                <span>Nova vaga</span>
                <h2>Criar vaga sem sair do painel</h2>
              </div>

              <form className="space-y-3">
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Cargo"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Local ou formato (remoto, híbrido...)"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
                <input
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Equipa responsável"
                  value={newJob.squad}
                  onChange={(e) => setNewJob({ ...newJob, squad: e.target.value })}
                />
                <textarea
                  className="outline-none w-full border border-[var(--pathport-border)] rounded-2xl px-4 py-3"
                  placeholder="Carimbos obrigatórios (ex: React, inglês, liderança)"
                  value={newJob.visas}
                  onChange={(e) => setNewJob({ ...newJob, visas: e.target.value })}
                />
                <button type="button" className="boarding-button w-full">
                  <FaPlus />
                  Publicar vaga
                </button>
              </form>
            </div>
          </section>

          {/* MÉTRICAS RÁPIDAS */}
          <section className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Equipes em recrutamento',
                value: '8 grupos',
                icon: FaUsers,
                detail: 'Gestores e mentores a validar perfis em tempo real.',
              },
              {
                title: 'Vistos aprovados hoje',
                value: '24 carimbos',
                icon: FaStamp,
                detail: 'Skills validadas por recrutadores e especialistas.',
              },
              {
                title: 'Hubs ativos',
                value: '6 cidades',
                icon: FaCity,
                detail: 'Processos de contratação a decorrer em múltiplas regiões.',
              },
            ].map((card) => (
              <div key={card.title} className="pathport-card">
                <div className="flex items-center gap-3">
                  <card.icon className="text-3xl text-[var(--pathport-crimson)]" />
                  <div>
                    <p className="text-sm text-[var(--pathport-muted)]">{card.title}</p>
                    <p className="text-2xl font-bold">{card.value}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--pathport-slate)] mt-3">{card.detail}</p>
              </div>
            ))}
          </section>

          {/* ALERTAS + AÇÕES RÁPIDAS */}
          <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Assistente PathPort</span>
                <h2>Alertas e recomendações</h2>
              </div>
              <div className="ai-steps">
                {conciergeAlerts.map((alert, index) => (
                  <div
                    key={alert.title}
                    className={`ai-step ${index === 0 ? 'active' : ''}`}
                  >
                    <strong>{index + 1}</strong>
                    <div>
                      <p className="font-semibold">{alert.title}</p>
                      <p className="text-sm text-[var(--pathport-slate)]">{alert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pathport-card space-y-4">
              <div className="section-heading">
                <span>Checklist do recrutador</span>
                <h2>Ações rápidas</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Enviar briefing para a vaga de Product Manager',
                  'Validar orçamento de relocação',
                  'Confirmar intérprete para entrevista internacional',
                ].map((task) => (
                  <label
                    key={task}
                    className="flex items-center gap-3 ticket-card cursor-pointer"
                  >
                    <input type="checkbox" className="w-5 h-5" />
                    <span>{task}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
