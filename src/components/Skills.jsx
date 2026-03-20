import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { skills as skillsData } from '../data/portfolioData'
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiHtml5,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaFileExcel } from 'react-icons/fa'
import { TbChartBar } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

const ICON_MAP = {
  SiPython:           SiPython,
  SiJavascript:       SiJavascript,
  SiMysql:            SiMysql,
  SiPandas:           SiPandas,
  SiNumpy:            SiNumpy,
  SiScikitlearn:      SiScikitlearn,
  SiOpencv:           SiOpencv,
  SiPowerbi:          TbChartBar,
  SiMicrosoftexcel:   FaFileExcel,
  SiHtml5:            SiHtml5,
  SiReact:            SiReact,
  SiCss3:             FaCss3Alt,
  SiGit:              SiGit,
  SiGithub:           SiGithub,
  SiVisualstudiocode: VscVscode,
  SiJava:             FaJava,
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

const Skills = () => {
  return (
    <SectionWrapper id="skills" background="grid">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="section-heading text-2xl md:text-3xl">Tech Stack_</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              A toolkit focused on Python, data, and modern web experiences.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-primary)]">
            &gt; stack status: evolving
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <div
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  paddingLeft: '4px',
                }}
              >
                {category}
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                  {items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '14px 10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        width: '80px',
                        minWidth: '80px',
                        cursor: 'default',
                        transition:
                          'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${skill.color}80`
                        e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}30`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {(() => {
                        const IconComp = ICON_MAP[skill.icon]
                        return IconComp ? (
                          <IconComp size={24} color={skill.color} />
                        ) : null
                      })()}
                      <span
                        style={{
                          fontSize: '0.6rem',
                          fontFamily: 'JetBrains Mono, monospace',
                          color: 'var(--text-muted)',
                          textAlign: 'center',
                          letterSpacing: '0.03em',
                          lineHeight: 1.2,
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
