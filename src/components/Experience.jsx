const experiences = [
  {
    role: 'Software Engineer',
    company: 'OMFYS Technologies India Pvt. Ltd.',
    period: 'Oct 2023 – Present',
    location: 'Pune, India',
    current: true,
    highlights: [
      'Delivered scalable conversational AI solutions for 2+ banking & financial institutions, serving over 10,000 monthly active users.',
      'Built RAG pipelines to resolve internal HR and employee queries with high accuracy and contextual retrieval.',
      'Built an automated ATS using LLM-based semantic filtering, Redis caching, and MCP microservices for Gmail/Calendar/Social integrations, with open-source models served via vLLM.',
      'Enhanced ATS with LangGraph workflows for job posting approvals, pause/resume human-in-loop decisions, webhook-based routing, and multi-channel publishing to LinkedIn.',
      'Integrated Vector Databases (Pinecone, PGVector) for contextual memory and long-term retrieval in complex conversational flows.',
      'Deployed scalable backend infrastructure on AWS and implemented secure SSO authentication via Azure for Microsoft Teams.',
    ],
    tags: ['LangChain', 'LangGraph', 'RAG', 'FastAPI', 'AWS', 'Azure', 'Pinecone', 'vLLM', 'MCP'],
  },
]

const timeline = [
  { year: '2017', label: 'B.E. at Pravara Rural Engineering', icon: '🎓' },
  { year: '2021', label: 'Graduated with Engineering Degree', icon: '🏆' },
  { year: '2022', label: 'Joined CDAC Mumbai for PG-DAC', icon: '🎓' },
  { year: '2023', label: 'Joined OMFYS Technologies', icon: '💼' },
  { year: '2024', label: 'Oracle GenAI Professional Certification', icon: '🏅' },
  { year: '2026', label: 'Building enterprise AI systems', icon: '🚀' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Career</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}>
            Where I've <span style={{ color: '#c9a227', fontStyle: 'italic' }}>worked</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Main experience card */}
          <div>
            {experiences.map(exp => (
              <div key={exp.role} style={{
                background: 'var(--surface)',
                border: '1px solid rgba(201,162,39,0.2)',
                borderRadius: '14px',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Gold accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #c9a227, transparent)',
                }} />

                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.4rem',
                    }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.4rem',
                        color: 'var(--text)',
                        fontWeight: 600,
                      }}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span style={{
                          padding: '0.2rem 0.6rem',
                          background: 'rgba(61,214,140,0.1)',
                          border: '1px solid rgba(61,214,140,0.3)',
                          borderRadius: '100px',
                          fontSize: '0.65rem',
                          color: '#3dd68c',
                          fontFamily: "'JetBrains Mono', monospace",
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}>
                          <span style={{
                            width: '5px', height: '5px',
                            borderRadius: '50%',
                            background: '#3dd68c',
                            animation: 'pulse-glow 2s infinite',
                          }} />
                          Current
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#c9a227',
                      fontWeight: 500,
                    }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.2rem',
                    }}>
                      {exp.period}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                    }}>
                      📍 {exp.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  marginBottom: '2rem',
                }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '0.875rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}>
                      <span style={{
                        color: '#c9a227',
                        marginTop: '0.35rem',
                        flexShrink: 0,
                        fontSize: '0.6rem',
                      }}>◆</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(201,162,39,0.07)',
                      border: '1px solid rgba(201,162,39,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      color: '#c9a227',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
            }}>
              Journey
            </div>
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '28px',
                top: 0, bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, #c9a227, rgba(201,162,39,0.1))',
              }} />

              {timeline.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1.75rem',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: i === timeline.length - 1
                      ? 'rgba(201,162,39,0.15)'
                      : 'rgba(255,255,255,0.04)',
                    border: i === timeline.length - 1
                      ? '2px solid rgba(201,162,39,0.5)'
                      : '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    zIndex: 1,
                    animation: i === timeline.length - 1 ? 'pulse-glow 3s ease-in-out infinite' : 'none',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: '0.75rem' }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#c9a227',
                      marginBottom: '0.25rem',
                    }}>
                      {item.year}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: i === timeline.length - 1 ? '#f0f0f8' : 'var(--text-muted)',
                      fontWeight: i === timeline.length - 1 ? 600 : 400,
                    }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #experience .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
