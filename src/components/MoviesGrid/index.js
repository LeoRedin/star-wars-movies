/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Movies,
  Movie,
  Cover,
  Details,
  Title,
  ReleaseDate,
  Director,
  Image,
} from './styles';

import Spinner from '../Spinner';

import getMovieImage from '../../utils/getMovieImage';
import getMovieLink from '../../utils/getMovieLink';

import api from '../../services/api';

const MoviesGrid = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results: allMovies },
      } = await api.get('/films');

      allMovies.map(movie => (movie.image = getMovieImage(movie.episode_id)));

      setMovies(allMovies);
      setLoading(false);
    }

    getMovies();
  }, []);
  return loading ? (
    <Spinner data-testid="logo" />
  ) : (
    <Container>
      <Movies data-testid="movies">
        {movies.map(movie => (
          <Movie key={movie.url}>
            <Cover>
              <Link to={() => getMovieLink(movie.episode_id)}>
                <Image src={movie.image} />
              </Link>
            </Cover>
            <Details>
              <Title>{movie.title}</Title>
              <Director>{movie.director}</Director>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </Details>
          </Movie>
        ))}
      </Movies>
    </Container>
  );
};

export default MoviesGrid;
