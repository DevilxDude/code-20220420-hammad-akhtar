import HeroSection from 'container/HeroSection';
import { render } from '@testing-library/react';

describe('Testing Hero Section', () => {
  it('Rendering the title and subitle', () => {
    const { getByText } = render(<HeroSection />);

    expect(getByText('Rethink your living & renting')).toBeInTheDocument();
    expect(getByText('Make your stay painless with us')).toBeInTheDocument();
  });

  it('Should Render a Form', () => {
    const { getByTestId } = render(<HeroSection />);

    expect(getByTestId('booking-form')).toBeInTheDocument();
  });

  it('Render a scroll down button', () => {
    const { getByTestId } = render(<HeroSection />);

    expect(getByTestId('scroll-down')).toBeInTheDocument();
  });
});
