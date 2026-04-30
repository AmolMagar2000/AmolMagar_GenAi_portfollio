const skillGroups = [
  {
    category: 'AI & LLM',
    color: '#c9a227',
    skills: [
      { name: 'LangChain / LangGraph', level: 92 },
      { name: 'CrewAI / n8n Agentic', level: 88 },
      { name: 'RAG Pipelines', level: 95 },
      { name: 'Fine-tuning & vLLM', level: 78 },
      { name: 'Prompt Engineering', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: '#5ea7d6',
    skills: [
      { name: 'Python / FastAPI', level: 94 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'Redis / Pinecone', level: 82 },
      { name: 'Docker / CI/CD', level: 75 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#3dd68c',
    skills: [
      { name: 'AWS (Bedrock, SageMaker)', level: 80 },
      { name: 'Azure AI / Microsoft', level: 75 },
      { name: 'GCP', level: 65 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
  {
    category: 'Frontend',
    color: '#7b5ea7',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'TypeScript', level: 72 },
      { name: 'Streamlit', level: 88 },
      { name: 'Vite / Next.js', level: 70 },
    ],
  },
]

const techStack = [
  'Python', 'JavaScript', 'Java', 'SQL',
  'FastAPI', 'LangChain', 'CrewAI', 'n8n',
  'GPT-4o', 'Gemini', 'Llama 2', 'Mistral',
  'Pinecone', 'PGVector', 'Redis', 'PostgreSQL',
  'AWS', 'Azure', 'Docker', 'React', 'Streamlit',
  'MCP', 'vLLM', 'PyTorch', 'Dialogflow',
]

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.4rem',
      }}>
        <span style={{ fontSize: '0.825rem', color: '#c0c0d8' }}>{name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color,
        }}>{level}%</span>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: '10px',
          position: 'relative',
          transition: 'width 1.5s ease',
        }}>
          <div style={{
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            width: '8px',
            background: color,
            borderRadius: '50%',
            boxShadow: `0 0 8px ${color}`,
          }} />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}>
            Tools I <span style={{ color: '#c9a227', fontStyle: 'italic' }}>wield</span>
          </h2>
        </div>

        {/* Skill groups grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${group.color}40`
                e.currentTarget.style.boxShadow = `0 10px 40px rgba(0,0,0,0.3), 0 0 20px ${group.color}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                }} />
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: group.color,
                  fontWeight: 600,
                }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div style={{
          padding: '2.5rem',
          background: 'rgba(201,162,39,0.03)',
          border: '1px solid rgba(201,162,39,0.1)',
          borderRadius: '12px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Full Technology Spectrum
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
            justifyContent: 'center',
          }}>
            {techStack.map((tech, i) => (
              <span
                key={tech}
                style={{
                  padding: '0.4rem 0.875rem',
                  background: i % 5 === 0 ? 'rgba(201,162,39,0.1)' :
                               i % 5 === 1 ? 'rgba(94,167,214,0.08)' :
                               i % 5 === 2 ? 'rgba(61,214,140,0.08)' :
                               i % 5 === 3 ? 'rgba(123,94,167,0.08)' :
                               'rgba(255,255,255,0.04)',
                  border: '1px solid ' + (
                    i % 5 === 0 ? 'rgba(201,162,39,0.2)' :
                    i % 5 === 1 ? 'rgba(94,167,214,0.2)' :
                    i % 5 === 2 ? 'rgba(61,214,140,0.2)' :
                    i % 5 === 3 ? 'rgba(123,94,167,0.2)' :
                    'rgba(255,255,255,0.08)'
                  ),
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  color: i % 5 === 0 ? '#c9a227' :
                         i % 5 === 1 ? '#5ea7d6' :
                         i % 5 === 2 ? '#3dd68c' :
                         i % 5 === 3 ? '#a07bcf' :
                         '#8888aa',
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
