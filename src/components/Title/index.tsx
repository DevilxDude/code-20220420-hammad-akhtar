import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  title: string;
  subtitle?: string;
}

const Title: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </div>
  );
};

export default Title;
