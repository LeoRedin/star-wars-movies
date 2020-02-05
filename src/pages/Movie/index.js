import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import Spinner from '~/components/Spinner';
import Character from '~/components/Character';

import getMovieImage from '~/utils/getMovieImage';

import {
  Container,
  Header,
  ContentWrapper,
  MovieCover,
  MovieDetails,
  Intro,
  Director,
  Producer,
  ReleaseDate,
  CharactersWrapper,
  Image,
} from './styles';

const Movie = ({
  history,
  match: {
    params: { id: movieId },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});
  const [movieCover, setMovieCover] = useState(
    'https://via.placeholder.com/250x400'
  );

  useEffect(() => {
    async function getMovie(id) {
      try {
        const { data } = await api.get(`/films/${id}`);
        const slicedCharacters = data.characters.slice(0, 5);
        const slicedStarships = data.starships.slice(0, 5);

        delete data.characters;
        delete data.starships;

        const charactersIds = slicedCharacters.map(character => {
          const split = character.split('/');
          return split[split.length - 2];
        });

        const newMovieInfo = {
          characters: charactersIds,
          starships: slicedStarships,
          ...data,
        };

        const { episode_id: episode } = data;

        const movieImage = getMovieImage(episode);

        setMovieInfo(newMovieInfo);
        setMovieCover(movieImage);
        setLoading(false);
      } catch (error) {
        history.push('/');
      }
    }

    getMovie(movieId);
  }, [movieId]);

  const {
    title,
    opening_crawl: intro,
    director,
    producer,
    release_date,
    characters,
  } = movieInfo;

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <Header>{title}</Header>
      <ContentWrapper>
        <MovieCover>
          <Image src={movieCover} />
        </MovieCover>
        <MovieDetails>
          <Intro>{intro}</Intro>
          <Director>Diretor: {director}</Director>
          <Producer> Produtor(es): {producer} </Producer>
          <ReleaseDate> Data de estreia : {release_date} </ReleaseDate>
          <CharactersWrapper>
            {characters
              ? characters.map(character => (
                  <Character key={character} characterId={character} />
                ))
              : null}
          </CharactersWrapper>
        </MovieDetails>
      </ContentWrapper>
    </Container>
  );
};
export default Movie;
