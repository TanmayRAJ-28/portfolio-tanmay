import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/portfolioData'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
}

function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  const renderTech = (tech) => (
    <div style={{ marginTop: '16px' }}>
      {tech.map((tag) => (
        <span
          key={tag}
          style={{
            display: 'inline-block',
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            color: '#00d4ff',
            borderRadius: '4px',
            padding: '3px 10px',
            fontSize: '0.65rem',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.05em',
            margin: '3px 3px 3px 0',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )

  return (
    <SectionWrapper id="projects">
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div className="space-y-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-heading text-2xl md:text-3xl">Featured Projects</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            A snapshot of the systems and analytics work I've been building.
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-primary)]">
          &gt; repo source: github
        </p>
      </div>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(13,13,31,0.95), rgba(19,19,31,0.95))',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '20px',
              padding: '36px',
              marginBottom: '32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(0,212,255,0.05)',
            }}
          >
            {/* Radial glow accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '300px',
                height: '300px',
                background:
                  'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
                    color: '#000',
                    fontSize: '0.6rem',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  ★ Featured
                </span>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                  {featured.category}
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  {featured.description}
                </p>
                {renderTech(featured.tech)}

                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/70 bg-gradient-to-r from-[rgba(0,212,255,0.12)] to-[rgba(123,47,255,0.18)] px-5 py-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)] shadow-[0_0_22px_rgba(0,212,255,0.22)] transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,212,255,0.33)]"
                      data-cursor-hover="true"
                    >
                      <span>GitHub</span>
                      <span className="text-[11px] transition-transform group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div className="hidden h-full flex-col justify-between gap-4 rounded-2xl border border-[var(--border-subtle)] bg-black/40 p-4 md:flex">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  System Notes
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Real-time webcam ingestion, self-learning gesture registration,
                  and an interface tuned for experimentation without retraining
                  the core model.
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                  Status: Exploring next-gen interactions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '24px',
        }}
      >
        {others.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index + 1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '28px 24px',
              cursor: 'default',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
              <div className="flex h-full flex-col justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-muted)]">
                    {project.description}
                  </p>
                  {renderTech(project.tech)}
                </div>

                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/70 bg-gradient-to-r from-[rgba(0,212,255,0.12)] to-[rgba(123,47,255,0.18)] px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)] shadow-[0_0_18px_rgba(0,212,255,0.2)] transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,212,255,0.3)]"
                      data-cursor-hover="true"
                    >
                      <span>GitHub</span>
                      <span className="text-[11px] transition-transform group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
          </motion.div>
        ))}
      </div>
      </div>
      </div>
    </SectionWrapper>
  )
}
export default Projects
