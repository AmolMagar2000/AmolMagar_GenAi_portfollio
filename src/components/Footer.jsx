export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid rgba(201,162,39,0.1)',
      padding: '2.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg, #c9a227, #e4bb4f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          AM<span style={{ opacity: 0.6, fontStyle: 'italic' }}>.</span>
        </div>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.08em',
        }}>
          Built with React · © 2026 Amol Magar
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/AmolMagar2000' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/amol-magar-06997121a' },
            { label: 'Email', href: 'mailto:amolm986@gmail.com' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a227'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
