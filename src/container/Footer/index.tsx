import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from 'components/Logo';
import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <footer id="footer" data-testid="footer" className={styles.container}>
      <div className={styles.legal}>
        <Logo />
        <span className={styles.copyright}>© 2021 Company Name All rights reserved</span>
      </div>
      <ul className={styles.links}>
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
        <li>
          <a href="#null">Cities</a>
        </li>
        <li>
          <a className={styles.button} href="tel:+917894702404">
            Call
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
