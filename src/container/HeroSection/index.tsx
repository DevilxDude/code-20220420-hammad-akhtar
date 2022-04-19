import BookingForm from 'components/BookingForm';
import { FC } from 'react';
import styles from './index.module.scss';

const HeroSection: FC = () => {
  return (
    <section id="hero" data-testid="hero" className={styles.section}>
      <div className={styles.container}>
        <BookingForm />
      </div>
    </section>
  );
};

export default HeroSection;
