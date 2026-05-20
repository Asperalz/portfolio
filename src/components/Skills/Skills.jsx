import styles from './Skills.module.css'

const groups = [
  {
    num: '01',
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Helm', 'Container Registries'],
  },
  {
    num: '02',
    category: 'Infrastructure',
    skills: ['Terraform', 'Ansible', 'Nginx', 'Linux', 'VMware vSphere', 'Ansible Vault'],
  },
  {
    num: '03',
    category: 'Development',
    skills: ['Python', 'Bash', 'JavaScript', 'React', 'Git', 'Jinja2'],
  },
  {
    num: '04',
    category: 'Networking & Security',
    skills: ['TCP/IP', 'DNS', 'SSL/TLS', 'Load Balancing', 'VPN', 'CompTIA Security+'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>// skills</span>
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>

        <div className={styles.grid}>
          {groups.map(g => (
            <div key={g.num} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.num}>{g.num}</span>
                <h3 className={styles.category}>{g.category}</h3>
              </div>
              <div className={styles.tags}>
                {g.skills.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
