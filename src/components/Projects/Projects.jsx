import styles from './Projects.module.css'

const projects = [
  {
    title: 'Self-Hosted Private Cloud & Kubernetes Cluster',
    description:
      'Designed and deployed a private cloud using VMware vSphere hosting multiple Ubuntu VMs. Implemented a full Kubernetes cluster with automated provisioning via Terraform and configuration management via Ansible (roles, Jinja2 templates, Vault for secrets). Deployed Nginx as reverse proxy and load balancer. All configuration tracked in Git.',
    tech: ['Kubernetes', 'Terraform', 'Ansible', 'VMware vSphere', 'Nginx', 'Docker', 'Ubuntu', 'Git'],
    demo: null,
    status: 'Active',
    featured: true,
  },
  {
    title: 'Portfolio CI/CD Pipeline',
    description:
      'GitHub Actions workflow that builds, containerizes, and deploys this site. Docker image pushed to a registry, Kubernetes deployment updated via Helm, Nginx serves the static build behind TLS. Infrastructure defined as code with Terraform.',
    tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Nginx', 'Terraform'],
    demo: null,
    status: 'In Progress',
    featured: false,
  },
  {
    title: 'Ansible Configuration Management Suite',
    description:
      'Library of reusable Ansible roles and playbooks for automated server provisioning. Uses Jinja2 templates for dynamic config generation, Ansible Vault for secrets, and idempotent design for reproducible, drift-free infrastructure.',
    tech: ['Ansible', 'Jinja2', 'Ansible Vault', 'Linux', 'Bash', 'YAML'],
    demo: null,
    status: 'Active',
    featured: false,
  },
]

const statusClass = {
  'Active':      styles.statusActive,
  'In Progress': styles.statusProgress,
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>// projects</span>
        <h2 className={styles.sectionTitle}>Featured Work</h2>

        <div className={styles.grid}>
          {projects.map(p => (
            <article
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.meta}>
                  <span className={`${styles.status} ${statusClass[p.status]}`}>
                    {p.status}
                  </span>
                  {p.featured && (
                    <span className={styles.featuredBadge}>Featured</span>
                  )}
                </div>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.description}>{p.description}</p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.tags}>
                  {p.tech.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {p.demo && <a href={p.demo} className={styles.link}>Demo →</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
