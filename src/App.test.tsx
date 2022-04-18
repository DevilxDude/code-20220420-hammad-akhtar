import { render } from '@testing-library/react';
import App from './App';

describe('Testing Entire App', () => {
  describe('Should render Explore Section', () => {
    it('Should have a section with the title Explore', () => {
      const { getByText } = render(<App />);
      expect(getByText('Explore')).toBeInTheDocument();
    });

    // it.todo('Should have a card book button', () => {
    //   expect(getByText('Book')).toBeInTheDocument();
    // });
  });

  it.todo('Test All Sections are visible');
});
