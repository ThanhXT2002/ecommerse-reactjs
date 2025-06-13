import styles from '@styles/main.module.scss';

function MyHeader() {
  return  <>
    <header className={styles.header}>
  <div className={styles.header__left}>
    <div className={styles.header__socials}>      <a href="#" className={styles.header__icon} aria-label="Facebook">
        {/* Facebook SVG */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#222"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2z" fill="#fff"/></svg>
      </a>
      <a href="#" className={styles.header__icon} aria-label="Instagram">
        {/* Instagram SVG */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#222"/><rect x="7" y="7" width="10" height="10" rx="3" fill="#fff"/><circle cx="12" cy="12" r="2.5" fill="#222"/><circle cx="16.5" cy="7.5" r="1" fill="#222"/></svg>
      </a>
      <a href="#" className={styles.header__icon} aria-label="YouTube">
        {/* YouTube SVG */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#222"/><polygon points="10,8 16,12 10,16" fill="#fff"/></svg>
      </a>
    </div>
    <nav className={styles.header__nav + ' ' + styles['header__nav--left']}>
      <a href="#" className={styles.header__link}>Elements</a>
      <a href="#" className={styles.header__link}>Our Shop</a>
      <a href="#" className={styles.header__link}>About us</a>
    </nav>
  </div>
  <div className={styles.header__center}>
    <div className={styles.header__logo}>
      <span className={styles.header__logo_title}>Marseille</span>
      <span className={styles.header__logo_sub}>XSTORE THEME</span>
    </div>
  </div>
  <div className={styles.header__right}>
    <nav className={styles.header__nav + ' ' + styles['header__nav--right']}>
      <a href="#" className={styles.header__link}>Contacts</a>
      <a href="#" className={styles.header__link}>Search</a>
      <a href="#" className={styles.header__link}>Sign In</a>
    </nav>
    <div className={styles.header__actions}>
      <button className={styles.header__action} aria-label="Refresh">
        {/* Refresh SVG */}
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10"/><path d="M20.49 15a9 9 0 0 1-14.13 3.36L1 14"/></svg>
      </button>
      <button className={styles.header__action} aria-label="Wishlist">
        {/* Heart SVG */}
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.9.9-.9-.9a5.5 5.5 0 0 0-7.8 7.8l.9.9L12 21.3l8.7-8.7.9-.9a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <button className={styles.header__action + ' ' + styles['header__action--cart']} aria-label="Cart">
        {/* Cart SVG */}
        <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span className={styles.header__cart_badge}>0</span>
      </button>
    </div>
  </div>
</header>
    </>
  
}

export default MyHeader;