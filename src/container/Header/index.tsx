import { FC, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from 'components/Logo';
import styles from './index.module.scss';

const Header: FC = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      id="header"
      data-testid="header"
      className={`${styles.header} ${scroll ? styles.fixed : ''}`}
    >
      <div className={styles.container}>
        <Logo variant="light" />
        <button className={styles.toggle} onClick={toggleMobileMenu}>
          <div className={styles.barOne} />
          <div className={styles.barTwo} />
          <div className={styles.barThree} />
        </button>
        <ul className={`${styles.links} ${mobileMenu ? styles.open : ''}`}>
          <button className={styles.toggle} onClick={toggleMobileMenu}>
            <div className={styles.barOne} />
            <div className={styles.barTwo} />
            <div className={styles.barThree} />
          </button>
          <li>
            <AnchorLink offset="100" href="#explore">
              Explore
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset="100" href="#about">
              About Us
            </AnchorLink>
          </li>
          <li className={styles.hasSubmenu}>
            <a href="#null">Cities</a>
            <ul className={styles.submenu}>
              <li>
                <a href="#null">City 1</a>
              </li>
              <li>
                <a href="#null">City 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a className={styles.button} href="tel:+917894702404">
              Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
