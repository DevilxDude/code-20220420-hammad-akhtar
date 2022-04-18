import { render } from '@testing-library/react';
import ExploreSection from 'container/ExploreSection';

describe('Testing the Explore Section', () => {
  it('Should render the Explore Section', () => {
    const { getByText } = render(<ExploreSection />);
    expect(getByText('Explore')).toBeInTheDocument();
  });

  it('Should have subtitle', () => {
    const { getByText } = render(<ExploreSection />);

    expect(
      getByText('From one-guest rooms to penthouses with pools and gardens')
    ).toBeInTheDocument();
  });

  it('Should render two cards with Book button', () => {
    const { getAllByText } = render(<ExploreSection />);

    expect(getAllByText('Book!')).toHaveLength(2);
  });
});
