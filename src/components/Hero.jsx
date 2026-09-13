import styles from './Hero.module.css'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const tags = ['React', 'Flutter', 'Python', 'AWS', 'Django', 'Networking']

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      {/* Backgrounds */}
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.noise} />
      <div className={styles.vignette} />

      <div className={styles.heroInner}>
        <div className={styles.content}>
        <div className={styles.featuredBadge}>
          <span>Featured</span> Engineer of the Century
        </div>

        <div className={styles.category}>Software Engineer</div>

        <h1 className={styles.title}>
          Kelvin<br />
          <span className={styles.titleAccent}>Wambua</span>
        </h1>

        <div className={styles.meta}>
          <span className={styles.match}>100% Match</span>
          <span className={styles.pill}>3+ Yrs XP</span>
          <span className={styles.pill}>AWS</span>
          <span className={styles.pill}>Full-Stack</span>
          <span className={styles.pill}>Mobile</span>
        </div>

        <p className={styles.desc}>
          A dynamic software engineer who doesn&apos;t just write code — he crafts every line.
          Specialising in web, mobile, cloud, and networking. Based in Nairobi, building for the world.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>3+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>10+</div>
            <div className={styles.statLabel}>Projects Shipped</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>2+</div>
            <div className={styles.statLabel}>Certifications</div>
          </div>
        </div>

        <div className={styles.tags}>
          {tags.map(t => (
            <span className={styles.tag} key={t}>{t}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPlay}>
            ▶ See My Work
          </a>
          <a href="#contact" className={styles.btnInfo}>
             Get In Touch
          </a>
          <a
            href="/KELVIN WAMBUA MWANZIA.pdf"
            download="Kelvin_Wambua_CV.pdf"
            className={styles.btnCv}
          >
            <span>⬇ Download CV</span>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className={styles.profileWrap}>
        <div className={styles.profileGlow} />
        <img 
          src="/profile.jpg" 
          alt="Kelvin Wambua" 
          className={styles.profileImg}
        />
      </div>
    </div>
    </section>
  )
}
