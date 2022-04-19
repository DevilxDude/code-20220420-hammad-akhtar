import { FC } from 'react';
import styles from './index.module.scss';

const BookingForm: FC = () => {
  return (
    <form id="booking-form" data-testid="booking-form" className={styles.container}>
      BookingForm
    </form>
  );
};

export default BookingForm;
