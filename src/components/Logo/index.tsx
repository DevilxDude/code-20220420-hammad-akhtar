import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  variant?: 'light' | 'dark';
}

const Logo: FC<Props> = ({ variant = 'dark' }) => {
  return <h5 className={`${styles.logo} ${styles[variant]}`}>Your Logo</h5>;
};

export default Logo;
