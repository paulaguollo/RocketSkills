import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaStamp,
  FaGlobeAmericas,
  FaCompass,
  FaRoute,
  FaClipboardList,
} from "react-icons/fa";

const airportStats = [
  {
    title: "Chances de embarque",
    value: "92%",
    detail: "média entre candidatos prontos",
    icon: FaCompass,
    accent: "var(--pathport-crimson)",
  },
  {
    title: "Vistos concedidos",
    value: "4.781",
    detail: "skills homologadas por mentores",
    icon: FaStamp,
    accent: "var(--pathport-saffron)",
  },
  {
    title: "Rotas corporativas",
    value: "312",
    detail: "empregadores ativos",
    icon: FaSuitcaseRolling,
    accent: "var(--pathport-teal)",
  },
];

const stampShowcase = [
  { label: "Tech Visa", description: "Full Stack", tone: "#9E2A2B" },
  { label: "People Seal", description: "Soft skills", tone: "#E09F3E" },
  { label: "Cloud Transit", description: "DevOps", tone: "#335C67" },
  { label: "Data Route", description: "Analytics", tone: "#8C4A3F" },
];

const experienceStrips = [
  {
    title: "Candidatos",
    description: "Ganham um passaporte com carimbos de hard e soft skills",
    icon: FaPlaneDeparture,
  },
  {
    title: "Empregadores",
    description: "Acompanham terminais de contratação em um único painel",
    icon: FaRoute,
  },
  {
    title: "Formadores",
    description: "Montam trilhas que viram vistos colecionáveis",
    icon: FaClipboardList,
  },
];

export default function Landing() {
  const [passportCode, setPassportCode] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9000 + 1000);
    setPassportCode(`PP-${year}-${random}`);
  }, []);

  return (
    <div className="terminal-container pt-20 pb-20 space-y-20">
  <section className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
    <div className="space-y-10">
      <div className="tag-chip">Bem-vindo ao PathPort</div>

      <h1 className="text-4xl md:text-5xl leading-tight">
        Seu passaporte de habilidades
      </h1>

      <p className="text-lg text-[var(--pathport-slate)]">
        Check-in para o futuro que você merece.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="/skill-gap-radar">
          <button className="boarding-button">
            <FaPlaneDeparture />
            Abrir radar de rotas
          </button>
        </Link>

        <Link href="/stats">
          <button className="outline-button">
            <FaGlobeAmericas />
            Ver impacto
          </button>
        </Link>
      </div>
    </div>

    <div className="passport-card space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--pathport-muted)]">
            Passaporte de skills
          </p>
          <h2 className="text-3xl">PathPort</h2>
        </div>

        <Image
          src="/logo-vertical.png"
          alt="Carimbo PathPort"
          width={60}
          height={60}
          className="select-none"
        />
      </div>

      <p className="text-[var(--pathport-slate)] leading-relaxed">
        Carimbamos habilidades técnicas como vistos e experiências humanas como selos especiais.
      </p>

      <div className="grid grid-cols-5 gap-4 pt-6 border-t border-[var(--pathport-border)]">
        {[1, 3, 4, 6, 7].map((i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={`/${i}.png`}
              alt={`Skill ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
  );
}
