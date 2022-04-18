import { render } from '@testing-library/react';
import App from './App';

describe('Testing Entire App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it.todo('Test All Sections are visible');
});
