import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Spinner from '../../../components/Spinner';

describe('spinner component', () => {
  test('should have a logo into component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Spinner />
      </MemoryRouter>
    );

    const logo = getByTestId('logo');

    expect(logo).toBeTruthy();
  });
});
