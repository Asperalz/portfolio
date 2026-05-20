import styles from './About.module.css'

const highlights = [
  {
    label: 'Location',
    value: 'Panama City, Florida',
  },
  {
    label: 'Education',
    value: 'A.S. Computer Science (In Progress)\nGulf Coast State College',
  },
  {
    label: 'Certifications',
    value: 'CompTIA Security+ (2026)\nCCNA — In Progress → RHCSA',
  },
  {
    label: 'Focus Areas',
    value: 'Linux · Kubernetes · Terraform\nAnsible · CI/CD · Home Lab',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionLabel}>// about</span>
        <h2 className={styles.sectionTitle}>Who I Am</h2>

        <div className={styles.body}>
          <div className={styles.bio}>
            <p>
              I&apos;m a self-taught DevOps engineer based in Panama City, Florida, building
              production-grade infrastructure skills through an extensive home lab. My work spans
              Linux systems administration, container orchestration with Kubernetes, and
              infrastructure automation using Terraform and Ansible — all running on a
              self-hosted VMware vSphere private cloud.
            </p>
            <p>
              My approach is methodical and first-principles: I understand systems by building
              and breaking them, not just following tutorials. Whether provisioning VMs with
              Terraform, authoring idempotent Ansible playbooks, or debugging Kubernetes
              networking, I focus on the <em>why</em> behind every tool and decision.
            </p>
            <p>
              I hold a CompTIA Security+ certification and am actively pursuing my CCNA to
              deepen networking fundamentals, with plans for the RHCSA after that. My long-term
              goal is to engineer production-grade, fully automated infrastructure with GitOps
              workflows at scale.
            </p>
          </div>

          <div className={styles.highlights}>
            {highlights.map(h => (
              <div key={h.label} className={styles.highlight}>
                <span className={styles.hlLabel}>{h.label}</span>
                <span className={styles.hlValue}>{h.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
