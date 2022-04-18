import { render } from '@testing-library/react';
import Chapter from 'components/Chapter';
import chapters from 'data/chapters';

const chapter = chapters[0];

describe('Testing Room Component', () => {
  it('Render the name of the title of the chapter', () => {
    const { getByText } = render(<Chapter chapter={chapter} />);

    expect(getByText(chapter.title)).toBeInTheDocument();
  });

  it('Render the image of the chapter', () => {
    const { getByAltText } = render(<Chapter chapter={chapter} />);

    expect(getByAltText(chapter.title)).toBeInTheDocument();
    expect(getByAltText(chapter.title)).toHaveAttribute('src', chapter.image);
  });

  it('Render the description of the chapter', () => {
    const { getByText } = render(<Chapter chapter={chapter} />);

    expect(getByText(chapter.description)).toBeInTheDocument();
  });
});
