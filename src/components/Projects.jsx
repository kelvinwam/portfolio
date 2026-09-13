import styles from './Projects.module.css'
import {FaEye} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'My Portfolio',
    desc: 'Production-grade React frontend for my portfolio — responsive, performant, and pixel-perfect.',
    tech: 'React',
    image: '../src/assets/images/portfolio.png', // Path to your screenshot in public/
    link: 'https://frsna.org',
    type: 'Web App',
  },
  {
    id: 2,
    title: 'MachaWeather App',
    desc: 'Flutter mobile app with real-time weather, GPS detection, and seamless dark/light theme toggle.',
    tech: 'Flutter',
    image: '/machaweather.jpg', // Path to your screenshot in public/
    link: 'https://drive.google.com/file/d/1My0QIsHouUO6uNAGwBjjnLS_fPPulUk_/view',
    type: 'Mobile',
  },
  {
    id: 3,
    title: 'Travel Platform',
    desc: 'Full-stack Django web app featuring secure sign-up/sign-in, session management, and destination browsing.',
    tech: 'Django',
    image: '../src/assets/images/travel.png', // Path to your screenshot in public/
    link: 'https://wambua.pythonanywhere.com',
    type: 'Full-Stack',
  },
]

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <img src={project.image} alt={project.title} className={styles.thumbImage} />
        <span className={styles.thumbType}>{project.type}</span>
      </div>
      <div className={styles.cardGradient} />
      <div className={styles.techBadge}>{project.tech}</div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{project.title}</div>
        <div className={styles.cardDesc}>{project.desc}</div>
        <div className={styles.cardActions}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardBtn}
          >
            <FaEye /> View
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <h2 className={styles.accent}>Projects</h2>
      </div>
      <div className={styles.progressBar}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`${styles.seg} ${i < 8 ? styles.filled : ''}`} />
        ))}
      </div>
      <div className={styles.row}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}