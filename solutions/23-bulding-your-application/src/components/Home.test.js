import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';
import { items } from '../items';

describe('Home', () => {
  it('displays items', () => {
    render(
      <Router>
        <Home items={items} />
      </Router>,
    );
    const thumbnails = screen.queryAllByTestId('thumbnail-component');
    expect(thumbnails).toHaveLength(items.length);
  });
});
