import { render } from '@testing-library/react';
import Footer from 'container/Footer';

describe('Testing Footer', () => {
  it('Should Render Logo on the footer', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Your Logo')).toBeInTheDocument();
  });

  it('Should render copyright on the footer', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('© 2021 Company Name All rights reserved')).toBeInTheDocument();
  });

  it('Should render links for navigation on the footer: explore, about us and cities', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Explore')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Cities')).toBeInTheDocument();
  });

  it('Should have a link to call using the phone number on the footer', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Call')).toBeInTheDocument();

    expect(getByText('Call')).toHaveAttribute('href', 'tel:+917894702404');
  });
});
