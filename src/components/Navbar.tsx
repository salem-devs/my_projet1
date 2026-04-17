import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className="text-gradient">SALEMKO</span>
      </div>
      <div className={styles.links}>
        <a href="#hero">Apercu</a>
        <a href="#features">Caractéristiques</a>
        <a href="#about">À propos</a>
        <button className={styles.cta}>Connecter</button>
      </div>
    </nav>
  );
}
