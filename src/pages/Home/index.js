import React from 'react';

import { Container, Header, Title, Subtitle } from './styles';

import MoviesGrid from '~/components/MoviesGrid';

const Home = ({ history }) => {
  return (
    <>
      <Container>
        <Header>
          <Title>Bem vindo ao Star Wars Movies!</Title>
          <Subtitle>
            Aqui você encontra todos os filmes da franquia. Para mais
            informações clique em um deles
          </Subtitle>
        </Header>
        <MoviesGrid history={history} />
      </Container>
    </>
  );
};

export default Home;
