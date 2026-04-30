import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('amolm986@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'amolm986@gmail.com',
      href: 'mailto:amolm986@gmail.com',
      icon: '✉',
      color: '#c9a227',
    },
    {
      label: 'GitHub',
      value: 'github.com/AmolMagar2000',
      href: 'https://github.com/AmolMagar2000',
      icon: '⊹',
      color: '#f0f0f8',
    },
    {
      label: 'LinkedIn',
      value: 'amol-magar-06997121a',
      href: 'https://linkedin.com/in/amol-magar-06997121a',
      icon: '◈',
      color: '#5ea7d6',
    },
    {
      label: 'Phone',
      value: '+91-8669401417',
      href: 'tel:+918669401417',
      icon: '◉',
      color: '#3dd68c',
    },
  ]

  return (
    <section id="contact" style={{
      background: 'var(--bg)',
      paddingBottom: '6rem',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)', marginBottom: '1rem' }}>
            Let's build something <span style={{ color: '#c9a227', fontStyle: 'italic' }}>together</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            I'm open to exciting roles in Generative AI, backend engineering, and agentic systems. 
            Whether it's a startup or enterprise — let's talk.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Left: availability card */}
          <div>
            <div style={{
              padding: '2.5rem',
              background: 'var(--surface)',
              border: '1px solid rgba(201,162,39,0.2)',
              borderRadius: '14px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #c9a227, transparent)',
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  width: '10px', height: '10px',
                  borderRadius: '50%',
                  background: '#3dd68c',
                  boxShadow: '0 0 12px #3dd68c',
                  animation: 'pulse-glow 2s infinite',
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: '#3dd68c',
                  textTransform: 'uppercase',
                }}>
                  Open to Opportunities
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}>
                Available for<br />
                <span style={{ color: '#c9a227' }}>Full-time roles</span>
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>
                Specializing in GenAI engineering, LLM integration, RAG pipelines, and autonomous agent development. 
                Based in Pune, India — open to hybrid/remote globally.
              </p>

              <div style={{
                padding: '1rem',
                background: 'rgba(201,162,39,0.05)',
                border: '1px solid rgba(201,162,39,0.1)',
                borderRadius: '8px',
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  Looking for
                </div>
                {['GenAI / ML Engineer', 'Backend Engineer (AI/Python)', 'AI Solutions Architect'].map(role => (
                  <div key={role} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    color: 'var(--text)',
                    marginBottom: '0.3rem',
                  }}>
                    <span style={{ color: '#c9a227', fontSize: '0.5rem' }}>◆</span>
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Email copy button */}
            <button
              onClick={copyEmail}
              style={{
                width: '100%',
                padding: '1rem',
                background: copied ? 'rgba(61,214,140,0.1)' : 'rgba(201,162,39,0.08)',
                border: `1px solid ${copied ? 'rgba(61,214,140,0.4)' : 'rgba(201,162,39,0.3)'}`,
                borderRadius: '10px',
                color: copied ? '#3dd68c' : '#c9a227',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                letterSpacing: '0.05em',
              }}
            >
              {copied ? '✓ Copied to clipboard!' : '⊹ Copy Email: amolm986@gmail.com'}
            </button>
          </div>

          {/* Right: contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${link.color}40`
                  e.currentTarget.style.transform = 'translateX(6px)'
                  e.currentTarget.style.background = `rgba(${link.color === '#c9a227' ? '201,162,39' : link.color === '#f0f0f8' ? '240,240,248' : link.color === '#5ea7d6' ? '94,167,214' : '61,214,140'},0.05)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '10px',
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: link.color,
                  flexShrink: 0,
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}>
                    {link.label}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#f0f0f8',
                    fontWeight: 500,
                  }}>
                    {link.value}
                  </div>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  color: 'var(--text-dim)',
                  fontSize: '1rem',
                }}>
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
