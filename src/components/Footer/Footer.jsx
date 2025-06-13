import styles from '@styles/main.module.scss';

function MyFooter() {
  return <>
    <footer className={styles.footer}>
  <div className={styles.footer__logo}>
    <div className={styles.footer__logo_title}>Marseille</div>
    <div className={styles.footer__logo_sub}>XSTORE THEME</div>
  </div>
  <nav className={styles.footer__nav}>
    <a href="#" className={styles.footer__link}>Home</a>
    <a href="#" className={styles.footer__link}>Elements</a>
    <a href="#" className={styles.footer__link}>Shop</a>
    <a href="#" className={styles.footer__link}>Blog</a>
    <a href="#" className={styles.footer__link}>About Us</a>
    <a href="#" className={styles.footer__link}>Contact Us</a>
    <a href="#" className={styles.footer__link}>Compare</a>
  </nav>
  <div className={styles.footer__checkout}>Guaranteed safe ckeckout</div>
  <div className={styles.footer__payments}>
    {/* American Express */}
    <svg className={styles.footer__payment_icon} width="60" height="32" viewBox="0 0 60 32"><rect width="60" height="32" rx="4" fill="none" stroke="#bbb"/><text x="8" y="20" fontSize="10" fill="#bbb">AMERICAN</text><text x="8" y="28" fontSize="10" fill="#bbb">EXPRESS</text></svg>
    {/* Discover */}
    <svg className={styles.footer__payment_icon} width="60" height="32" viewBox="0 0 60 32"><rect width="60" height="32" rx="4" fill="none" stroke="#bbb"/><text x="8" y="20" fontSize="10" fill="#bbb">DISCOVER</text></svg>
    {/* MasterCard */}
    <svg className={styles.footer__payment_icon} width="60" height="32" viewBox="0 0 60 32"><rect width="60" height="32" rx="4" fill="none" stroke="#bbb"/><text x="8" y="20" fontSize="10" fill="#bbb">MASTERCARD</text></svg>
    {/* PayPal */}
    <svg className={styles.footer__payment_icon} width="60" height="32" viewBox="0 0 60 32"><rect width="60" height="32" rx="4" fill="none" stroke="#bbb"/><text x="8" y="20" fontSize="10" fill="#bbb">PayPal</text></svg>
    {/* Visa */}
    <svg className={styles.footer__payment_icon} width="60" height="32" viewBox="0 0 60 32"><rect width="60" height="32" rx="4" fill="none" stroke="#bbb"/><text x="8" y="20" fontSize="10" fill="#bbb">VISA</text></svg>
  </div>
  <div className={styles.footer__copyright}>
    Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.
  </div>
</footer>
  </>;
}

export default MyFooter;