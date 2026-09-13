import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import { 
  SiReact, SiFlutter, SiPython, SiDjango, SiNodedotjs,SiPostgresql, SiGit, SiLinux,SiDocker
} from 'react-icons/si';
import { FaAws, FaNetworkWired, FaCloud } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <SiReact color="#61DAFB" />, level: 100 },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" />, level: 95 },
  { name: 'Python', icon: <SiPython color="#3776AB" />, level: 100 },
  { name: 'Django', icon: <SiDjango color="#092E20" />, level: 100 },
  { name: 'AWS', icon: <FaAws color="#FF9900" />, level: 100 },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" />, level: 95 },
  { name: 'SQL', icon: <SiPostgresql color="#4169E1" />, level: 100 },
  { name: 'Git', icon: <SiGit color="#F05032" />, level: 100 },
  { name: 'Linux', icon: <SiLinux color="#FCC624" />, level: 100 },
  { name: 'Networking', icon: <FaNetworkWired color="#E50914" />, level: 100 },
  { name: 'Cloud Arch', icon: <FaCloud color="#FF9900" />, level: 100 },
  { name: 'Docker', icon: <SiDocker color="#2496ED" />, level: 90 },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="skills" ref={ref}>
      <div className={styles.header}>
        <h2 className={styles.title}>Tech Stack</h2>
      </div>
      <div className={styles.grid}>
        {skills.map(skill => (
          <div className={styles.item} key={skill.name}>
            <span className={styles.icon}>{skill.icon}</span>
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.barWrap}>
              <div
                className={styles.bar}
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
