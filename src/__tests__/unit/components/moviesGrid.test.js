import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';

import { render, waitForElement } from '@testing-library/react';

import api from '../../../services/api';
import MoviesGrid from '../../../components/MoviesGrid';

describe('movies grid component', () => {
  test('should have a spinner', () => {
    const { container } = render(
      <MemoryRouter>
        <MoviesGrid />
      </MemoryRouter>
    );

    const spinner = container.querySelector('img[data-testid="logo"]');

    expect(spinner).toBeTruthy();
  });

  test('should show movie grid', async () => {
    const mock = new MockAdapter(api);

    mock.onGet('/films').reply(200, {
      results: [
        {
          title: 'A New Hope',
          episode_id: 4,
          opening_crawl: 'It is a period of civil war',
          director: 'George Lucas',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25',
          characters: ['https://swapi.co/api/people/1/'],
          planets: ['https://swapi.co/api/planets/2/'],
          starships: ['https://swapi.co/api/starships/2/'],
          vehicles: ['https://swapi.co/api/vehicles/4/'],
          species: ['https://swapi.co/api/species/5/'],
          created: '2014-12-10T14:23:31.880000Z',
          edited: '2015-04-11T09:46:52.774897Z',
          url: 'https://swapi.co/api/films/1/',
        },
      ],
    });

    const { container } = render(
      <MemoryRouter>
        <MoviesGrid />
      </MemoryRouter>
    );

    const movies = await waitForElement(() =>
      container.querySelector('div[data-testid="movies"]')
    );

    expect(movies).toBeTruthy();
  });
});
