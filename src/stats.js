import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaRocket,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
  FaClock,
  FaRegStar,
  FaGlobeAmericas,
  FaUserGraduate,
  FaPeopleCarry,
  FaCoins
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StatsImpactDashboard() {
  const [timeRange, setTimeRange] = useState('6m');

  const [platformStats] = useState({
    totalUsers: 15678,
    activeCandidates: 8945,
    activeEmployers: 342,
    activeTrainers: 156,
    totalJobs: 1234,
    jobsFilled: 487,
    avgMatchScore: 82,
    avgTimeToHire: 21,
    skillsLearned: 45623,
    completionRate: 78
  });

  const matchData = [
    { month: 'Jan', avgMatch: 68, jobs: 45 },
    { month: 'Fev', avgMatch: 72, jobs: 58 },
    { month: 'Mar', avgMatch: 75, jobs: 67 },
    { month: 'Abr', avgMatch: 78, jobs: 78 },
    { month: 'Mai', avgMatch: 80, jobs: 89 },
    { month: 'Jun', avgMatch: 82, jobs: 95 }
  ];

  const skillsData = [
    { name: 'JavaScript', count: 3245 },
    { name: 'React', count: 2890 },
    { name: 'Python', count: 2567 },
    { name: 'Node.js', count: 2134 },
    { name: 'Docker', count: 1876 },
    { name: 'AWS', count: 1654 },
    { name: 'TypeScript', count: 1432 },
    { name: 'SQL', count: 1298 }
  ];

  const userDistribution = [
    { name: 'Candidatos', value: 8945, color: '#66A6FF' },
    { name: 'Empresas', value: 342, color: '#C6A667' },
    { name: 'Formadores', value: 156, color: '#3BAA78' }
  ];

  const impactMetrics = [
    {
      icon: FaClock,
      title: 'Redução no Tempo de Contratação',
      value: '-42%',
      description: 'Média de 21 dias vs 36 dias tradicional',
      color: '#3BAA78'
    },
    {
      icon: FaTrophy,
      title: 'Taxa de Sucesso em Contratações',
      value: '87%',
      description: 'Candidatos permanecem 12+ meses',
      color: '#C6A667'
    },
    {
      icon: FaUsers,
      title: 'Crescimento de Candidatos',
      value: '+156%',
      description: 'Últimos 6 meses',
      color: '#66A6FF'
    },
    {
      icon: FaRegStar,
      title: 'Satisfação dos Empregadores',
      value: '4.8/5',
      description: 'Baseado em 342 avaliações',
      color: '#FF8C00'
    }
  ];

  const socialImpact = [
    {
      metric: 'Jovens qualificados',
      value: '4,567',
      icon: FaUserGraduate,
      change: '+234%'
    },
    {
      metric: 'Redução do desemprego tech',
      value: '18.1% → 8.3%',
      icon: FaChartLine,
      change: '-54%'
    },
    {
      metric: 'Famílias impactadas',
      value: '12,450+',
      icon: FaPeopleCarry,
      change: '+189%'
    },
    {
      metric: 'Aumento salarial médio',
      value: '+67%',
      icon: FaCoins,
      change: 'R$ 3.2k → R$ 5.4k'
    }
  ];

  return (
    <div className="space-bg min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <button className="btn-secondary">
                <FaArrowLeft />
                Voltar
              </button>
            </Link>
            <div>
              <h1 
                className="text-4xl md:text-5xl font-extrabold"
                style={{ 
                  color: '#C6A667',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Mission Impact Dashboard
              </h1>
              <p className="text-lg mt-1" style={{ color: '#D9D9D9' }}>
                Transformando o mercado de trabalho tech
              </p>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2">
            {['1m', '3m', '6m', '1y', 'all'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: timeRange === range ? '#66A6FF' : 'transparent',
                  color: timeRange === range ? 'white' : '#D9D9D9',
                  border: `2px solid ${timeRange === range ? '#66A6FF' : '#D9D9D9'}`
                }}
              >
                {range === '1m' ? '1 mês' : range === '3m' ? '3 meses' : range === '6m' ? '6 meses' : range === '1y' ? '1 ano' : 'Tudo'}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <FaUsers className="text-3xl mx-auto mb-2" style={{ color: '#66A6FF' }} />
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {platformStats.totalUsers.toLocaleString()}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Usuários Totais
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <FaBriefcase className="text-3xl mx-auto mb-2" style={{ color: '#C6A667' }} />
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {platformStats.totalJobs.toLocaleString()}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Vagas Publicadas
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <FaTrophy className="text-3xl mx-auto mb-2" style={{ color: '#3BAA78' }} />
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#3BAA78',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {platformStats.jobsFilled}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Contratações
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <FaRegStar className="text-3xl mx-auto mb-2" style={{ color: '#C6A667' }} />
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#C6A667',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {platformStats.avgMatchScore}%
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Match Médio
            </div>
          </div>

          <div className="card-rocket text-center hover:scale-105 transition-transform">
            <FaGraduationCap className="text-3xl mx-auto mb-2" style={{ color: '#66A6FF' }} />
            <div 
              className="text-3xl font-extrabold mb-1"
              style={{ 
                color: '#66A6FF',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {platformStats.skillsLearned.toLocaleString()}
            </div>
            <div className="text-xs" style={{ color: '#1E3A8A' }}>
              Skills Aprendidas
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="card-rocket hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: metric.color }}
                >
                  <metric.icon className="text-2xl text-white" />
                </div>
                <div 
                  className="text-3xl font-extrabold"
                  style={{ 
                    color: metric.color,
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {metric.value}
                </div>
              </div>
              <div className="font-bold mb-1" style={{ color: '#0B1A32' }}>
                {metric.title}
              </div>
              <div className="text-xs" style={{ color: '#1E3A8A' }}>
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Match Score Evolution */}
          <div className="card-rocket">
            <h2 
              className="text-xl font-extrabold mb-4"
              style={{ 
                color: '#0B1A32',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Evolução do Match Score
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={matchData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
                <XAxis dataKey="month" stroke="#1E3A8A" />
                <YAxis stroke="#1E3A8A" />
                <Tooltip 
                  contentStyle={{ 
                    background: '#F5EEDC', 
                    border: '2px solid #C6A667',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="avgMatch" 
                  stroke="#3BAA78" 
                  strokeWidth={3}
                  name="Match Médio (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* User Distribution */}
          <div className="card-rocket">
            <h2 
              className="text-xl font-extrabold mb-4"
              style={{ 
                color: '#0B1A32',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Distribuição de Usuários
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: '#F5EEDC', 
                    border: '2px solid #C6A667',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Skills Chart */}
        <div className="card-rocket mb-8">
          <h2 
            className="text-xl font-extrabold mb-4"
            style={{ 
              color: '#0B1A32',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Skills Mais Aprendidas
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
              <XAxis dataKey="name" stroke="#1E3A8A" />
              <YAxis stroke="#1E3A8A" />
              <Tooltip 
                contentStyle={{ 
                  background: '#F5EEDC', 
                  border: '2px solid #C6A667',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="#66A6FF" name="Aprendizados" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Social Impact Section */}
        <div 
          className="card-rocket mb-8"
          style={{
            background: 'linear-gradient(135deg, #3BAA78 0%, #2d8a60 100%)',
            color: 'white'
          }}
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaGlobeAmericas className="text-3xl" />
              <h2
                className="text-3xl font-extrabold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Impacto Social
              </h2>
            </div>
            <p className="text-lg opacity-90">
              Transformando vidas através da tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialImpact.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-lg"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <item.icon className="text-4xl mb-3 mx-auto" />
                <div
                  className="text-3xl font-extrabold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.value}
                </div>
                <div className="text-sm mb-2 opacity-90">
                  {item.metric}
                </div>
                <div 
                  className="text-xs font-bold px-2 py-1 rounded inline-block"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                >
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="card-rocket">
          <h2 
            className="text-2xl font-extrabold mb-6 text-center"
            style={{ 
              color: '#0B1A32',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Histórias de Sucesso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg text-center"
              style={{ background: 'rgba(102, 166, 255, 0.1)' }}
            >
              <FaRocket className="text-5xl mb-3 mx-auto" style={{ color: '#66A6FF' }} />
              <div
                className="text-2xl font-extrabold mb-2"
                style={{
                  color: '#66A6FF',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Ana Silva
              </div>
              <p className="text-sm mb-3" style={{ color: '#1E3A8A' }}>
                &ldquo;De desempregada a Full Stack em 6 meses. Salário aumentou 180%!&rdquo;
              </p>
              <div className="text-xs" style={{ color: '#D9D9D9' }}>
                Contratada pela TechCorp
              </div>
            </div>

            <div
              className="p-6 rounded-lg text-center"
              style={{ background: 'rgba(198, 166, 103, 0.1)' }}
            >
              <FaBriefcase className="text-5xl mb-3 mx-auto" style={{ color: '#C6A667' }} />
              <div
                className="text-2xl font-extrabold mb-2"
                style={{
                  color: '#C6A667',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                TechCorp
              </div>
              <p className="text-sm mb-3" style={{ color: '#1E3A8A' }}>
                &ldquo;Reduzimos o time-to-hire de 45 para 18 dias. Match perfeito!&rdquo;
              </p>
              <div className="text-xs" style={{ color: '#D9D9D9' }}>
                342 vagas preenchidas
              </div>
            </div>

            <div
              className="p-6 rounded-lg text-center"
              style={{ background: 'rgba(59, 170, 120, 0.1)' }}
            >
              <FaGraduationCap className="text-5xl mb-3 mx-auto" style={{ color: '#3BAA78' }} />
              <div
                className="text-2xl font-extrabold mb-2"
                style={{
                  color: '#3BAA78',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Prof. Carlos
              </div>
              <p className="text-sm mb-3" style={{ color: '#1E3A8A' }}>
                &ldquo;Criei 12 cursos com 95% de empregabilidade. Renda triplicou!&rdquo;
              </p>
              <div className="text-xs" style={{ color: '#D9D9D9' }}>
                Top 1% trainers
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="mt-8 card-rocket text-center"
          style={{
            background: 'linear-gradient(135deg, #C6A667 0%, #FFD700 100%)',
            border: '3px solid #C6A667'
          }}
        >
          <FaRocket className="text-6xl mx-auto mb-4" style={{ color: '#0B1A32' }} />
          <h2 
            className="text-3xl font-extrabold mb-4"
            style={{ 
              color: '#0B1A32',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Faça Parte Desta Transformação
          </h2>
          <p className="text-lg mb-6" style={{ color: '#1E3A8A' }}>
            Junte-se a milhares de profissionais que já mudaram suas vidas
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/candidate/dashboard">
              <button className="btn-primary text-lg px-8 py-4">
                Sou Candidato
              </button>
            </Link>
            <Link href="/employer/dashboard">
              <button className="btn-primary text-lg px-8 py-4">
                Sou Empresa
              </button>
            </Link>
            <Link href="/trainer/dashboard">
              <button className="btn-primary text-lg px-8 py-4">
                Sou Formador
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}