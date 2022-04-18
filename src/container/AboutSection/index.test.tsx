import { render } from '@testing-library/react';
import AboutSection from 'container/AboutSection';

describe('Testing the About Section', () => {
  it('Should render the About Section', () => {
    const { getByText } = render(<AboutSection />);
    expect(getByText('About Us')).toBeInTheDocument();
  });

  it('Should have subtitle', () => {
    const { getByText } = render(<AboutSection />);

    expect(getByText('Allow us to tell you a short story...')).toBeInTheDocument();
  });

  // it('Should have four chapters', async () => {
  //   const { findAllByText } = render(<AboutSection />);

  //   expect(await findAllByText('Chapter')).toHaveLength(4);
  // });
});
