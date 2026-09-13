import { useState, useEffect } from 'react'
import { FaUser, FaFolder, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'About', href: '#about', icon: <FaUser /> },
  { label: 'Projects', href: '#projects', icon: <FaFolder /> },
  { label: 'Skills', href: '#skills', icon: <FaCode /> },
  { label: 'Experience', href: '#experience', icon: <FaBriefcase /> },
  { label: 'Contact', href: '#contact', icon: <FaEnvelope /> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Header Navbar */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : styles.gradient}`}>
        <div className={styles.logo}><a href='#about'>Kelvin</a></div>
        <ul className={styles.links}>
          {navItems.slice(0, 4).map(item => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.right}>
          <a href='#contact'><span className={styles.badge}>Contact me</span></a>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className={styles.mobileBottomNav}>
        {navItems.map(item => (
          <a key={item.label} href={item.href} className={styles.mobileNavItem}>
            <span className={styles.mobileIcon}>{item.icon}</span>
            <span className={styles.mobileLabel}>{item.label}</span>
          </a>
        ))}
      </div>
    </>
  )
}