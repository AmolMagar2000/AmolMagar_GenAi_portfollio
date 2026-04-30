export default function About() {
  return (
    <section id="about" style={{
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Left: image / visual */}
          <div style={{ position: 'relative' }}>
            {/* Profile visual */}
            <div style={{
              width: '340px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(201,162,39,0.25)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(201,162,39,0.08)',
            }}>
              {/* Gradient background with initials */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(145deg, #1a1a2e 0%, #0e0e1a 40%, #1a1025 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '120px', height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(201,162,39,0.05))',
                  border: '2px solid rgba(201,162,39,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#c9a227',
                  animation: 'pulse-glow 4s ease-in-out infinite',
                }}>
                  AM
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: '0 2rem',
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#f0f0f8',
                    marginBottom: '0.25rem',
                  }}>
                    Amol Magar
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#c9a227',
                    letterSpacing: '0.1em',
                  }}>
                    GenAI Engineer
                  </div>
                </div>
                {/* Tech tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  padding: '0 1.5rem',
                  justifyContent: 'center',
                }}>
                  {['LangChain', 'FastAPI', 'RAG', 'Python'].map(tag => (
                    <span key={tag} style={{
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(201,162,39,0.1)',
                      border: '1px solid rgba(201,162,39,0.2)',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      color: '#c9a227',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{
              position: 'absolute',
              top: '-20px', right: '-20px',
              padding: '0.75rem 1rem',
              background: 'rgba(14,14,26,0.95)',
              border: '1px solid rgba(61,214,140,0.3)',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)',
              animation: 'float 5s ease-in-out infinite',
            }}>
              <div style={{ fontSize: '0.65rem', color: '#3dd68c', fontFamily: 'JetBrains Mono', letterSpacing: '0.08em' }}>ORACLE CERTIFIED</div>
              <div style={{ fontSize: '0.75rem', color: '#f0f0f8', fontWeight: 600, marginTop: '0.1rem' }}>GenAI Professional</div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '30px', right: '-30px',
              padding: '0.75rem 1rem',
              background: 'rgba(14,14,26,0.95)',
              border: '1px solid rgba(94,167,214,0.3)',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)',
              animation: 'float 6s ease-in-out infinite reverse',
            }}>
              <div style={{ fontSize: '0.65rem', color: '#5ea7d6', fontFamily: 'JetBrains Mono', letterSpacing: '0.08em' }}>LOCATION</div>
              <div style={{ fontSize: '0.75rem', color: '#f0f0f8', fontWeight: 600, marginTop: '0.1rem' }}>Pune, India 🇮🇳</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="section-label">About Me</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}>
              Building the future,<br />
              <span style={{ color: '#c9a227', fontStyle: 'italic' }}>one agent at a time.</span>
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
            }}>
              I'm a Software Engineer at <strong style={{ color: '#e4bb4f' }}>OMFYS Technologies</strong>, 
              specializing in Generative AI and backend architecture. I build production-grade AI systems 
              that solve real business challenges — from RAG pipelines handling employee queries at scale, 
              to autonomous agents that automate end-to-end recruitment workflows.
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.9,
              marginBottom: '2rem',
            }}>
              My work spans LLM integration (GPT-4o, Gemini, Llama, Mistral), vector databases, 
              MCP microservices, and cloud deployments on AWS and Azure. I hold a 
              <strong style={{ color: '#e4bb4f' }}> PG-DAC from CDAC Mumbai</strong> and 
              am certified as an Oracle Cloud GenAI Professional.
            </p>

            {/* Education */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {[
                { icon: '🎓', title: 'PG-DAC', sub: 'CDAC Mumbai · 2022–2023' },
                { icon: '🎓', title: 'B.E. Engineering', sub: 'Pravara Rural Engineering · 2017–2021' },
                { icon: '🏅', title: 'Oracle GenAI Professional', sub: 'Oracle · 2024' },
                { icon: '🏅', title: 'Node.js & Express', sub: 'IBM · 2024' },
              ].map(item => (
                <div key={item.title} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(201,162,39,0.04)',
                  border: '1px solid rgba(201,162,39,0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,162,39,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(201,162,39,0.25)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(201,162,39,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(201,162,39,0.1)'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#f0f0f8' }}>{item.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
