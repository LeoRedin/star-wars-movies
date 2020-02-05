import movieOne from '~/assets/movies/movie-1.jpg';
import movieTwo from '~/assets/movies/movie-2.jpg';
import movieThree from '~/assets/movies/movie-3.png';
import movieFour from '~/assets/movies/movie-4.jpg';
import movieFive from '~/assets/movies/movie-5.jpg';
import movieSix from '~/assets/movies/movie-6.jpg';
import movieSeven from '~/assets/movies/movie-7.jpg';

export default function getMovieImage(episodeId) {
  const covers = {
    1: movieOne,
    2: movieTwo,
    3: movieThree,
    4: movieFour,
    5: movieFive,
    6: movieSix,
    7: movieSeven,
    default: '',
  };

  return covers[episodeId] || covers.default;
}
