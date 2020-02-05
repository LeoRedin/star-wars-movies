/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Container, Avatar, Name } from './styles';

import getCharacter from '~/utils/getCharacter';

const Character = ({ characterId }) => {
  const [avatar, setAvatar] = useState(null);
  const [size, setSize] = useState(null);
  const [name, setName] = useState('');

  const handleCharacter = characterInfo => {
    const { name: charName, icon, size: iconSize } = characterInfo;

    setAvatar(icon);
    setName(charName);
    setSize(iconSize);
  };

  useEffect(() => {
    const characterInfo = getCharacter(characterId);

    handleCharacter(characterInfo);
  }, [characterId]);

  return (
    <Container>
      <Avatar avatar={avatar} size={size} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Character;
