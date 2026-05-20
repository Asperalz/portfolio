import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './Hero.module.css'

export default function Hero() {
  const { displayed, done } = useTypewriter('whoami', 90, 400)

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>$&nbsp;</span>
          <span className={styles.typed}>{displayed}</span>
          <span className={`${styles.cursor} ${done ? styles.cursorBlink : ''}`} />
        </div>

        <h1 className={styles.name}>Jonathan Carroll</h1>

        <h2 className={styles.title}>
          DevOps Engineer
          <span className={styles.divider}> / </span>
          Infrastructure Automation
        </h2>

        <p className={styles.tagline}>
          Building reliable, automated infrastructure through containers, code,
          and continuous delivery.{' '}
          <span className={styles.taglineAccent}>
            Linux · Kubernetes · CI/CD · Infrastructure as Code
          </span>
        </p>

        <div className={styles.cta}>
          <a
            href="https://github.com/Asperalz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            GitHub
          </a>
<a href="#projects" className={styles.btnGhost}>
            View Projects
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scrollDown} aria-label="Scroll to about section">
        ↓
      </a>
    </section>
  )
}
