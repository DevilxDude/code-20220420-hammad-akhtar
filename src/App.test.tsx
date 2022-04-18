import { render } from '@testing-library/react';
import App from './App';

describe('Testing Entire App', () => {
  describe('Should render Menu', () => {
    it.todo('Should render the Menu');
  });

  describe('Should render Hero Section', () => {
    it.todo('Should render Hero Section');
  });

  describe('Should render Explore Section', () => {
    it('Should have a section with the title Explore', () => {
      const { getByText } = render(<App />);
      expect(getByText('Explore')).toBeInTheDocument();
    });

    it('Should have a two card book buttons', () => {
      const { getAllByText } = render(<App />);

      expect(getAllByText('Book!')).toHaveLength(2);
    });
  });

  describe('Should render About Section', () => {
    it('Should have a section with the title About', () => {
      const { getByText } = render(<App />);
      expect(getByText('About Us')).toBeInTheDocument();
    });

    // it('Should have four chapters', async () => {
    //   const { findAllByText } = render(<App />);

    //   expect(await findAllByText('Chapter')).toHaveLength(4);
    // });
  });

  describe('Should render Footer Section', () => {
    it.todo('Should render Footer Section');
  });
});
