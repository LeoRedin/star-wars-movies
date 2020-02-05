import React from 'react';

import { Container, Image } from './styles';

import logo from '../../assets/logo/logo.png';

const Spinner = () => (
  <Container>
    <Image data-testid="logo" src={logo} />
  </Container>
);

export default Spinner;
