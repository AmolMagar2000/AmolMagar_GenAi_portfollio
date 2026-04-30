import { useEffect, useRef, useState } from 'react'

const roles = [
  'Generative AI Engineer',
  'LLM Integration Specialist',
  'RAG Pipeline Architect',
  'Agentic AI Developer',
  'Backend Engineer',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx]
    let i = displayed.length

    if (typing) {
      if (i < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, i + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, i - 1)), 30)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,162,39,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.6,
        pointerEvents: 'none',
      }} />

      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '10%', right: '5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%', left: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(123,94,167,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem' }}>
        <div style={{ maxWidth: '800px' }}>
          {/* Status badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(61,214,140,0.08)',
            border: '1px solid rgba(61,214,140,0.25)',
            borderRadius: '100px',
            marginBottom: '2rem',
            animation: 'fadeInUp 0.6s ease forwards',
          }}>
            <span style={{
              width: '7px', height: '7px',
              borderRadius: '50%',
              background: '#3dd68c',
              animation: 'pulse-glow 2s ease-in-out infinite',
              boxShadow: '0 0 8px #3dd68c',
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#3dd68c',
              letterSpacing: '0.08em',
            }}>
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1rem',
            animation: 'fadeInUp 0.7s ease 0.1s forwards',
            opacity: 0,
          }}>
            <span style={{ color: 'var(--text)' }}>Amol </span>
            <span style={{
              background: 'linear-gradient(135deg, #c9a227 0%, #e4bb4f 50%, #c9a227 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s linear infinite, fadeInUp 0.7s ease 0.1s forwards',
            }}>Magar</span>
          </h1>

          {/* Typewriter role */}
          <div style={{
            height: '2.5rem',
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.7s ease 0.2s forwards',
            opacity: 0,
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'var(--gold)',
              fontWeight: 500,
            }}>
              {displayed}
              <span style={{
                display: 'inline-block',
                width: '2px', height: '1.2em',
                background: '#c9a227',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '2.5rem',
            animation: 'fadeInUp 0.7s ease 0.3s forwards',
            opacity: 0,
          }}>
            Backend specialist with <strong style={{ color: '#e4bb4f' }}>2+ years</strong> building 
            enterprise-grade AI solutions — RAG pipelines, autonomous agents, and scalable 
            LLM integrations serving <strong style={{ color: '#e4bb4f' }}>10,000+ monthly users</strong>.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s ease 0.4s forwards',
            opacity: 0,
          }}>
            <a
              href="#projects"
              style={{
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #c9a227, #a07c1a)',
                color: '#08080f',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                borderRadius: '6px',
                transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Projects →
            </a>
            <a
              href="https://github.com/AmolMagar2000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.875rem 2rem',
                background: 'transparent',
                border: '1px solid rgba(201,162,39,0.4)',
                color: '#c9a227',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                borderRadius: '6px',
                transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,162,39,0.1)'
                e.currentTarget.style.borderColor = '#c9a227'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(201,162,39,0.4)'
              }}
            >
              ⊹ GitHub
            </a>
            <a
              href="https://linkedin.com/in/amol-magar-06997121a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.875rem 2rem',
                background: 'transparent',
                border: '1px solid rgba(94,167,214,0.4)',
                color: '#5ea7d6',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                borderRadius: '6px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(94,167,214,0.08)'
                e.currentTarget.style.borderColor = '#5ea7d6'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(94,167,214,0.4)'
              }}
            >
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(201,162,39,0.12)',
            animation: 'fadeInUp 0.7s ease 0.5s forwards',
            opacity: 0,
          }}>
            {[
              { num: '2+', label: 'Years Experience' },
              { num: '10K+', label: 'Monthly Users' },
              { num: '21', label: 'GitHub Repos' },
              { num: '5+', label: 'AI Projects' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#c9a227',
                  lineHeight: 1,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                  letterSpacing: '0.05em',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'fadeIn 1s ease 1s forwards',
        opacity: 0,
      }}>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
