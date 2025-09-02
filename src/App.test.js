import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // The app should render without throwing any errors
  expect(document.body).toBeInTheDocument();
});

test('renders welcome page on initial load', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Vido/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders start button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Let's Find a Match/i);
  expect(buttonElement).toBeInTheDocument();
});
