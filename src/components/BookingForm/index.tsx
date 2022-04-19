import { FC, useState } from 'react';
import styles from './index.module.scss';

export interface BookingFormState {
  city: string;
  date: string;
  guests: number;
}

interface Props {
  onSubmit?: (_: BookingFormState) => void;
}

const BookingForm: FC<Props> = ({ onSubmit }) => {
  const [state, setState] = useState<BookingFormState>({
    city: '',
    date: '',
    guests: '' as unknown as number,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setState({ ...state, [name]: type === 'number' ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(state);
    }
  };

  return (
    <form
      id="booking-form"
      data-testid="booking-form"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <div className={styles.input}>
        <label htmlFor="city">CITY</label>
        <select name="city" value={state.city} onChange={handleChange} aria-label="city">
          <option value="">Select your city</option>
          <option value="New York">New York</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="date">DATE</label>
        <input
          type="date"
          name="date"
          value={state.date}
          onChange={handleChange}
          aria-label="date"
          placeholder="Select your dates"
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="guests">GUESTS</label>
        <input
          type="number"
          name="guests"
          value={state.guests}
          onChange={handleChange}
          aria-label="guests"
          min={1}
          placeholder="Add guests"
        />
      </div>
      <button className={styles.button} type="submit">
        <img src="/assets/images/search-icon.png" alt="Search Icon" aria-hidden />
        <span>Search</span>
      </button>
    </form>
  );
};

export default BookingForm;
