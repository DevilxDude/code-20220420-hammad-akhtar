import { render } from '@testing-library/react';
import Title from 'components/Title';

describe('Testing Title Component', () => {
  const fakeTitle = 'Fake Title';
  const fakeSubtitle = 'Fake Subtitle';

  it('Render Title and Subtitle', () => {
    const { getByText } = render(<Title title={fakeTitle} subtitle={fakeSubtitle} />);
    expect(getByText(fakeTitle)).toBeInTheDocument();
    expect(getByText(fakeSubtitle)).toBeInTheDocument();
  });

  it("Should only render title if subtitle isn't provided", () => {
    const { getByText } = render(<Title title={fakeTitle} />);
    expect(getByText(fakeTitle)).toBeInTheDocument();
    expect(() => getByText(fakeSubtitle)).toThrow();
  });
});
