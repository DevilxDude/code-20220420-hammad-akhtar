import { FC } from 'react';
import BookingForm from 'components/BookingForm';
import Title from 'components/Title';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './index.module.scss';

const HeroSection: FC = () => {
  return (
    <section id="hero" data-testid="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title title="Rethink your living & renting" subtitle="Make your stay painless with us" />
        </div>
        <BookingForm />
        <div className={styles.scrollDownContainer}>
          <AnchorLink
            offset="100"
            href="#explore"
            data-testid="scroll-down"
            className={styles.scrollDownButton}
          >
            <img src="/assets/images/chevron-down.png" alt="Scroll Down" />
          </AnchorLink>
        </div>
      </div>
      <img
        src="/assets/images/hero-seperator.png"
        alt="separtor"
        aria-hidden
        className={styles.sperator}
      />
    </section>
  );
};

export default HeroSection;
