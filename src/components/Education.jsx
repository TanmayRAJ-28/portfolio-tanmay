import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { education } from '../data/portfolioData'

function Education() {
  return (
    <SectionWrapper id="education">
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div className="space-y-8">
        <div className="max-w-xl space-y-2">
          <h2 className="section-heading text-2xl md:text-3xl">Education Timeline</h2>
          <p className="text-sm text-[var(--text-muted)]">
            From strong school fundamentals to a focused B.Tech IT journey at KIIT.
          </p>
        </div>

        <div
          style={{ position: 'relative', maxWidth: '800px', margin: '24px auto 0 auto' }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              transform: 'translateX(-50%)',
              background:
                'linear-gradient(180deg, transparent, #00d4ff 15%, #7b2fff 85%, transparent)',
              boxShadow: '0 0 12px rgba(0,212,255,0.4)',
            }}
          />

          {education.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '48px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '24px',
                  transform: 'translate(-50%, -50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: entry.color,
                  boxShadow: `0 0 15px ${entry.color}, 0 0 30px ${entry.color}60`,
                  border: '2px solid var(--bg-primary)',
                  zIndex: 2,
                }}
              />

              <div
                style={{
                  width: '45%',
                  background: 'var(--bg-card)',
                  border: `1px solid ${entry.color}40`,
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: `0 0 20px ${entry.color}10`,
                }}
              >
                <div className="flex items-start justify-between gap-4 text-xs text-[var(--text-muted)]">
                  <div>
                    <p className="font-mono uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                      {entry.level}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                      {entry.institution}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em]">
                      {entry.degree}
                    </p>
                    <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                      {entry.board} • {entry.location || entry.year}
                    </p>
                    {entry.cgpa && (
                      <p className="mt-1 text-[11px] text-[var(--accent-primary)]">
                        CGPA: {entry.cgpa}
                      </p>
                    )}
                    {entry.percentage && (
                      <p className="mt-1 text-[11px] text-[var(--accent-primary)]">
                        Percentage: {entry.percentage}%
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="rounded-full bg-black/30 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                      {entry.year}
                    </span>
                  </div>
                </div>

                {entry.description && (
                  <p className="mt-3 text-[11px] text-[var(--text-muted)]">
                    {entry.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </SectionWrapper>
  )
}
export default Education
