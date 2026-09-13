import styles from './Experience.module.css'

const experience = [
  {
    period: '2021 – Present',
    role: 'Software Engineer',
    org: 'Freelance / Independent',
    desc: 'Architecting and shipping web and mobile applications for clients across East Africa and beyond. Specialising in React frontends, Django backends, and Flutter mobile — from concept to deployment.',
  },
  {
    period: '2022 – 2023',
    role: 'Cloud & Infrastructure',
    org: 'AWS Practitioner Track',
    desc: 'Deployed and managed scalable cloud infrastructure on AWS. Worked with EC2, S3, IAM, Lambda, and CloudFront to deliver secure, cost-efficient solutions.',
  },
  {
    period: '2020 – 2022',
    role: 'ICT Hardware & Networking',
    org: 'Technical Support',
    desc: 'Hands-on installation, configuration, and maintenance of network infrastructure and ICT hardware. Diagnosed and resolved complex system and connectivity issues.',
  },
]

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>Experience</h2>
      </div>
      <div className={styles.timeline}>
        {experience.map((item, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.period}>{item.period}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.org}>{item.org}</div>
            <div className={styles.desc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
