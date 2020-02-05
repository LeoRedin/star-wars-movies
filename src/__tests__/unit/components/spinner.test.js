import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Spinner from '../../../components/Spinner';

describe('spinner component', () => {
  test('should have a logo into component', () => {
    const { container } = render(
      <MemoryRouter>
        <Spinner />
      </MemoryRouter>
    );

    const logo = container.querySelector('img[data-testid="logo"]');

    expect(logo).toBeTruthy();
  });
});
