import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrap}>
        <div className={styles.glow} />
        <h2 className={styles.title}>
          Let&apos;s Build<br />Something Epic
        </h2>
        <p className={styles.sub}>
          Kelvin doesn&apos;t byte. Reach out — he&apos;s always keen to meet fellow tech enthusiasts.
        </p>
        <div className={styles.links}>
          <a
            href="tel:+254718128724"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          ><FaPhone />
          Phone
          </a>
          <a href="mailto:wambuakelvin14@gmail.com" className={`${styles.link} ${styles.primary}`}><FaEnvelope />
            Email
          </a>
          <a
            href="./KELVIN WAMBUA MWANZIA CV.pdf"
            download="Kelvin_Wambua_CV.pdf"
            className={`${styles.link} ${styles.cv}`}
          >
            <span>⬇ Download CV</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-mwanzia-7b003a226/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          ><FaLinkedin />
          LinkedIn
          </a>
          <a
            href="https://github.com/kelvinwam"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          ><FaGithub />
           GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
