import { render, screen } from '@testing-library/react';
import RootLayout from '../RootLayout';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the Header component
jest.mock('./Header', () => {
  return function DummyHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

// Mock Outlet from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  Outlet: () => <div data-testid="outlet">Outlet Component</div>,
}));

describe('RootLayout', () => {
  it('renders Header and Outlet components', () => {
    render(
      <Router>
        <RootLayout />
      </Router>
    );

    // Check if Header is rendered
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Header Component');

    // Check if Outlet is rendered
    const outletElement = screen.getByTestId('outlet');
    expect(outletElement).toBeInTheDocument();
    expect(outletElement).toHaveTextContent('Outlet Component');
  });
});
