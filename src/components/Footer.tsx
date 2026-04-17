import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className="text-gradient">SALEMKO</span>
          <p>The nexus of design and performance.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Product</h4>
            <a href="#">Caractéristiques</a>
            <a href="#">Securite</a>
            <a href="#">Systeme</a>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <a href="#">A propos</a>
            <a href="#">Carrieres</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 SALEMKO. All rights reserved.</p>
        <div className={styles.social}>
          <a href="#">TW</a>
          <a href="#">GH</a>
          <a href="#">LI</a>
        </div>
      </div>
    </footer>
  );
}
