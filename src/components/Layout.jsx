import { useState } from "react";
import Link from "next/link";
import {
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaTimes,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const hubLinks = [
    {
      label: "Candidatos",
      description: "Passaporte espacial e trilhas de aprendizagem",
      icon: FaRocket,
      accent: "#6366F1",
      href: "/candidate/dashboard",
    },
    {
      label: "Empresas",
      description: "Painel de controle e telemetria de squads",
      icon: FaBriefcase,
      accent: "#06B6D4",
      href: "/employer/dashboard",
    },
    {
      label: "Formadores",
      description: "Construa trilhas e monetize expertise",
      icon: FaGraduationCap,
      accent: "#8B5CF6",
      href: "/trainer/dashboard",
    },
  ];

  return (
    <>
      {/* MENU HAMBURGUER FIXO NO TOPO ESQUERDO */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 z-30 flex items-center justify-center w-12 h-12 rounded-xl bg-[#171C35] border border-white/10 hover:bg-[#1A2038] hover:border-white/20 transition-all shadow-lg"
      >
        <FaBars className="text-white text-lg" />
      </button>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR - ABRE DA ESQUERDA PARA DIREITA */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-[#13182E] border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-xl font-bold text-white">Escolha seu Hub</h2>
              <p className="text-sm text-slate-400 mt-1">Acesse sua plataforma</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <FaTimes className="text-white" />
            </button>
          </div>

          {/* Hub Links */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {hubLinks.map((hub) => (
              <Link
                key={hub.label}
                href={hub.href}
                onClick={() => setIsSidebarOpen(false)}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#1A2038] border border-white/10 p-6 hover:border-white/20 transition-all">
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${hub.accent}15 0%, transparent 100%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background: `${hub.accent}20`,
                        color: hub.accent,
                      }}
                    >
                      <hub.icon className="text-xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {hub.label}
                        </h3>
                        <FaChevronRight
                          className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                          style={{ color: hub.accent }}
                        />
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {hub.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO DAS PÁGINAS */}
      <div>{children}</div>
    </>
  );
}