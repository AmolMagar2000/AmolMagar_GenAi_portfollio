import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '1.25rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(8,8,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,162,39,0.15)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.4rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #c9a227, #e4bb4f)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
      }}>
        AM<span style={{ opacity: 0.6, fontStyle: 'italic' }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="nav-links">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 500,
              color: active === link.href.slice(1) ? '#c9a227' : '#8888aa',
              letterSpacing: '0.04em',
              transition: 'color 0.3s',
              position: 'relative',
              paddingBottom: '2px',
            }}
            onMouseEnter={e => e.target.style.color = '#c9a227'}
            onMouseLeave={e => e.target.style.color = active === link.href.slice(1) ? '#c9a227' : '#8888aa'}
          >
            {link.label}
            {active === link.href.slice(1) && (
              <span style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
                height: '1px',
                background: '#c9a227',
              }} />
            )}
          </a>
        ))}
        <a
          href="mailto:amolm986@gmail.com"
          style={{
            padding: '0.5rem 1.25rem',
            border: '1px solid rgba(201,162,39,0.5)',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#c9a227',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(201,162,39,0.15)'
            e.target.style.borderColor = '#c9a227'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(201,162,39,0.5)'
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#c9a227',
          fontSize: '1.5rem',
        }}
        className="hamburger"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
