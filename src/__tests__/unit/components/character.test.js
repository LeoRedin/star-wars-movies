import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Character from '../../../components/Character';
import characterJson from '../../stub/character.json';

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

  test('should have an avatar and name receiving props', () => {
    const getCharacter = jest.fn('../../utils/getCharacter');
    getCharacter.mockReturnValueOnce(characterJson);

    const { getByTestId } = render(
      <MemoryRouter>
        <Character characterId={1} />
      </MemoryRouter>
    );

    const avatar = getByTestId('avatar');
    const avatarClass = avatar.classList[0];
    const AvatarRoots = document.getElementsByClassName(avatarClass);
    const avatarStyle = window.getComputedStyle(AvatarRoots[0]);

    const name = getByTestId('character-name');
    const charName = name.textContent;

    expect(avatarStyle.backgroundSize).toBe('1536px 1536px');
    expect(avatarStyle.backgroundImage).toBe('url(characters.png)');
    expect(charName).toBe('Luke Skywalker');
  });
});
