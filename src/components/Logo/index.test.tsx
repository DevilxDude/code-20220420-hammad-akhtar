import Logo from 'components/Logo';
import { render } from '@testing-library/react';

describe('Testing Logo', () => {
  it('Should have the company name on the logo', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('Your Logo')).toBeInTheDocument();
  });

  it('Should have dark theme slected by default', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('Your Logo')).toHaveClass('dark');
  });

  it('Should have light theme when selected', () => {
    const { getByText } = render(<Logo variant="light" />);

    expect(getByText('Your Logo')).toHaveClass('light');
  });
});
