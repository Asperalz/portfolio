import styles from './Journey.module.css'

const milestones = [
  {
    year: '2022',
    title: 'Algorithmic Foundation',
    description:
      'Began competitive problem solving on LeetCode using Java and Python. Focused on algorithmic thinking: arrays, dynamic programming, recursion, hash tables, and bit manipulation. Participated in coding competitions with an emphasis on understanding over speed.',
    tags: ['Java', 'Python', 'Algorithms', 'LeetCode'],
    upcoming: false,
  },
  {
    year: '2023',
    title: 'Linux & Systems Deep Dive',
    description:
      'Committed to mastering Linux from the ground up. Administered Ubuntu and CentOS servers, learning systemd, networking, firewalls, user management, and system hardening. Built first home lab machines for hands-on experimentation.',
    tags: ['Linux', 'Ubuntu', 'CentOS', 'Bash', 'Systemd'],
    upcoming: false,
  },
  {
    year: '2024',
    title: 'Infrastructure Automation & Private Cloud',
    description:
      'Deployed a full VMware vSphere private cloud. Implemented Kubernetes on Ubuntu VMs, automating provisioning with Terraform and configuration with Ansible (roles, Jinja2, Vault). Configured Nginx for reverse proxying and load balancing across containerized apps.',
    tags: ['Kubernetes', 'Terraform', 'Ansible', 'VMware', 'Docker', 'Nginx'],
    upcoming: false,
  },
  {
    year: '2025 – 2026',
    title: 'Security+ Certification & Formal Education',
    description:
      'Earned CompTIA Security+ (March 2026). Enrolled at Gulf Coast State College for an A.S. in Computer Science. Actively studying for CCNA to deepen networking fundamentals — TCP/IP, routing, switching, and network security.',
    tags: ['CompTIA Security+', 'CCNA', 'Networking', 'Computer Science'],
    upcoming: false,
  },
  {
    year: 'Next',
    title: 'RHCSA & Production-Grade GitOps',
    description:
      'Targeting Red Hat Certified System Administrator (RHCSA) after CCNA. Goal: build fully automated, production-grade Kubernetes infrastructure with GitOps workflows, observability stack, and zero-downtime deployments.',
    tags: ['RHCSA', 'GitOps', 'Observability', 'Production Infrastructure'],
    upcoming: true,
  },
]

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>// journey</span>
        <h2 className={styles.sectionTitle}>Learning Progression</h2>

        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`${styles.item} ${m.upcoming ? styles.upcoming : ''}`}
            >
              <div className={styles.markerCol}>
                <div className={styles.dot} />
                {i < milestones.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{m.year}</span>
                <h3 className={styles.itemTitle}>{m.title}</h3>
                <p className={styles.itemDesc}>{m.description}</p>
                <div className={styles.tags}>
                  {m.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
