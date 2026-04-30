const projects = [
  {
    id: 1,
    title: 'Payment Reconciliation App',
    subtitle: 'FinTech · Full-Stack',
    description: 'A full-stack payment reconciliation platform with a Python/FastAPI backend and React frontend. Automates the matching and discrepancy detection of financial transactions, enabling finance teams to reconcile payments at scale with real-time dashboards.',
    tech: ['Python', 'FastAPI', 'React', 'JavaScript', 'PostgreSQL'],
    github: 'https://github.com/AmolMagar2000/payment-reconciliationApp',
    live: 'https://payment-reconciliationapp-1.onrender.com/',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop&auto=format',
    badge: '🚀 Live',
    badgeColor: '#3dd68c',
    featured: true,
  },
  {
    id: 2,
    title: 'AutoTutor AI',
    subtitle: 'Agentic · Video Creation',
    description: 'An end-to-end agentic pipeline that converts YouTube URLs or raw transcripts into fully narrated, slide-based tutorial videos — published to YouTube automatically. Built with 4 Python agents, FastAPI SSE streaming, and n8n for automation.',
    tech: ['n8n', 'Python', 'FastAPI', 'React', 'Gemini', 'Sarvam TTS', 'MoviePy'],
    github: 'https://github.com/AmolMagar2000/agentic-video-creation-platform',
    live: null,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop&auto=format',
    badge: '🤖 Agentic',
    badgeColor: '#c9a227',
    featured: true,
  },
  {
    id: 3,
    title: 'Modern ATS',
    subtitle: 'AI Recruitment Platform',
    description: 'Production-grade Applicant Tracking System that eliminates manual resume screening. Features hybrid PDF extraction, Gemini 2.5 Flash scoring via a 100-point rubric, Pinecone vector search, two-tier Redis caching, and Gmail/Calendar MCP integrations.',
    tech: ['Python', 'FastAPI', 'Gemini', 'Pinecone', 'PostgreSQL', 'Redis', 'MCP', 'React'],
    github: 'https://github.com/AmolMagar2000/ATS',
    live: null,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=340&fit=crop&auto=format',
    badge: '⚡ RAG + MCP',
    badgeColor: '#5ea7d6',
    featured: true,
  },
  {
    id: 4,
    title: 'QE Test Automation Suite',
    subtitle: 'AI-Powered QA Tool',
    description: 'AI-powered test case generator and Selenium automation code generator. Upload requirements or user stories and get comprehensive test cases with production-ready Java/TestNG Selenium code, Excel export, and a Streamlit UI.',
    tech: ['Python', 'Streamlit', 'Gemini 2.0 Flash', 'Selenium', 'Java', 'TestNG'],
    github: 'https://github.com/AmolMagar2000/AI-Powered-Test-Case-Generator',
    live: null,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=340&fit=crop&auto=format',
    badge: '🧪 QA AI',
    badgeColor: '#3dd68c',
    featured: false,
  },
  {
    id: 5,
    title: 'Candidate Assessment Platform',
    subtitle: 'Technical Assessment · Agentic',
    description: 'Comprehensive full-stack platform for conducting technical assessments with MCQ and live coding questions. Powered by Mistral LLM for AI-generated question banks, sandboxed Python/Java code execution, and real-time scoring.',
    tech: ['FastAPI', 'Python', 'Streamlit', 'Mistral AI', 'SQLAlchemy', 'SQLite'],
    github: 'https://github.com/AmolMagar2000/Candidate-Assessment-Agentic-Platform',
    live: null,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop&auto=format',
    badge: '⭐ 1 Star',
    badgeColor: '#c9a227',
    featured: false,
  },
  {
    id: 6,
    title: 'TrendEra E-Commerce',
    subtitle: 'Full-Stack · MERN',
    description: 'A feature-rich e-commerce web application built with the MERN stack. Includes product catalog, cart management, user authentication, order processing, and an admin panel for inventory management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/AmolMagar2000/TrendEra_EcommerceApp',
    live: null,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop&auto=format',
    badge: '🛒 MERN',
    badgeColor: '#7b5ea7',
    featured: false,
  },
  {
    id: 7,
    title: 'AniHome',
    subtitle: 'React + Spring Boot',
    description: 'A full-stack anime streaming and home management web application combining a React.js frontend with a Spring Boot backend. Features user authentication, content browsing, and a responsive modern UI.',
    tech: ['React', 'Spring Boot', 'Java', 'JavaScript', 'REST API'],
    github: 'https://github.com/AmolMagar2000/AniHome_React_springBootProj',
    live: null,
    image: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=600&h=340&fit=crop&auto=format',
    badge: '🌸 Full-Stack',
    badgeColor: '#ff6b9d',
    featured: false,
  },
]

function ProjectCard({ project, featured }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '14px',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,162,39,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{
        height: featured ? '220px' : '180px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            filter: 'brightness(0.7) saturate(0.9)',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,46,0.9) 0%, transparent 60%)',
        }} />
        {/* Badge */}
        <div style={{
          position: 'absolute',
          top: '1rem', right: '1rem',
          padding: '0.3rem 0.75rem',
          background: 'rgba(8,8,15,0.8)',
          border: `1px solid ${project.badgeColor}50`,
          borderRadius: '100px',
          fontSize: '0.7rem',
          color: project.badgeColor,
          fontFamily: "'JetBrains Mono', monospace",
          backdropFilter: 'blur(10px)',
        }}>
          {project.badge}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.4rem',
        }}>
          {project.subtitle}
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          color: 'var(--text)',
          marginBottom: '0.75rem',
          fontWeight: 600,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.375rem',
          marginBottom: '1.25rem',
        }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '0.2rem 0.5rem',
              background: 'rgba(201,162,39,0.07)',
              border: '1px solid rgba(201,162,39,0.15)',
              borderRadius: '4px',
              fontSize: '0.65rem',
              color: '#c9a22788',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#8888aa',
              transition: 'all 0.2s',
              fontWeight: 500,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#f0f0f8'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#8888aa'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            ⊹ Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 1rem',
                background: 'rgba(61,214,140,0.08)',
                border: '1px solid rgba(61,214,140,0.25)',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#3dd68c',
                transition: 'all 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(61,214,140,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(61,214,140,0.08)'
              }}
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Featured Work</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}>
            Projects I'm <span style={{ color: '#c9a227', fontStyle: 'italic' }}>proud of</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            marginTop: '1rem',
            maxWidth: '500px',
            margin: '1rem auto 0',
          }}>
            Production-grade AI systems, full-stack apps, and open-source tools
          </p>
        </div>

        {/* Featured projects — 3 cols */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {featured.map(p => <ProjectCard key={p.id} project={p} featured />)}
        </div>

        {/* Other projects — 4 cols */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }}>
          {others.map(p => <ProjectCard key={p.id} project={p} featured={false} />)}
        </div>

        {/* GitHub CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(201,162,39,0.1)',
        }}>
          <a
            href="https://github.com/AmolMagar2000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              border: '1px solid rgba(201,162,39,0.35)',
              borderRadius: '8px',
              color: '#c9a227',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'all 0.3s',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,162,39,0.08)'
              e.currentTarget.style.borderColor = '#c9a227'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,162,39,0.35)'
            }}
          >
            View All 21 Repos on GitHub →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #projects .container > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #projects .container > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #projects .container > div:nth-child(2),
          #projects .container > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
