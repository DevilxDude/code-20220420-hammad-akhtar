import Logo from 'components/Logo';
import { FC } from 'react';
import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <footer id="footer" data-testid="footer" className={styles.container}>
      <div className={styles.legal}>
        <Logo />
        <span className={styles.copyright}>© 2021 Company Name All rights reserved</span>
      </div>
      <ul>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#null">Cities</a>
        </li>
        <li>
          <a href="tel:+917894702404">Call</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
