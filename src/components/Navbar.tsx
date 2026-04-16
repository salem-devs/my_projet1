import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className="text-gradient">HYPERION</span>
      </div>
      <div className={styles.links}>
        <a href="#hero">Overview</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <button className={styles.cta}>Connect</button>
      </div>
    </nav>
  );
}
