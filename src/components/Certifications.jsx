import styles from './Certifications.module.css'

const certs = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services · 2024',
    icon: '☁️',
    link: 'https://www.credly.com/badges/78d9a846-2ef2-44be-b3cb-a3fa49cc09cf/',
  },
  {
    title: 'ALX Software Engineering',
    issuer: 'ALX Africa · Full-Stack Track',
    icon: '🎓',
    link: 'https://drive.google.com/file/d/1nAW5hELuJ4pw3t7fhzaIlkMw-DMECMIP/view',
  },
]

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.header}>
        <h2 className={styles.title}>Certifications</h2>
      </div>
      <div className={styles.grid}>
        {certs.map(cert => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.iconWrap}>{cert.icon}</div>
            <div>
              <div className={styles.certTitle}>{cert.title}</div>
              <div className={styles.certIssuer}>{cert.issuer}</div>
            </div>
            <span className={styles.arrow}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
