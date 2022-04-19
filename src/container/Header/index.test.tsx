import { render } from '@testing-library/react';
import Header from 'container/Header';

describe('Testing Header', () => {
  it('Should Render Logo on the Header', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Your Logo')).toBeInTheDocument();
  });

  it('Should render links for navigation on the header: explore, about us and cities', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Explore')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Cities')).toBeInTheDocument();
  });

  it('Should have a link to call using the phone number on the header', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Call')).toBeInTheDocument();

    expect(getByText('Call')).toHaveAttribute('href', 'tel:+917894702404');
  });
});
