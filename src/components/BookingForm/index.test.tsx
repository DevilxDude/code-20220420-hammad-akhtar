import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm, { BookingFormState } from 'components/BookingForm';

describe('Testing BookingForm', () => {
  it('Should have a select for city', () => {
    const { getByLabelText } = render(<BookingForm />);
    expect(getByLabelText('city')).toBeInTheDocument();
  });

  it('Should have a select for date', () => {
    const { getByLabelText } = render(<BookingForm />);
    expect(getByLabelText('date')).toBeInTheDocument();
  });

  it('Should have an input for entering number of guests', () => {
    const { getByLabelText } = render(<BookingForm />);
    expect(getByLabelText('guests')).toBeInTheDocument();
  });

  it('Should have a button to submit the form', () => {
    const { getByText } = render(<BookingForm />);
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('Should return return the correct values on submit', () => {
    let form: BookingFormState = {
      city: '',
      date: '',
      guests: 0,
    };

    const onSubmit = (values: BookingFormState) => {
      form = values;
    };

    const { getByLabelText, getByText } = render(<BookingForm onSubmit={onSubmit} />);

    userEvent.selectOptions(getByLabelText('city'), 'New York');
    userEvent.type(getByLabelText('date'), '2020-01-01');
    userEvent.type(getByLabelText('guests'), '2');
    userEvent.click(getByText('Search'));

    expect(form).toEqual({
      city: 'New York',
      date: '2020-01-01',
      guests: 2,
    });
  });
});
