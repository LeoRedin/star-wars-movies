import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Character from '../../../components/Character';

describe('character component', () => {
  test('should have an avatar and name', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Character />
      </MemoryRouter>
    );

    const avatar = getByTestId('avatar');
    const name = getByTestId('character-name');

    expect(avatar).toBeTruthy();
    expect(name).toBeTruthy();
  });
});
