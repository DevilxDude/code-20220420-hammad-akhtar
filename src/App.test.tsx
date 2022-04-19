import { render } from '@testing-library/react';
import App from './App';

describe('Testing Entire App', () => {
  describe('Should render Header', () => {
    it('Should render Header', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('header')).toBeInTheDocument();
    });
  });

  describe('Should render Hero Section', () => {
    it.todo('Should render Hero Section');
  });

  describe('Should render Explore Section', () => {
    it('Should have the explore section', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('explore')).toBeInTheDocument();
    });
  });

  describe('Should render About Section', () => {
    it('Should have the about section', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('about')).toBeInTheDocument();
    });
  });

  describe('Should render Footer', () => {
    it('Should render Footer', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('footer')).toBeInTheDocument();
    });
  });
});
